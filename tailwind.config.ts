import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EAF1F8",
        surface: "rgba(255, 255, 255, 0.58)",
        primary: {
          DEFAULT: "#ffc000",
          dark: "#d99e00",
        },
        ink: "#132238",
        muted: "#5B6B82",
        border: "rgba(255, 255, 255, 0.72)",
        success: "#16A34A",
        warning: "#D97706",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "12px",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
