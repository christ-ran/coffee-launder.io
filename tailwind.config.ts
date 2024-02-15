import type { Config } from "tailwindcss";
import defaults from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        ...defaults.screens
      },
      colors: {
        dark: {
          500: "rgb(var(--dark-500))"
        },
        light: {
          500: "rgb(var(--light-500))"
        }
      },
      fontFamily: {
        "std-emberly": ["var(--std-emberly)"],
        "narrow-emberly": ["var(--narrow-emberly)"]
      }
    }
  },
  plugins: []
};
export default config;
