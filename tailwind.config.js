/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        adlam : ['ADLaM Display', 'serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: "#FFF9F4",
        secondary: "#F9DF8A",
        link_bg: "#FFDC26",
        accent: "#FFDC26",
      },
      animation:{
        'slide-in-fwd-bottom': 'slide-in-fwd-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
      },
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
    },
  },
  plugins: [],
}