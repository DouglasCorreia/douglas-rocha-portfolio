"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import AboutAnimated from "./AboutAnimated";

type AboutAnimatedWrapperProps = {
  children: ReactNode;
};

export default function AboutAnimatedWrapper ({ children }:AboutAnimatedWrapperProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div ref={ ref }>
            <AboutAnimated inView={ inView }>
                { children }
            </AboutAnimated>
        </div>
    );
}