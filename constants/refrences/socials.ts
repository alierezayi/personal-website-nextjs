import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";

export const SOCIALS = [
  {
    name: "telegram",
    icon: React.createElement(LiaTelegramPlane),
    href: "https://t.me/ali_rezaayi",
  },
  {
    name: "linkedin",
    icon: React.createElement(RiLinkedinLine),
    href: "https://linkedin.com/in/ali-rezaei-129414237",
  },
  {
    name: "discord",
    icon: React.createElement(RxDiscordLogo),
    href: "https://discordapp.com/users/yourID/alirezayi",
  },
  {
    name: "instagram",
    icon: React.createElement(RiInstagramLine),
    href: "https://instagram.com/ali._rezaayi",
  },
  {
    name: "whatsapp",
    icon: React.createElement(MdOutlineWhatsapp),
    href: "https://api.whatsapp.com/send?phone=989916937150",
  },
] as const;
