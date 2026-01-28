/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#11d473",
        "primary-dark": "#0ea65a",
        "background-light": "#f6f8f7",
        "background-dark": "#102219",
        "surface-light": "#ffffff",
        "surface-dark": "#162b21",
        "border-light": "#e5e7eb",
        "border-dark": "#233e32",
        "text-main": "#111814",
        "text-muted": "#618975",
        "sidebar-bg": "#1e293b",
        "card-light": "#ffffff",
        "card-dark": "#1a3326",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}