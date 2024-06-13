"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import IMAGES from "@/constants/images";
import { useEffect, useState } from "react";

const Logo = () => {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}
      className="w-14"
    >
      {theme === "light" ? (
        <Image
          src={IMAGES.header.logo.dark}
          width={50}
          height={30}
          alt=""
          quality={95}
        />
      ) : (
        <Image
          src={IMAGES.header.logo.light}
          width={50}
          height={30}
          alt=""
          quality={95}
        />
      )}
    </motion.div>
  );
};

export default Logo;
