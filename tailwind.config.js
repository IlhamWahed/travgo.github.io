/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        Circular: ["Circular STD"],
      },
      colors: {
        ungu: "#5d50c6",
        pinky: "#F85E9F",
        oyen: "#FF5722",
        abu: "#191825",
      },
      dropShadow: {
        myshadow: ["0px 548px 219px rgba(0,0,0,0.01)", "0px 308px 185px rgba(0,0,0,0.04)", "0px 137px 137px rgba(0,0,0,0.06)", " 0px 34px 75px rgba(0,0,0,0.07)", " 0px 0px 0px rgba(0,0,0,0.07)"],
      },
    },
  },
  plugins: [],
};
