import createMDX from "@next/mdx";
import type { NextConfig } from "next";

// Cabeceras de seguridad para todas las rutas (antes vivían en netlify.toml).
// Sin CSP estricta: GTM, GA4 y Clarity inyectan scripts en línea; se evalúa aparte.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Fecha del build para el pie ("Actualizado: …").
  env: { BUILD_DATE: new Date().toISOString().slice(0, 10) },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // El PDF del CV cambia poco pero no lleva hash en el nombre: caché de 1 día.
        source: "/cv/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
      },
    ];
  },
};

// remark-gfm por nombre (Turbopack no acepta funciones): tablas en los MDX legales.
export default createMDX({ options: { remarkPlugins: ["remark-gfm"] } })(nextConfig);
