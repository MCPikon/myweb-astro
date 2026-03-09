import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://javier-picon.vercel.app",
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    compress(),
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://javier-picon.vercel.app/sitemap-0.xml",
        "http://javier-picon.vercel.app/sitemap-index.xml",
      ],
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
