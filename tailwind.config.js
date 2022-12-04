/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#dc2626",
        "primary-hover": "#b91c1c",
        "base": "#f5f5f5",
        "muted": "#a3a3a3"
      }
    },
  },
  plugins: [],
};
