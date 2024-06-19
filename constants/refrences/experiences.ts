import React from "react";

import { FaRegStar } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi";
import { TbSchool } from "react-icons/tb";

export const EXPERIENCES = [
  {
    title: "Diploma in Mathematics",
    location: "Kerman, IR",
    description:
      "After 3 years of study, I received a diploma in mathematics at Dr. Ali Shariati's High school.",
    icon: React.createElement(HiOutlineBookOpen),
    date: "2018 - 2021",
  },
  {
    title: "Bachelor of Computer Engineering",
    location: "Kerman, IR",
    description:
      "I am currently a computer engineering student at the non-profit Besat University of Kerman.  I am self-taught in the field of software engineering and learning programming.",
    icon: React.createElement(TbSchool),
    date: "2022 - present",
  },
  {
    title: "",
    location: "",
    description: "",
    icon: React.createElement(FaRegStar),
    date: "",
  },
] as const;
