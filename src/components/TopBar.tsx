"use client";

import {AnimatePresence, motion} from "motion/react";
import Image from "next/image";
import {useState} from "react";
import {Button} from "@/components/Button";
import {DEFAULT_VOLUME, useSounds} from "@/hooks/useSounds";
import Link from "next/link";

function H1({content}: {
    content: string;
}) {
    return (
        <h1 className="flex items-center text-4xl uppercase font-extrabold h-24 pl-6">{content}</h1>
    );
}

function H2({content}: {
    content: string;
}) {
    return (
        <h2 className="text-3xl uppercase font-bold px-4 my-4">{content}</h2>
    );
}

export function TopBar() {

    const {setVolume} = useSounds();

    const [isOpen, setIsOpen] = useState(false);
    const [valueVolume, setValueVolume] = useState(DEFAULT_VOLUME);

    return (
        <>
            <button className="absolute top-4 right-4 bg-white">
                <Image src="/cake.png" alt="" width={50} height={50} className="cursor-pointer"
                       onClick={() => setIsOpen(true)}/>
            </button>
            <AnimatePresence>
                {isOpen && <motion.div
                    className="absolute flex items-center justify-center w-screen h-screen backdrop-blur-sm z-40"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={() => setIsOpen(false)}>
                    <motion.div
                        className="relative flex flex-col gap-2"
                        initial={{scaleY: 0}}
                        animate={{scaleY: 1}}
                        exit={{scaleY: 0}}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative grid grid-cols-4 grid-rows-4">
                            {Array.from({length: 4 * 4}).map((_, i) => <div key={i}
                                                                            className={`w-24 h-24 ${[2, 3].includes(i) ? "" : "bg-neutral-300 border-[0.5px] border-neutral-500/25"}`}/>)}
                            <div className="absolute top-0 left-0 w-full h-full">
                                <H1 content="Space!"/>
                                <br className="py-2"/>
                                <H2 content="Settings"/>
                                <div className="input-grid items-end px-4 py-2">
                                    <span className="text-2xl">Volume</span>
                                    <input className="h-4" type="range" min={0} max={100} value={valueVolume}
                                           onChange={event => {
                                               const volume = parseInt(event.target.value);
                                               setValueVolume(volume);
                                               setVolume(volume);
                                           }}/>
                                </div>
                                <H2 content="Credit"/>
                                <p className="px-4">Made with ❤️ by <Link href="https://may-baptiste.fr"
                                                                          target="_blank" className="underline">Baptiste
                                    May</Link></p>
                                <p className="px-4">All characters, sounds and icons goes to Valve</p>
                            </div>
                        </div>
                        <Button onClick={() => setIsOpen(false)}>Close</Button>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </>
    );
}