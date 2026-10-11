import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Fecha del build para el pie ("Actualizado: …").
  env: { BUILD_DATE: new Date().toISOString().slice(0, 10) },
};

export default createMDX({})(nextConfig);
