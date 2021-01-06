export default {
  target: "static",

  head: {
    title: "stroup-styles",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/css/styles.css"],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],

  modules: [],

  build: {},
};
