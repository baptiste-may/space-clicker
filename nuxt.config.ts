const umamiHost = process.env.NUXT_UMAMI_HOST ?? process.env.NUXT_PUBLIC_UMAMI_HOST;
const umamiId = process.env.NUXT_UMAMI_ID ?? process.env.NUXT_PUBLIC_UMAMI_ID;

export default defineNuxtConfig({
  // Keep the Nuxt 3-style directory structure with the app code at the project root.
  srcDir: ".",
  compatibilityDate: "2026-03-03",
  modules: ["@nuxt/fonts", "nuxt-umami", "@nuxt/eslint", "@nuxt/ui"],
  fonts: {
    families: [
      {
        name: "Saira Extra Condensed",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
  devtools: { enabled: true },
  // The game has a single look: skip color mode and let Nuxt UI use its default tokens.
  ui: {
    colorMode: false,
    fonts: false,
  },
  umami: {
    enabled: Boolean(umamiHost && umamiId),
    host: umamiHost ?? "",
    id: umamiId ?? "",
    autoTrack: true,
    ignoreLocalhost: true,
    domains: ["space.may-baptiste.fr"],
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Space!",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
