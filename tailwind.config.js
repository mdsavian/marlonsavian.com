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
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
            filter: "blur(4px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        "span-1": "fade 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "span-2": "fade 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "span-3": "fade 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      },
    },
  },
  plugins: [],
};
