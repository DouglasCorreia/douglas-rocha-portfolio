"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type ServicesCardAnimatedProps = {
  children: ReactNode;
  index: number;
  inView: boolean;
};

export default function ServicesCardAnimated({ children, index, inView }:ServicesCardAnimatedProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="shadow-2xl border-1 border-black-500 rounded-2xl p-4 h-full"
        >
            {children}
        </motion.div>
    );
}