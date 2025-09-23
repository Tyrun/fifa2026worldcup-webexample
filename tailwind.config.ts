import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        // Brand colors from your brief
        brand: {
          purple: "#A885F2", // header / top bar
          lime: "#BFF205", // footer background
        },
        // Neutrals tuned for good contrast on purple/lime
        ink: {
          900: "#0D0E10",
          700: "#2E3238",
          500: "#595F69",
          300: "#A6AAB2",
          100: "#F2F4F7",
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10)",
        focus: "0 0 0 4px rgba(168,133,242,0.35)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;