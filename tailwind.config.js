/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          " 0 50px 100px rgb(50 50 93 / 15%), 0 15px 35px rgb(50 50 93 / 20%), 0 5px 15px rgb(0 0 0 / 12%)",
      },
    },
  },
  plugins: [],
};
