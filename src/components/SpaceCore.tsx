"use client";

import {motion} from "motion/react";
import {MouseEventHandler} from "react";

export default function SpaceCore({onClickAction}: {
    onClickAction: MouseEventHandler<HTMLImageElement>;
}) {
    return (
        <motion.img src="/space-core.webp" alt="" width={200} height={205}
                    className="absolute left-1/2 top-1/2 -translate-1/2 cursor-pointer"
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    whileHover={{
                        scale: 1,
                        transition: {
                            duration: 0.25
                        }
                    }}
                    whileTap={{
                        scale: 0.9,
                        transition: {
                            duration: 0.1
                        }
                    }}
                    onClick={onClickAction}
                    draggable={false}
        />
    );
}