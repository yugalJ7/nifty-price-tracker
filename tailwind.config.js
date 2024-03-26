/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customBgColor: "#F7F9FC",
        lightGreyBdColor: "#EDEDED",
        cyanBlueColor: "#397ED1",
        greyCustColor: "#9BABC6",
      },
      fontFamily: {
        openSans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
