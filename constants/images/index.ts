import { projects } from "./projects";

const IMAGES = {
  header: {
    logo: {
      light: require("@/assets/images/main/ali-logo.png"),
      dark: require("@/assets/images/main/ali-logo-dark.png"),
    },
  },
  sections: {
    intro: {
      picture: require("@/assets/images/main/alirezayi.jpg"),
      scroll: require("@/assets/images/main/scroll.svg"),
    },
    about: {
      programLogos: require("@/assets/images/main/mainIconsdark.svg"),
    },
    skills: {
      js: require("@/assets/images/main/javascript.svg"),
      ts: require("@/assets/images/main/typescript.svg"),
      react: require("@/assets/images/main/react.png"),
    },
    projects,
  },
};

export default IMAGES;
