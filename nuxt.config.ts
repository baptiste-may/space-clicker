import tailwindcss from "@tailwindcss/vite";

const umamiHost = process.env.NUXT_UMAMI_HOST ?? process.env.NUXT_PUBLIC_UMAMI_HOST;
const umamiId = process.env.NUXT_UMAMI_ID ?? process.env.NUXT_PUBLIC_UMAMI_ID;

export default defineNuxtConfig({
  compatibilityDate: "2026-03-03",
  modules: ["@nuxt/fonts", "nuxt-umami"],
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
  umami: {
    enabled: Boolean(umamiHost && umamiId),
    host: umamiHost ?? "",
    id: umamiId ?? "",
    autoTrack: true,
    ignoreLocalhost: true,
    domains: ["space.may-baptiste.fr"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "Space!",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
