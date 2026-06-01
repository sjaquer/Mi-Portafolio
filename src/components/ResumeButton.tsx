import React, { useState } from 'react';
import { FileText, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import { cn } from '../utils/cn';
import { experiences, education, projects } from '../data/portfolio';
import { siteContent } from '../data/siteContent';

/**
 * Reemplaza caracteres Unicode problemáticos por equivalentes ASCII
 * que jsPDF puede renderizar con fuentes estándar.
 */
function sanitizeForPdf(text: string): string {
  return text
    .replace(/[─━═]/g, '-')
    .replace(/[▸►▹▻]/g, '>')
    .replace(/[•◦●]/g, '-')
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/—/g, '-')
    .replace(/–/g, '-')
    .replace(/…/g, '...')
    .replace(/[^\x00-\x7F]/g, (ch) => {
      // Mantener letras acentuadas comunes del español
      const map: Record<string, string> = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
        'ñ': 'n', 'Ñ': 'N', 'ü': 'u', 'Ü': 'U',
      };
      return map[ch] || '';
    });
}

function alignCenter(text: string, width: number): string {
  const pad = Math.max(0, Math.floor((width - text.length) / 2));
  return " ".repeat(pad) + text;
}

/**
 * Construye dinámicamente el currículum en texto plano de alta densidad
 * basado en los arrays de datos activos del portafolio.
 */
