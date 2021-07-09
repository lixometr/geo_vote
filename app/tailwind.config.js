const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
console.log(process.env.NODE_ENV);
module.exports = {
  purge: {
    enabled: false,
    content: ["./public/**/*.html", "./src/**/*.vue", "./src/assets/**.*.css"],
  },
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    screens: {
      xl: { max: '1450px' },
      lg: { max: '1350px' },
      md: { max: '992px' },
      sm: { max: '760px' },
      xs: { max: '550px' },
      xxs: { max: '350px' },
    },
    fontFamily: {
      main: ["PFDinTextPro"],
      second: ["PFDinTextCompPro"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      grey: {
        dark: "#333333",
        light: "#747474",
        400: "#999999",
      },
      yellow: {
        DEFAULT: "#F0BE32",
        dark: "#DDAF2D",
        light: '#FFDB1C'
      },
      transparent: "transparent",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(({ addUtilities }) => {
      const utilities = [
        {
          ".flex-center": {
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
          },
        },
        {
          ".flex-y-center": {
            display: "flex",
            "align-items": "center",
          },
        },
        {
          ".flex-x-center": {
            display: "flex",
            "justify-content": "center",
          },
        },
        {
          ".absolute-center": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        },
      ];
      addUtilities(utilities);
    }),
  ],
};
