import { projects } from "./projects";
import { skills } from "./skills";

const IMAGES = {
  header: {
    logo: {
      light: require("@/assets/images/main/ali-logo.png"),
      dark: require("@/assets/images/main/ali-logo-dark.png"),
    },
  },
  sections: {
    intro: {
      picture: require("@/assets/images/main/alirezayi-mobile.jpg"),
    },
    about: {
      programLogos: require("@/assets/images/main/mainIconsdark.svg"),
    },
    skills,
    projects,
  },
};

export default IMAGES;
