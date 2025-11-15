const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        notoserif: ["Noto Serif", "sans-serif"],
      },

      // Tambahan animasi untuk slider 3 gambar — infinite smooth
      keyframes: {
        slideInfinite: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        // Animasi lama tetap dipertahankan
        slideRight: {
          "0%, 20%": { transform: "translateX(0)" },
          "20.01%, 40%": { transform: "translateX(100%)" },
          "40.01%, 60%": { transform: "translateX(200%)" },
          "60.01%, 80%": { transform: "translateX(300%)" },
          "80.01%, 100%": { transform: "translateX(400%)" },
        },
      },

      animation: {
        slideInfinite: "slideInfinite 25s linear infinite",
        slideRight: "slideRight 20s infinite linear",
      },
    },

    colors: {
      black: colors.black,
      purple: "#827fb9",
      green: "#228b22",
      pink: "#aaafeb",
      darkpurple: "#634880",
      white: colors.white,
      lightblack: "#141414",
      bg: "hsla(243, 60%, 95%, 1)",
      dp: "#525074",
      gray: colors.gray,
      transparent: colors.transparent,
    },

    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      md: "920px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  variants: {
    transitionProperty: ["hover", "focus"],
    extend: {
      transform: ["hover", "focus", "active"],
    },
  },

  plugins: [],
}
