/** @type {import('tailwindcss').Config} */
export default {

  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      
      colors:{
        primary:"#7c4299 ",
        secondary:"#ED3780  ",
        third:"#F58330",
        back:"#e879f9",
        back2:"#c084fc",
        backmain:"#F8F4FF",
      }, 
    },
  },
  plugins: [],
}





// gallary page  

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require("@tailwindcss/aspect-ratio"), // For managing image aspect ratios
//   ],
// };
