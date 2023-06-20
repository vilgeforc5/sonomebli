export default {
  mode: "jit",
  safelist: [
    "animate-scale-out-center",
    "animate-fade-out",
    "text-orange-500",
    "text-green-500",
    "text-red-500",
    "text-orange-300",
    "text-green-300",
    "text-red-300",
    "border-orange-300",
    "border-green-300",
    "border-red-300",
    "blur-sm",
    "animate-blur",
    "animate-blur-out",
    "slit-out-vertical",
    "slit-in-vertical",
    "rotate-180",
    "grid-rows-[1fr]"

  ],
  darkMode: "class",

  content: [
    "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 1.5s ease-in-out   both",
        "fade-in-25": "fade-in 1.5s ease-in-out   both",
        heartbeat: "heartbeat 2s ease  infinite both",

        "focus-in-expand":
          "focus-in-expand 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slit-in-vertical": "slit-in-vertical 0.5s linear   both",
        "slit-out-vertical": "slit-out-vertical 0.5s linear   both",
        "scale-out-center":
          "scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "blur": "blur 1.5s linear ",
        "blur-out": "blur-out 1.5s linear",
        "fade-out": "fade-out 1s ease   both"
      },
      keyframes: {
        "fade-out": {
          "0%": {
            opacity: "1"
          },
          to: {
            opacity: "0"
          }
        },
        "blur-out": {
          "0%": { filter: "blur(0px)" },
          "100%": { filter: "blur(5px)" },
        },

        blur: {
          "0%": { filter: "blur(5px)" },
          "100%": { filter: "blur(0px)" },
        },
        heartbeat: {
          "0%": {
            transform: "scale(1)",
            "transform-origin": "center center",
            "animation-timing-function": "ease-out",
          },
          "10%": {
            transform: "scale(.94)",
            "animation-timing-function": "ease-in",
          },
          "17%": {
            transform: "scale(.98)",
            "animation-timing-function": "ease-out",
          },
          "33%": {
            transform: "scale(.92)",
            "animation-timing-function": "ease-in",
          },
          "45%": {
            transform: "scale(1)",
            "animation-timing-function": "ease-out",
          },
        },

        "fade-in-25": {
          "0%": {
            opacity: "25",
          },
          to: {
            opacity: "1",
          },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "focus-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            filter: "blur(12px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "slit-in-vertical": {
          "0%": {
            transform: "translateZ(-800px) rotateY(90deg)",
            opacity: "0",
          },
          "54%": {
            transform: "translateZ(-160px) rotateY(87deg)",
            opacity: "1",
          },
          to: {
            transform: "translateZ(0) rotateY(0)",
          },
        },
        "slit-out-vertical": {
          "0%": {
            transform: "translateZ(0) rotateY(0)",
            opacity: "1"
          },
          "54%": {
            transform: "translateZ(-160px) rotateY(87deg)",
            opacity: "1"
          },
          to: {
            transform: "translateZ(-800px) rotateY(90deg)",
            opacity: "0"
          }
        },

        "scale-out-center": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          to: {
            transform: "scale(0)",
            opacity: "1",
          },
        },
      },
    },
    fontFamily: {
      cousine: ["Cousine", "monospace"],
      bellota: ["Bellota Text", "cursive"],
      gabriella: ["Gabriela", "serif"],
      unbounded: ['Unbounded', "cursive"]
    },
  },
  plugins: [],
}