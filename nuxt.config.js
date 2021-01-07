export default {
  target: "static",

  head: {
    htmlAttrs: { lang: "en" },
    title: "Stroup Styles",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "title",
        name: "title",
        content: "Stroup Styles",
      },
      {
        hid: "description",
        name: "description",
        content:
          "On-site formal hair stylist helping brides feel their most beautiful on their wedding day.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/css/styles.css"],

  plugins: [],

  components: true,

  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics",
  ],

  googleAnalytics: {
    id: "UA-31686368-2",
  },

  modules: [],

  build: {},
};
