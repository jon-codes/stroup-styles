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
      {
        hid: "image",
        name: "image",
        content: "https://stroupstyles.com/social.webp",
      },
      {
        hid: "og-type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og-url",
        property: "og:url",
        content: "https://stroupstyles.com/",
      },
      {
        hid: "og-title",
        property: "og:title",
        content: "Stroup Styles",
      },
      {
        hid: "og-description",
        property: "og:description",
        content:
          "On-site formal hair stylist helping brides feel their most beautiful on their wedding day.",
      },
      {
        hid: "og-image",
        property: "og:image",
        content: "https://stroupstyles.com/social.webp",
      },
      {
        hid: "twitter-card",
        name: "twitter:card",
        content: "summary_large_image",
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
