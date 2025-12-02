/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1c385f",
        accent: "#00C9FF",
        "background-light": "#f6f7f8",
        "background-dark": "#13181f",
        "text-light": "#121417",
        "text-dark": "#f1f2f4",
        "text-muted-light": "#687382",
        "text-muted-dark": "#a1aebc",
        "neutral-text": "#121417",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
