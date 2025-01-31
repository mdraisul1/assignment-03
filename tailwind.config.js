/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        adlam : ['ADLaM Display', 'serif'],
      },
      colors: {
        primary: "#FFF9F4",
        secondary: "#F9DF8A",
        link_bg: "#FFDC26",
        accent: "#FFDC26",
      },
    },
  },
  plugins: [],
}