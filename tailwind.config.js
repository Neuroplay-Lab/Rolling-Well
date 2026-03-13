/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Nunito'", "sans-serif"],
        body: ["'Instrument Sans'", "sans-serif"],
      },
      colors: {
        parchment: { DEFAULT: "#f5efe0", light: "#faf6ee", dark: "#e8dcc8" },
        brand: {
          cyan: "#29abe2",
          "cyan-dark": "#1a8fc2",
          orange: "#e8731a",
          ink: "#1a1a1a",
          dark: "#2a2015",
        },
      },
    },
  },
  plugins: [],
};
