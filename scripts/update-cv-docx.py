#!/usr/bin/env python3
import copy
import os
import zipfile
import xml.etree.ElementTree as ET

DOCX_PATH = "content/cv/CV-Sebastian-Jaque.docx"
BACKUP_PATH = "content/cv/CV-Sebastian-Jaque.backup.docx"

# Register namespaces
ns = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
}
for prefix, uri in ns.items():
    ET.register_namespace(prefix, uri)

W_NS = f"{{{ns['w']}}}"

def make_r(text, font="Calibri", sz="19", bold=False, italic=False, color=None):
    r = ET.Element(f"{W_NS}r")
    rPr = ET.SubElement(r, f"{W_NS}rPr")
    
    rFonts = ET.SubElement(rPr, f"{W_NS}rFonts")
    rFonts.set(f"{W_NS}ascii", font)
    rFonts.set(f"{W_NS}cs", font)
    rFonts.set(f"{W_NS}eastAsia", font)
    rFonts.set(f"{W_NS}hAnsi", font)
    
    if bold:
        ET.SubElement(rPr, f"{W_NS}b")
        ET.SubElement(rPr, f"{W_NS}bCs")
    if italic:
        ET.SubElement(rPr, f"{W_NS}i")
        ET.SubElement(rPr, f"{W_NS}iCs")
    if color:
        c = ET.SubElement(rPr, f"{W_NS}color")
        c.set(f"{W_NS}val", color)
        
    s = ET.SubElement(rPr, f"{W_NS}sz")
    s.set(f"{W_NS}val", sz)
    sCs = ET.SubElement(rPr, f"{W_NS}szCs")
    sCs.set(f"{W_NS}val", sz)
    
    t = ET.SubElement(r, f"{W_NS}t")
    t.set("{http://www.w3.org/XML/1998/namespace}space", "preserve")
    t.text = text
    return r

def make_bullet_p(parts, numId="2", after="20"):
    """parts is list of (text, bold, color)"""
    p = ET.Element(f"{W_NS}p")
    pPr = ET.SubElement(p, f"{W_NS}pPr")
    pStyle = ET.SubElement(pPr, f"{W_NS}pStyle")
    pStyle.set(f"{W_NS}val", "ListParagraph")
    
    numPr = ET.SubElement(pPr, f"{W_NS}numPr")
    ilvl = ET.SubElement(numPr, f"{W_NS}ilvl")
    ilvl.set(f"{W_NS}val", "0")
    nId = ET.SubElement(numPr, f"{W_NS}numId")
    nId.set(f"{W_NS}val", numId)
    
    spacing = ET.SubElement(pPr, f"{W_NS}spacing")
    spacing.set(f"{W_NS}after", after)
    
    for item in parts:
        text = item[0]
        bold = item[1] if len(item) > 1 else False
        color = item[2] if len(item) > 2 else None
        p.append(make_r(text, bold=bold, color=color))
    return p

def make_job_header(company, location, dates, after="0", before="70"):
    p = ET.Element(f"{W_NS}p")
    pPr = ET.SubElement(p, f"{W_NS}pPr")
    tabs = ET.SubElement(pPr, f"{W_NS}tabs")
    tab = ET.SubElement(tabs, f"{W_NS}tab")
    tab.set(f"{W_NS}val", "right")
    tab.set(f"{W_NS}pos", "10306")
    
    spacing = ET.SubElement(pPr, f"{W_NS}spacing")
    spacing.set(f"{W_NS}after", after)
    spacing.set(f"{W_NS}before", before)
    
    p.append(make_r(company, sz="21", bold=True))
    p.append(make_r(f"  |  {location}", sz="19", color="555555"))
    p.append(make_r(f"\t{dates}", sz="19", color="555555"))
    return p

