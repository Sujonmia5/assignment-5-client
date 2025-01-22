/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        faSolid: ["fa-solid", "sans-serif"], // Add the custom font family
        exo: ["exo", "sans-serif"], //
      },
      colors: {
        primary: {
          light: "#1c9a92",
          DEFAULT: "#3B82F6",
          dark: "#007f5b",
        },
        secondary: "#7a7a7a",
        info: "#181d23",
        success: "#007f5b",
        warning: "#d8a600", // orange
        danger: "#d60000",
      },
      backgroundImage: {
        "header-bg": "url('./src/assets/image/background-1-1.png')",
        "header-bg-alt": "url('/public/background-1-1.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark",
      "light",
      {
        mytheme: {
          primary: "#1c9a92",
          secondary: "#7a7a7a",
          accent: "#007f5b",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
