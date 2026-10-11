import type { Metadata } from "next";
import { BlogApp } from "@/components/app/blog-app";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Archivo",
  description: "Archivo personal.",
  path: "/blog-personal",
  noindex: true,
});

export default function BlogPersonalPage() {
  return <BlogApp />;
}
