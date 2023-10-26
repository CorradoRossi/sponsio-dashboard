import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        fuchsiaBlue: {
          DEFAULT: "#8B41C8",
          50: "#F8F3FC",
          100: "#ECDFF6",
          200: "#D4B8EA",
          300: "#BC90DF",
          400: "#A469D3",
          500: "#8B41C8",
          600: "#692D9A",
          700: "#461E67",
          800: "#230F33",
          900: "#000000",
        },
      },
      spacing: {
        88: "22rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
