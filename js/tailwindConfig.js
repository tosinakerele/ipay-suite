tailwind.config = {
  theme: {
    extend: {
      colors: {
        red: "#800000",
        blue: "#2e526b",
        grey: "#727272",
        semiBlack: "#231F20",
        green: "#3D972E",
        lightGreen: "#D8F1D980",
        lightBlue: "#D8E4F180",
        lightYellow: "#FDE7CB80",
      },
      backgroundImage: {
        heroPattern: "url('/assets/hero_magic.png')",
      },
      height: {
        heroHeight: "calc(100vh - 100px)",
      },
    },
  },
};
