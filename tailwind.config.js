/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayish: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)"
      },
      fontFamily: {
        baiJamjuree: ["Bai Jamjuree", "sans-serif"]
      },
      fontWeight: {
        regular: "400",
        semiBold: "600",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

