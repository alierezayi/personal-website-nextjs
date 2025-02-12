"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  animationType: keyof typeof animationVariants;
  animationSpeed: number;
}

const animationVariants: Record<string, Variants> = {
  slide: {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  },
  fade: {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  },
  zoom: {
    enter: { scale: 0.85, opacity: 0 },
    center: { scale: 1, opacity: 1 },
    exit: { scale: 1.15, opacity: 0 },
  },
  flip: {
    enter: { rotateY: 90, opacity: 0 },
    center: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -90, opacity: 0 },
  },
  rotate: {
    enter: (direction: number) => ({
      rotate: direction > 0 ? 45 : -45,
      opacity: 0,
    }),
    center: { rotate: 0, opacity: 1 },
    exit: (direction: number) => ({
      rotate: direction < 0 ? 45 : -45,
      opacity: 0,
    }),
  },
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  animationType,
  animationSpeed,
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  return (
    <div className="relative size-full group-hover:scale-105 transition-transform duration-500">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          alt={`Slide ${imageIndex + 1}`}
          className="absolute size-full object-cover rounded-2xl"
          variants={animationVariants[animationType]}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8 / animationSpeed,
            },
            opacity: { duration: 0.8 / animationSpeed },
            rotate: { duration: 0.8 / animationSpeed, ease: "easeInOut" },
            scale: { duration: 0.8 / animationSpeed, ease: "easeInOut" },
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
