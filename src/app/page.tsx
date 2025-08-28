"use client";

import SpaceCore from "@/components/SpaceCore";
import {useState} from "react";
import HyperSpace from "@/components/HyperSpace";
import Score from "@/components/Score";
import {useSounds} from "@/hooks/useSounds";
import {randomNumber} from "@/lib/utils";
import Wheatley from "@/components/Wheatley";

export default function Page() {

    const {playSound} = useSounds();

    const [nb, setNb] = useState(0);
    const [hyperspaceProgression, setHyperspaceProgression] = useState(0);

    return (
        <>
            <Wheatley onClickAction={() => {
                setNb(prev => prev + 3);
                playSound("wheatley");
                if (hyperspaceProgression < 100) setHyperspaceProgression(prev => Math.min(prev + 3, 100));
            }}/>
            <Score value={nb}/>
            <SpaceCore onClickAction={() => {
                setNb(prev => prev + 1);
                playSound("short");
                if (hyperspaceProgression < 100) setHyperspaceProgression(prev => prev + 1);
            }}/>
            <HyperSpace value={hyperspaceProgression} onClickAction={() => {
                setNb(prev => prev + randomNumber(25, 75));
                setHyperspaceProgression(0);
                playSound("long");
            }}/>
        </>
    );
}