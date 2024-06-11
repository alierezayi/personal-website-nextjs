import React from "react";
import { HiPhone } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const PERSONAL = [
  {
    icon: React.createElement(HiPhone),
    info: "+98 991 693 7150",
  },
  {
    icon: React.createElement(IoMdMail),
    info: "im1.bitcode@gmail.com",
  },
  {
    icon: React.createElement(FaLocationDot),
    info: "Iran, Kerman",
  },
] as const;
