module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      // TypeScript
      "plugins/**/*.ts",
      "nuxt.config.ts",
    ],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      body: ["Baskerville", "serif"],
      display: ["Cervanttis", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#a58e8e",
        "primary-hover": "#bcaaaa",
        "secondary": "#ded0b9",
        "accent": "#ddcccf",
        "accent-hover": "#cfbdbf",
        "body": "#4d4d4d",
        "light": "#dfe4e6",
      },
      spacing: { 7: "1.75rem" },
    },
  },
  variants: {},
  plugins: [],
};
