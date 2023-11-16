import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://javier-picon.web.app",
  prefetch: true,
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), compress(), react(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), robotsTxt({
    sitemap: [
      'https://javier-picon.web.app/sitemap-0.xml',
      'http://javier-picon.web.app/sitemap-index.xml',
    ],
  })]
});