/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fifaGreen: "#0D6759",
        fifaBlue: "#0B2E59",
        fifaPurple: "#4B256F",
        fifaPurple2: '#6A0DAD',
      },
    },
  },
  plugins: [],
};
