import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "4xl": "2000px",
      },
    },
    extend: {
      screens: {
        sm: "500px",
      },
      fontFamily: {
        body: ["var(--font-body)"],
        title: ["var(--font-title)" ],
      },
      colors: {
        black: "#090A0B",
        white: "#FFFFFF",
        pdark: "#4895ef",
        plight: "#560bad",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};

export default config;
