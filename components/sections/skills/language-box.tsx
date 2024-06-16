"use client";

import IMAGES from "@/constants/images";
import Image from "next/image";

export default function LanguageBox() {
  return (
    <div className="border rounded-2xl relative overflow-hidden aspect-video order-2">
      <Image
        src="/b5.svg"
        width={250}
        height={150}
        alt=""
        className="absolute bottom-0 right-0 w-[65%] h-auto"
      />
      <Image
        src={IMAGES.sections.skills.js}
        width={55}
        height={55}
        alt=""
        className="absolute top-8 left-5 rounded-full"
      />
      <Image
        src={IMAGES.sections.skills.ts}
        width={55}
        height={55}
        alt=""
        className="absolute bottom-8 left-12 rounded-full"
      />
    </div>
  );
}
