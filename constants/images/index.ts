import { projects } from "./projects";
import { skills } from "./skills";

const IMAGES = {
  header: {
    logo: require("@/assets/images/main/ali-logo.png"),
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
