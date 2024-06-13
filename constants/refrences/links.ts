import React from "react";
import {
  BriefcaseBusiness,
  Home,
  Mail,
  PanelsTopLeft,
  SquareGanttChart,
  UserRound,
} from "lucide-react";

export const LINKS = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(Home),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(UserRound),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(SquareGanttChart),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(PanelsTopLeft),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(BriefcaseBusiness),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(Mail),
  },
];
