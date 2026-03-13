"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AboutAnimatedProps = {
  children: ReactNode;
  inView: boolean;
};

const container: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

export default function AboutAnimated({ children, inView }: AboutAnimatedProps) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-8 items-center"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}