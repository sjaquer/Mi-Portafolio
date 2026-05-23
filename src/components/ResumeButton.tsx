import React, { useState } from 'react';
import { FileText, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import { cn } from '../utils/cn';

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

/**
 * Genera un PDF directamente desde un archivo .txt usando jsPDF.
 * No depende de html2canvas — escribe texto línea por línea.
 */
async function generatePdfFromText(
  url: string,
  filename: string,
  title: string,
  accent: [number, number, number] = [6, 182, 212]
) {
  console.log('[ResumeButton] Iniciando generacion PDF:', url);

  const res = await fetch(url);
  if (!res.ok) throw new Error('No se pudo leer el archivo ' + url);
  const rawText = await res.text();
  console.log('[ResumeButton] Texto cargado, longitud:', rawText.length);

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
  console.log('[ResumeButton] doc.save() completado');
}

export const ResumeButton: React.FC = () => {
  const [loading, setLoading] = useState<{es: boolean; en: boolean}>({es:false,en:false});

  const handleDownload = async (lang: 'es' | 'en') => {
    console.log('[ResumeButton] Click detectado, lang:', lang);
    try {
      if (lang === 'es') setLoading(s => ({...s, es:true})); else setLoading(s => ({...s, en:true}));
      if (lang === 'es') {
        await generatePdfFromText('/resume.txt', 'Sebastian_Jaque_CV_ES.pdf', 'Curriculum - Sebastian Jaque', [6, 182, 212]);
      } else {
        await generatePdfFromText('/resume_en.txt', 'Sebastian_Jaque_CV_EN.pdf', 'Resume - Sebastian Jaque', [139, 92, 246]);
      }

      // Celebración de éxito con confeti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        disableForReducedMotion: true,
        colors: lang === 'es' ? ['#22d3ee', '#06b6d4', '#0891b2'] : ['#a78bfa', '#8b5cf6', '#7c3aed']
      });
    } catch (e) {
      console.error('[ResumeButton] ERROR:', e);
      alert('Error generando PDF. Revisa la consola.');
    } finally {
      if (lang === 'es') setLoading(s => ({...s, es:false})); else setLoading(s => ({...s, en:false}));
    }
  };

  return (
    <div className="inline-flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-xl p-1 backdrop-blur-sm">
      <motion.button
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        onClick={() => handleDownload('es')}
        className={cn('flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-colors', 'text-zinc-400 hover:text-cyan-400')}
      >
        <FileText size={14} strokeWidth={1.5} /> {loading.es ? 'Generando...' : 'Descargar CV (ES)'}
      </motion.button>
      <div className="w-px h-5 bg-zinc-800" />
      <motion.button
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        onClick={() => handleDownload('en')}
        className={cn('flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-colors', 'text-zinc-400 hover:text-violet-400')}
      >
        <Bot size={14} strokeWidth={1.5} /> {loading.en ? 'Generando...' : 'Download (EN)'}
      </motion.button>
    </div>
  );
};

