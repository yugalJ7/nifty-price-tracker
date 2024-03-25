/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customBgColor: "#FBFDFF",
        lightGreyBdColor: "#EDEDED",
        cyanBlueColor: "#397ED1",
      },
      fontFamily: {
        openSans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
