import type { Config } from "tailwindcss";

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
        sans: ["var(--font-sans)"],
      },
      colors: {
        black: "#090A0B",
        white: "#FFFFFF",
        gray: {
          100: "#DEE2E6",
          200: "#CED4DA",

          500: "#ADB5BD",

          800: "#495057",
          900: "#343A40",
        },
      },
    },
  },
  plugins: [],
};

export default config;
