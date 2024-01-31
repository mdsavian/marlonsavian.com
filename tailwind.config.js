/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: "#072072",
        green: "#94C100",
        blueLight: "#F9F9F9",
        purple: "#3556C3",
      },
      backgroundImage: (theme) => ({
        about: `linear-gradient(90deg, ${theme("colors.blue")} 67%, ${theme("colors.green")} 33%)`,
      }),
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            filter: "blur(4px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "fade-in-1": "fadeIn 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "fade-in-2": "fadeIn 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "fade-in-3": "fadeIn 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "fade-in-up": "fadeInUp 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
