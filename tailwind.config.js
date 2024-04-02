/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        cyan: {
          "very-pale": "hsl(193, 100%, 96%)",
          "very-dark": "hsl(192, 100%, 9%)",
        },
        blue: {
          grayish: "hsl(208, 11%, 55%)",
        },
      },
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        "open-sans": ["Open-sans, sans-serif"],
      },
      backgroundImage: {
        desktop: ["url(../../public/images/bg-hero-desktop.svg)"],
        mobile: ["url(../../public/images/bg-hero-mobile.svg)"],
      },
      screens: {
        md: {
          max: "1440px",
        },
        normal: {
          max: "992px",
        },
        "almost-small": {
          max: "645px",
        },
        small: {
          max: "499px"
        }
      },
    },
  },
  plugins: [],
};
