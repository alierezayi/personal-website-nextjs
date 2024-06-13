import React from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";
import { MdWork } from "react-icons/md";

export const LINKS = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(HiHome),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(HiUser),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(HiRectangleGroup),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(HiViewColumns),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(MdWork),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(HiEnvelope),
  },
];
