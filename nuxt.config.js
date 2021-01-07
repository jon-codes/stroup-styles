export default {
  target: "static",

  head: {
    htmlAttrs: { lang: "en" },
    title: "Stroup Styles",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "On-site formal hair stylist helping brides feel their most beautiful on their wedding day.",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "Stroup Styles",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Stroup Styles",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "On-site formal hair stylist helping brides feel their most beautiful on their wedding day.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "~/assets/images/cta.webp",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "Stroup Styles",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://stroupstyles.com",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Stroup Styles",
      },
      {
        hid: "og:description",
        name: "og:description",
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