function buildResumeText(lang: 'es' | 'en'): string {
  const parts: string[] = [];

  // --- HEADER DECORATION ---
  parts.push("================================================================================");
  const fullName = siteContent.brand.name.toUpperCase();
  parts.push(alignCenter(fullName, 80));
  
  const subtitle = lang === 'es' 
    ? "Business Intelligence & Soluciones Digitales" 
    : "Business Intelligence & Digital Solutions";
  parts.push(alignCenter(subtitle, 80));
  parts.push("================================================================================");
  parts.push("");

  // --- PERFIL PROFESIONAL ---
  const profileTitle = lang === 'es' ? "PERFIL PROFESIONAL" : "PROFESSIONAL PROFILE";
  parts.push(profileTitle);
  parts.push("─".repeat(80));
  
  const profileDesc = lang === 'es'
    ? "Estudiante de 9.º ciclo de Administracion y Negocios Internacionales. Especializado en el desarrollo de herramientas digitales, estrategias de marketing basado en datos, Business Intelligence (BI) y Data Visualization para optimizar la toma de decisiones empresariales."
    : "Undergraduate student (9th semester) in Business Administration and International Business. Specialized in building digital tools, data-driven marketing strategies, Business Intelligence (BI), and Data Visualization to improve business decision-making.";
  parts.push(profileDesc);
  parts.push("");

  // --- CONTACTO ---
  const contactTitle = lang === 'es' ? "DATOS DE CONTACTO" : "CONTACT";
  parts.push(contactTitle);
  parts.push("─".repeat(80));
  parts.push(`Ubicacion   : Centro de Lima - Lima, Peru`);
  parts.push(`Telefono    : +51 946 978 919`);
  parts.push(`Email       : sjaquer@outlook.es`);
  parts.push(`LinkedIn    : linkedin.com/in/sjaquer`);
  parts.push(`Website     : sjaquer.is-a.dev`);
  parts.push("");

  // --- EXPERIENCIA ---
  const expTitle = lang === 'es' ? "EXPERIENCIA PROFESIONAL" : "PROFESSIONAL EXPERIENCE";
  parts.push(expTitle);
  parts.push("─".repeat(80));
  parts.push("");

  experiences.forEach(exp => {
    const titleText = lang === 'es' ? exp.title.toUpperCase() : (exp.titleEn || exp.title).toUpperCase();
    const companyText = exp.company;
    const durationText = exp.duration || "";
    const locationText = lang === 'es' ? exp.location : (exp.locationEn || exp.location);

    parts.push(`> ${titleText}`);
    parts.push(`  ${companyText} | ${durationText} | ${locationText}`);
    
    const respList = lang === 'es' ? exp.responsibilities : (exp.responsibilitiesEn || exp.responsibilities);
    if (respList) {
      respList.forEach(resp => {
        parts.push(`  - ${resp}`);
      });
    }
    
    if (exp.techStack && exp.techStack.length > 0) {
      const techLabel = lang === 'es' ? "Tecnologias" : "Technologies";
      parts.push(`  ${techLabel}: ${exp.techStack.join(', ')}`);
    }
    parts.push("");
  });

  // --- EDUCACION ---
  const eduTitle = lang === 'es' ? "EDUCACION" : "EDUCATION";
  parts.push(eduTitle);
  parts.push("─".repeat(80));
  parts.push("");

  const academicItems = education.filter(edu => edu.tier === 'academic');
  academicItems.forEach(edu => {
    const degreeText = lang === 'es' ? edu.degree : (edu.degreeEn || edu.degree);
    const instText = lang === 'es' ? edu.institution : (edu.institutionEn || edu.institution);
    const durText = edu.duration || "";
    const statusText = lang === 'es' ? edu.status : (edu.statusEn || edu.status);
    
    parts.push(`> ${degreeText}`);
    parts.push(`  ${instText} | ${durText} | ${statusText}`);
    parts.push("");
  });

  // --- CERTIFICACIONES ---
  const certTitle = lang === 'es' ? "CERTIFICACIONES" : "CERTIFICATIONS";
  parts.push(certTitle);
  parts.push("─".repeat(80));
  parts.push("");

  // Categorizar certificaciones
  const aiCerts = education.filter(edu => edu.tier === 'ai-certification');
  const techCerts = education.filter(edu => edu.tier === 'tech');

  const aiLabel = lang === 'es' ? "IA & Datos:" : "AI & Data:";
  parts.push(aiLabel);
  aiCerts.forEach(edu => {
    const degreeText = lang === 'es' ? edu.degree : (edu.degreeEn || edu.degree);
    const instText = lang === 'es' ? edu.institution : (edu.institutionEn || edu.institution);
    const yearText = edu.duration || "";
    parts.push(`  > ${degreeText} - ${instText}, ${yearText}`);
  });
  parts.push("");

  const devLabel = lang === 'es' ? "Desarrollo & BI:" : "Development & BI:";
  parts.push(devLabel);
  techCerts.forEach(edu => {
    const degreeText = lang === 'es' ? edu.degree : (edu.degreeEn || edu.degree);
    const instText = lang === 'es' ? edu.institution : (edu.institutionEn || edu.institution);
    const yearText = edu.duration || "";
    parts.push(`  > ${degreeText} - ${instText}, ${yearText}`);
  });
  parts.push("");

  // --- SKILLS ---
  const skillsTitle = lang === 'es' ? "HABILIDADES CLAVE" : "KEY SKILLS";
  parts.push(skillsTitle);
  parts.push("─".repeat(80));
  parts.push("");

  if (lang === 'es') {
    parts.push("Tecnologias & Datos:");
    parts.push("  Business Intelligence, Data Visualization, SQL Server, Python,");
    parts.push("  Integracion de APIs, Git, React, TypeScript, Firebase");
    parts.push("");
    parts.push("Estrategia:");
    parts.push("  Analisis Predictivo, SEO Tecnico, Google Analytics, Prompt Engineering");
    parts.push("");
    parts.push("Operaciones:");
    parts.push("  Automatizacion de flujos, analisis de costos, metricas KPIs, ETL");
    parts.push("");
    parts.push("Idiomas:");
    parts.push("  Ingles C1 (Nivel Avanzado)");
  } else {
    parts.push("Technologies & Data:");
    parts.push("  Business Intelligence, Data Visualization, SQL Server, Python,");
    parts.push("  API Integration, Git, React, TypeScript, Firebase");
    parts.push("");
    parts.push("Strategy:");
    parts.push("  Predictive Analytics, Technical SEO, Google Analytics, Prompt Engineering");
    parts.push("");
    parts.push("Operations:");
    parts.push("  Workflow Automation, Cost Analysis, KPI Metrics, ETL");
    parts.push("");
    parts.push("Languages:");
    parts.push("  English C1 (Advanced)");
  }
  parts.push("");

  // --- PROYECTOS ---
  const projTitle = lang === 'es' ? "PROYECTOS DESTACADOS" : "SELECTED PROJECTS";
  parts.push(projTitle);
  parts.push("─".repeat(80));
  parts.push("");

  projects.forEach(proj => {
    const titleText = proj.title;
    const descText = lang === 'es' ? proj.subtitle : (proj.subtitleEn || proj.subtitle || proj.description);
    parts.push(`> ${titleText} - ${descText}`);
  });
  parts.push("");

  // --- FOOTER ---
  parts.push("================================================================================");
  const footerSource = lang === 'es'
    ? `Generado desde: sjaquer.is-a.dev | Actualizado: Junio 2026`
    : `Generated from: sjaquer.is-a.dev | Updated: June 2026`;
  parts.push(alignCenter(footerSource, 80));
  parts.push("================================================================================");

  return parts.join("\n");
}

