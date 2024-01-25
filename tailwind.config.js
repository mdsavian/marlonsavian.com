/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4831d4",
        green: "#ccf381",
        blueLight: "#F9F9F9",
        purple: "#3d155f",
      },
      backgroundImage: (theme) => ({
        about: `linear-gradient(90deg, ${theme("colors.blue")} 67%, ${theme("colors.green")} 33%)`,
      }),
    },
  },
  plugins: [],
};