def make_job_title(title, after="30"):
    p = ET.Element(f"{W_NS}p")
    pPr = ET.SubElement(p, f"{W_NS}pPr")
    spacing = ET.SubElement(pPr, f"{W_NS}spacing")
    spacing.set(f"{W_NS}after", after)
    p.append(make_r(title, sz="19", italic=True, color="1F3A5F"))
    return p

def make_section_header(title, before="120", after="40"):
    p = ET.Element(f"{W_NS}p")
    pPr = ET.SubElement(p, f"{W_NS}pPr")
    spacing = ET.SubElement(pPr, f"{W_NS}spacing")
    spacing.set(f"{W_NS}before", before)
    spacing.set(f"{W_NS}after", after)
    p.append(make_r(title, sz="22", bold=True, color="1F3A5F"))
    return p

def make_skills_line(label, content, after="30"):
    p = ET.Element(f"{W_NS}p")
    pPr = ET.SubElement(p, f"{W_NS}pPr")
    spacing = ET.SubElement(pPr, f"{W_NS}spacing")
    spacing.set(f"{W_NS}after", after)
    p.append(make_r(label + ": ", sz="19", bold=True))
    p.append(make_r(content, sz="19"))
    return p

def update_docx():
    # Make backup if not exists
    if not os.path.exists(BACKUP_PATH):
        with open(DOCX_PATH, 'rb') as f_in, open(BACKUP_PATH, 'wb') as f_out:
            f_out.write(f_in.read())

    with zipfile.ZipFile(DOCX_PATH, 'r') as z:
        file_map = {name: z.read(name) for name in z.namelist()}

    tree = ET.fromstring(file_map['word/document.xml'])
    body = tree.find(f"{W_NS}body")
    all_p = body.findall(f"{W_NS}p")

    # Keep p0 (Name), p2 (Links), sectPr
    p0 = all_p[0] # SEBASTIÁN EMILIANO JAQUE REÁTEGUI
    p2 = all_p[2] # Links
    sectPr = body.find(f"{W_NS}sectPr")

    # New p1: Role
    p1 = ET.Element(f"{W_NS}p")
    p1_Pr = ET.SubElement(p1, f"{W_NS}pPr")
    p1_spacing = ET.SubElement(p1_Pr, f"{W_NS}spacing")
    p1_spacing.set(f"{W_NS}after", "40")
    p1_jc = ET.SubElement(p1_Pr, f"{W_NS}jc")
    p1_jc.set(f"{W_NS}val", "center")
    p1.append(make_r("Analista de Producto  ·  Desarrollo Web  ·  Automatización de Procesos", sz="22", bold=True, color="1F3A5F"))

    # Section: PERFIL
    sec_perfil = make_section_header("PERFIL")
    p_perfil = ET.Element(f"{W_NS}p")
    p_perfil_Pr = ET.SubElement(p_perfil, f"{W_NS}pPr")
    p_perfil_spacing = ET.SubElement(p_perfil_Pr, f"{W_NS}spacing")
    p_perfil_spacing.set(f"{W_NS}after", "60")
    p_perfil.append(make_r(
        "Estudiante de último ciclo de Administración y Negocios Internacionales con perfil técnico en desarrollo web (Next.js), automatización (Python) e integración de APIs. Especializado en análisis de producto, descubrimiento y diseño de flujos de usuario, y construcción de soluciones digitales que optimizan la operación de negocio y reducen tiempos de ciclo. Enfoque riguroso en métricas de producto, usabilidad y valor medible para el usuario.",
        sz="19"
    ))

    # Section: EXPERIENCIA
    sec_exp = make_section_header("EXPERIENCIA")

    # 1. Wiener
    exp1_h = make_job_header("Universidad Privada Norbert Wiener", "Lima", "Jun 2026 – Actualidad", before="40")
    exp1_t = make_job_title("Practicante Pre Profesional — Dirección de Empleabilidad y Alumni")
    exp1_b1 = make_bullet_p([
        ("Lideré el desarrollo y producto de Empleabilidad Wiener (bolsa laboral, creador de CV con IA y feria virtual en Next.js, Supabase/PostgreSQL, Docker, Microsoft Entra ID y Playwright E2E), unificando ", False),
        ("tres plataformas de terceros en una propia", True),
        (". En producción desde oct. 2026.", False)
    ])
    exp1_b2 = make_bullet_p([
        ("Construí un sistema de difusión por correo con segmentación, personalización y lista de exclusión (Ley 29733): el envío de campañas de 8 000 correos pasó de horas a ", False),
        ("tan solo 5–10 minutos", True),
        (".", False)
    ])
    exp1_b3 = make_bullet_p([
        ("Desarrollé micrositios, landings y portal de formularios con validación de identidad contra padrón institucional y tableros en tiempo real para encuestas NPS y seguimiento de egresados.", False)
    ])
    exp1_b4 = make_bullet_p([
        ("Automaticé la extracción y publicación de convocatorias laborales 24/7 mediante un bot con IA (Python, Playwright, LLM local y Gemini) y depuración de bases de datos de empresas.", False)
    ])

    # 2. Big Jack Burgers
    exp2_h = make_job_header("Big Jack Burgers", "Lima", "Nov 2025 – Sep 2026")
    exp2_t = make_job_title("Operaciones y Sistemas")
    exp2_b1 = make_bullet_p([
        ("Diseñé e implementé el ecosistema de pedidos en tiempo real (carta digital interactiva, bot de WhatsApp con IA y ERP de cocina/despacho en Next.js y Firebase), reduciendo en ", False),
        ("35%", True),
        (" el tiempo de procesamiento por orden.", False)
    ])
    exp2_b2 = make_bullet_p([
        ("Reestructuré la política de precios a partir de análisis de costos unitarios y datos de venta, elevando el margen mensual en ", False),
        ("15%", True),
        (".", False)
    ])
    exp2_b3 = make_bullet_p([
        ("Gestioné indicadores de satisfacción y experiencia de comensales para optimizar los flujos operativos del producto digital.", False)
    ])

    # 3. Freelance (includes Dearel, started Jun 2025!)
    exp3_h = make_job_header("Freelance — Soluciones Digitales y de Producto", "Lima · Remoto", "Jun 2025 – Actualidad")
    exp3_t = make_job_title("Desarrollador de Soluciones y Analista de Producto")
    exp3_b1 = make_bullet_p([
        ("Integré Shopify, CRM (Kommo) y Google Sheets mediante APIs REST y webhooks para retail (Dearel), reduciendo las tareas administrativas manuales en ", False),
        ("30%", True),
        (".", False)
    ])
    exp3_b2 = make_bullet_p([
        ("Desarrollé ", False),
        ("LogINV", True),
        (", plataforma agroindustrial multialmacén para gestión de stock en tiempo real, alertas de expiración y cálculo automatizado de puntos de reorden (ROP).", False)
    ])
    exp3_b3 = make_bullet_p([
        ("Construí ", False),
        ("PrestaFacilito", True),
        (" (gestión de préstamos y cobranzas con lectura OCR de comprobantes de pago) y tableros de BI para control de inventario y ventas.", False)
    ])

    # 4. Neon Led Store
    exp4_h = make_job_header("Neon Led Store", "Lima", "Jun 2025 – Ago 2025")
    exp4_t = make_job_title("Practicante de Optimización Web y Canales Digitales")
    exp4_b1 = make_bullet_p([
        ("Ejecuté estrategias de SEO técnico, semántico y arquitectura de contenidos que incrementaron los leads orgánicos en ", False),
        ("40%", True),
        (".", False)
    ])
    exp4_b2 = make_bullet_p([
        ("Medí y reporté rendimiento y embudos de usuario con Google Analytics. Reconocido como Colaborador del Mes tres meses consecutivos.", False)
    ])

    # 5. Zeus Maritime
    exp5_h = make_job_header("Zeus Maritime Ship Supply", "Callao", "Abr 2025 – May 2025")
    exp5_t = make_job_title("Practicante de Logística y Abastecimiento")
    exp5_b1 = make_bullet_p([
        ("Gestioné órdenes de compra en ERP para suministros marítimos con ", False),
        ("95%", True),
        (" de precisión en entregas.", False)
    ])

    # Section: HABILIDADES
    sec_hab = make_section_header("HABILIDADES")
    hab1 = make_skills_line("Producto y diseño", "Análisis y descubrimiento de producto, User Stories, flujos de usuario (Figma), métricas de producto, QA y testing")
    hab2 = make_skills_line("Desarrollo web", "Next.js, React, TypeScript, Tailwind CSS, Vite, HTML5")
    hab3 = make_skills_line("Backend y datos", "Python, Node.js, SQL, PostgreSQL (Supabase, Neon), Docker, APIs REST, Power BI")
    hab4 = make_skills_line("Automatización e IA", "Playwright (RPA), Power Automate, Google Apps Script, Resend, LLMs (Gemini, Ollama), Shopify, CRM")
    hab5 = make_skills_line("Idiomas", "Español nativo · Inglés intermedio (acreditación B1 en curso)")

    # Section: EDUCACIÓN
    sec_edu = make_section_header("EDUCACIÓN")
    edu1_h = make_job_header("Universidad Privada Norbert Wiener", "Lima", "Mar 2022 – Dic 2026", before="40")
    edu1_t = make_job_title("Administración y Negocios Internacionales — 10.º ciclo (egreso dic. 2026)")
    edu1_b = make_bullet_p([
        ("Tesis en curso: impacto de la IA generativa en la productividad laboral en agencias de marketing digital de Lima (2026).", False)
    ])
    edu2_h = make_job_header("Idat", "Lima", "Mar 2025 – Jul 2025")
    edu2_t = make_job_title("Diplomado en Inteligencia Artificial y Aplicaciones Empresariales")

    # Section: CERTIFICACIONES
    sec_cert = make_section_header("CERTIFICACIONES")
    cert_b1 = make_bullet_p([
        ("AI Professional Certification (CAIPC) — CertiProf  ·  SQL Server — Idat / Microsoft  ·  Power BI — Intercorp / Zegel  ·  Generative AI for Executives — AWS (2025)", False)
    ])
    cert_b2 = make_bullet_p([
        ("En curso: ", True),
        ("Google Analytics 4 (Google Skillshop) · Google UX Design (Coursera)", False)
    ])

    # Assemble new body
    new_elements = [
        p0, p1, p2,
        sec_perfil, p_perfil,
        sec_exp,
        exp1_h, exp1_t, exp1_b1, exp1_b2, exp1_b3, exp1_b4,
        exp2_h, exp2_t, exp2_b1, exp2_b2, exp2_b3,
        exp3_h, exp3_t, exp3_b1, exp3_b2, exp3_b3,
        exp4_h, exp4_t, exp4_b1, exp4_b2,
        exp5_h, exp5_t, exp5_b1,
        sec_hab, hab1, hab2, hab3, hab4, hab5,
        sec_edu, edu1_h, edu1_t, edu1_b, edu2_h, edu2_t,
        sec_cert, cert_b1, cert_b2
    ]
    if sectPr is not None:
        new_elements.append(sectPr)

    # Clear and set children
    body.clear()
    for el in new_elements:
        body.append(el)

    file_map['word/document.xml'] = ET.tostring(tree, encoding='utf-8', xml_declaration=True)

    with zipfile.ZipFile(DOCX_PATH, 'w', compression=zipfile.ZIP_DEFLATED) as z:
        for name, data in file_map.items():
            z.writestr(name, data)

    print("✓ Successfully updated", DOCX_PATH)

if __name__ == "__main__":
    update_docx()

