"use client";

import { useInView } from "react-intersection-observer";
import ServicesCardAnimated from "./ServicesCardAnimated";
import { ReactNode } from "react";

type ServicesCardAnimatedWrapperProps = {
  children: ReactNode;
  index: number;
};

export default function ServicesCardAnimatedWrapper({ children, index }: ServicesCardAnimatedWrapperProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            ref={ref}
        >
            <ServicesCardAnimated index={index} inView={inView}>
                {children}
            </ServicesCardAnimated>
        </div>
    );
}