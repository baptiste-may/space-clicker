"use client";

import {motion} from "motion/react";
import {createContext, ReactNode, useContext, useState} from "react";
import {randomNumber} from "@/lib/utils";

type ClickAnimationFunction = (value: number, x: number, y: number) => void;
const ClickAnimationContext = createContext<{
    playClickAnimation: ClickAnimationFunction;
    animationVisible: boolean;
    setAnimationVisible: (isVisible: boolean) => void;
} | undefined>(undefined);

const ANIMATION_DURATION = 1;

function Number({value, x, y}: {
    value: number;
    x: number;
    y: number;
}) {
    return (
        <motion.span
            className="absolute text-orange-600 font-mono text-shadow-lg text-2xl -translate-1/2 pointer-events-none z-50"
            style={{
                x, y
            }}
            transition={{
                duration: ANIMATION_DURATION,
                ease: "linear"
            }}
            initial={{
                opacity: 1,
                translateY: 0,
                rotate: `${randomNumber(-22, 22)}deg`
            }}
            animate={{
                opacity: 0,
                translateY: "-150px",
                rotate: `${randomNumber(-45, 45)}deg`
            }}
        >
            +{value}
        </motion.span>
    );
}

export function ClickAnimationProvider({children}: {
    children: ReactNode
}) {

    const [animationVisible, setAnimationVisible] = useState(true);
    const [animations, setAnimations] = useState<Record<string, [number, number, number]>>({});

    const playClickAnimation: ClickAnimationFunction = (value, x, y) => {
        if (!animationVisible) return;
        const id = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(2, 10);
        const elt: [number, number, number] = [value, x, y];
        setAnimations(prev => ({
            ...prev,
            [id]: elt
        }));
        setTimeout(() => setAnimations(prev => {
            const res = {...prev};
            delete res[id];
            return res;
        }), ANIMATION_DURATION * 1000);
    };

    return (
        <ClickAnimationContext.Provider value={{playClickAnimation, animationVisible, setAnimationVisible}}>
            {Object.entries(animations).map(([i, [value, x, y]]) =>
                <Number key={i} value={value} x={x} y={y}/>)}
            {children}
        </ClickAnimationContext.Provider>
    );
}

export function useClickAnimation() {
    const context = useContext(ClickAnimationContext);
    if (context === undefined) throw new Error("useClickAnimation must be used as an provider");
    return context;
}