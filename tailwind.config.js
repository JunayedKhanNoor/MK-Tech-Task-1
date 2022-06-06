module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        taskOneTheme: {
          primary: "#FF6F00",
          secondary: "#644F9C",
          accent: "#37cdbe",
          neutral: "#404040",
          "base-100": "#F2F2F2",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
