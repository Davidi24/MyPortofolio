/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'progress-bar': 'progressBar 5s linear forwards',
        'progress-bar-3': 'progressBar 3s linear forwards',
      },
      keyframes: {
        progressBar: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {
          ...colors.gray,
          dark: "#1E232E",
          light: "#F0F2F9",
        },
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
        inset: 'inset 0 4px 8px rgba(0, 0, 0, 0.6), inset 0 -4px 8px rgba(255, 255, 255, 0)',
        inset_custom: 'inset 0px 8px 20px rgba(0, 0, 0, 0.8)',
    },
    dropShadow: {
      three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xxs: "400px",
      xs: "450px",
      xssm: "500px",
      sm: "575px",
      smmd: "680px",
      md: "768px",
      mdlg: "850px",
      lg: "992px",
      lgxl: "1100px",
      nav: "1160px", //only for this project
      xl: "1200px",
      "2xl": "1400px",
    },
    fontWeight: {
      normale: 400,
      "extra-bold": 650,
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      michroma: ["Michroma", "sans-serif"],
      "kumbh-sans": ['"Kumbh Sans"', "sans-serif"],
    },
  },
},
plugins: [
  flowbite.plugin(),
],
};
