"use client";

import SpaceCore from "@/components/SpaceCore";
import {useState} from "react";
import HyperSpace from "@/components/HyperSpace";
import Score from "@/components/Score";
import {useSounds} from "@/hooks/useSounds";
import {randomNumber} from "@/lib/utils";
import Wheatley from "@/components/Wheatley";
import {useClickAnimation} from "@/hooks/useClickAnimation";

export default function Page() {

    const {playSound} = useSounds();
    const {playClickAnimation} = useClickAnimation();

    const [nb, setNb] = useState(0);
    const [hyperspaceProgression, setHyperspaceProgression] = useState(0);

    return (
        <>
            <Wheatley onClickAction={e => {
                setNb(prev => prev + 3);
                playClickAnimation(3, e.clientX, e.clientY);
                playSound("wheatley");
                if (hyperspaceProgression < 100) setHyperspaceProgression(prev => Math.min(prev + 3, 100));
            }}/>
            <Score value={nb}/>
            <SpaceCore onClickAction={e => {
                setNb(prev => prev + 1);
                playClickAnimation(1, e.clientX, e.clientY);
                playSound("short");
                if (hyperspaceProgression < 100) setHyperspaceProgression(prev => prev + 1);
            }}/>
            <HyperSpace value={hyperspaceProgression} onClickAction={e => {
                const res = randomNumber(25, 75);
                setNb(prev => prev + res);
                playClickAnimation(res, e.clientX, e.clientY);
                setHyperspaceProgression(0);
                playSound("long");
            }}/>
        </>
    );
}