/**
 * Genera un PDF directamente en memoria usando jsPDF basados en el idioma elegido.
 */
async function generatePdfFromData(
  lang: 'es' | 'en',
  filename: string,
  title: string,
  accent: [number, number, number] = [16, 185, 129]
) {
  console.log('[ResumeButton] Iniciando generacion dinamica de PDF para:', lang);

  const rawText = buildResumeText(lang);
  const cleanText = sanitizeForPdf(rawText);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = new (jsPDF as any)({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginLeft = 15;
  const marginRight = 15;
  const marginTop = 20;
  const marginBottom = 15;
  const usableWidth = pageWidth - marginLeft - marginRight;

  // -- Titulo --
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(accent[0], accent[1], accent[2]);
  doc.text(sanitizeForPdf(title), marginLeft, marginTop);

  // Linea decorativa bajo el titulo
  const titleY = marginTop + 3;
  doc.setDrawColor(accent[0], accent[1], accent[2]);
  doc.setLineWidth(0.5);
  doc.line(marginLeft, titleY, pageWidth - marginRight, titleY);

  // -- Cuerpo del texto --
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(55, 65, 81);

  const lines = cleanText.split('\n');
  let y = titleY + 8;

  for (const line of lines) {
    const trimmed = line.trim();

    // Detectar separadores (lineas de guiones, signos igual, etc.)
    const isSeparator = /^[-=]{10,}$/.test(trimmed);

    // Detectar encabezados de seccion (MAYUSCULAS, sin ser separador)
    const isSectionHeader = trimmed.length > 3 &&
      trimmed === trimmed.toUpperCase() &&
      /[A-Z]/.test(trimmed) &&
      !isSeparator &&
      !trimmed.startsWith('>') &&
      !trimmed.startsWith('-');

    if (isSeparator) {
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.2);
      doc.line(marginLeft, y - 1, pageWidth - marginRight, y - 1);
      y += 3;
    } else if (isSectionHeader) {
      y += 2;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(accent[0], accent[1], accent[2]);
      doc.text(trimmed, marginLeft, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(55, 65, 81);
      y += 5;
    } else {
      // Texto normal con word-wrap
      const wrappedLines: string[] = doc.splitTextToSize(line || ' ', usableWidth);
      for (const wl of wrappedLines) {
        if (y > pageHeight - marginBottom) {
          doc.addPage();
          y = marginTop;
        }
        doc.text(wl, marginLeft, y);
        y += 3.8;
      }
    }

    if (y > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
    }
  }

  console.log('[ResumeButton] PDF generado, guardando como:', filename);
  doc.save(filename);
}

export const ResumeButton: React.FC = () => {
  const [loading, setLoading] = useState<{es: boolean; en: boolean}>({es:false,en:false});

  const handleDownload = async (lang: 'es' | 'en') => {
    try {
      if (lang === 'es') setLoading(s => ({...s, es:true})); else setLoading(s => ({...s, en:true}));
      if (lang === 'es') {
        await generatePdfFromData('es', 'Sebastian_Jaque_CV_ES.pdf', 'Curriculum - Sebastian Jaque', [16, 185, 129]);
      } else {
        await generatePdfFromData('en', 'Sebastian_Jaque_CV_EN.pdf', 'Resume - Sebastian Jaque', [16, 185, 129]);
      }

      // Celebracion de exito con confeti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        disableForReducedMotion: true,
        colors: ['#34d399', '#10b981', '#059669', '#6ee7b7']
      });
    } catch (e) {
      console.error('[ResumeButton] ERROR:', e);
      alert('Error generando PDF.');
    } finally {
      if (lang === 'es') setLoading(s => ({...s, es:false})); else setLoading(s => ({...s, en:false}));
    }
  };

  return (
    <div className="inline-flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-xl p-1 backdrop-blur-sm">
      <motion.button
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        onClick={() => handleDownload('es')}
        className={cn('flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-colors', 'text-zinc-400 hover:text-emerald-400')}
      >
        <FileText size={14} strokeWidth={1.5} /> {loading.es ? 'Generando...' : 'Descargar CV (ES)'}
      </motion.button>
      <div className="w-px h-5 bg-zinc-800" />
      <motion.button
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        onClick={() => handleDownload('en')}
        className={cn('flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-colors', 'text-zinc-400 hover:text-emerald-400')}
      >
        <Bot size={14} strokeWidth={1.5} /> {loading.en ? 'Generando...' : 'Download (EN)'}
      </motion.button>
    </div>
  );
};
