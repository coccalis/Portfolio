/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
      },
      colors: {
        "bg-primary": "#131221",
        "bg-light": "#f1f4fc",
        //text color hex
        "txtclr-default": "#f1f4fc",
        "txtlight-clr": "#121221",
        "txtclr-special": "#5a53af",
        "txtclr-hover": "#6964c7",
        //btn color hex
        "btn-default": "#7e7fd6",
        "btn-hover": "#6964c7",
        "btn-active": "#5a53af",
        //switch
        "switch-clr": "#0E0D17",
        //divider
        "divider-clr": "#d1d8f4",
      },
      fontFamily: {
        jersey: ["Jersey25"],
        vcr: ["VCR"],
        pixelari: ["PIXELARI"],
      },
    },
  },
  darkMode: "selector",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#f1f4fc",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#0E0D17",
            },
          },
        },
      },
    }),
  ],
};
