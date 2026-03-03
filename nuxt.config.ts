import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-03-03",
  modules: ["@nuxt/fonts"],
  devtools: { enabled: true },
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
