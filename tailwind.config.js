/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { bckgr1: "#ffa754", bckgr2: "#5dd2f0", bckgr3: "#d378fa" },
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      prata: "'Prata', serif;",
    },
  },
  plugins: [],
};
