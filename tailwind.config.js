module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        ibm: ['IBM Plex Mono', 'sans-serif'],
        inknut: ['Inknut Antiqua', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'lp-desk-lp': 'url("/assets/images/background/bg_lp_desk.jpg"',
        'lp-mobile-lp': 'url("/assets/images/background/bg_lp_mobile.png")'
      },
    },
  },
};
