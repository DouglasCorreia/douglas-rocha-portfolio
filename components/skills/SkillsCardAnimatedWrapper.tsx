"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import SkillsCardAnimated from "./SkillsCardAnimated";

type SkillsCardAnimatedWrapperProps = {
  children: ReactNode;
  index: number;
};

export default function SkillsCardAnimatedWrapper({ children, index }: SkillsCardAnimatedWrapperProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div
            className="col-span-6 sm:col-span-3 lg:col-span-2"
            ref={ref}
        >
            <SkillsCardAnimated index={index} inView={inView}>
                {children}
            </SkillsCardAnimated>
        </div>
    );
}