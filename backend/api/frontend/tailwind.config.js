/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx}",
    ],
  theme: {
    extend: {
      fontFamily:{
        Mono:["DM Mono","monospace"],
        Lora:["Lora","serif"],
        Roboto:["Roboto Mono","monospace"]
      }
    },
  },
  plugins: [],
}
