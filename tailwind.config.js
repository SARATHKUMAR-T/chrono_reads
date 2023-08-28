/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url(/public/Assets/images/t1.svg)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        tangerine: ["Tangerine", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        marienda: ["Merienda", "serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
    },
  },
  plugins: [],
};
