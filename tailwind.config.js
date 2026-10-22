/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customCyan: "#00ADB5",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
      boxShadow: {
        "t-lg": "0 -4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
