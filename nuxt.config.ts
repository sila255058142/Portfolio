// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  modules: [
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxtjs/google-fonts",
  ],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  devtools: {
    enabled: false,
    timeline: {
      enabled: false,
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": [400, 500, 700, 800],
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
