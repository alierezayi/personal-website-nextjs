import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";

export const SOCIALS = [
  {
    name: "instagram",
    icon: RiInstagramLine,
    href: "https://instagram.com/ali._rezaayi",
  },
  {
    name: "telegram",
    icon: LiaTelegramPlane,
    href: "https://t.me/ali_rezaayi",
  },
  {
    name: "linkedin",
    icon: RiLinkedinLine,
    href: "https://linkedin.com/in/ali-rezaei-129414237",
  },
  {
    name: "discord",
    icon: RxDiscordLogo,
    href: "https://discordapp.com/users/yourID/alirezayi",
  },
] as const;
