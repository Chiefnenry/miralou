import { Heebo, Roboto_Slab } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto_Slab: ["Roboto Slab", "serif"],
        Heebo: ["Heebo", "sans - serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      shake: {
        "0%, 100%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(5px)" },
        "75%": { transform: "translateX(-5px)" },
      },

      animation: {
        shake: "shake 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
