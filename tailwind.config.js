module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        light_green: { 50: "#f7f5eb", "50_7f": "#f7f5eb7f" },
        light_blue: {
          900: "#005c87",
          "900_99": "#005c8799",
          "900_19": "#005c8719",
          "900_4c": "#005c874c",
          "900_51": "#005c8751",
          "900_0c": "#005c870c",
        },
        white: { A700: "#ffffff", A700_a2: "#ffffffa2" },
        orange: { 200: "#f1c977", "200_75": "#f1c97775", "200_67": "#f1c97767", "200_87": "#f1c97787" },
        green: { 400: "#76ab78" },
        blue: { 200: "#85c0ea" },
        red: { 200: "#f4aaa9" },
      },
      boxShadow: { xs: "0px 8px  25px 0px #24395a3f", sm: "0px -6px  11px 0px #0000001e" },
      fontFamily: { rubik: "Rubik" },
      backgroundImage: { gradient: "linear-gradient(180deg, #85c0ea00,#85c0ea28,#85c0ea)" },
      opacity: { 0.5: 0.5, 0.3: 0.3, 0.15: 0.15, 0.8: 0.8 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
