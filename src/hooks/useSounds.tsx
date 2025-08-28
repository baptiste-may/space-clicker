"use client";

import {createContext, ReactNode, useContext, useEffect, useState} from "react";

export const DEFAULT_VOLUME = 75;

const soundsToPath = {
    short: "/space-short.wav",
    long: "/space-long.wav",
    wheatley: "/space-wheatley.wav"
};
type Sounds = keyof typeof soundsToPath;
const defaultSounds = Object.keys(soundsToPath).reduce((json, _, key) => {
    json[key] = undefined;
    return json;
}, {} as Record<string, undefined>) as Record<Sounds, undefined>;

type SoundsContextType = {
    playSound: (type: Sounds) => void;
    setVolume: (volume: number) => void;
};
const SoundsContext = createContext<SoundsContextType | undefined>(undefined);

export function SoundsProvider({children}: {
    children: ReactNode;
}) {

    const [currentSounds, setCurrentSounds] = useState<Record<Sounds, HTMLAudioElement | undefined>>(defaultSounds);

    useEffect(() => {
        const sounds = JSON.parse(JSON.stringify(defaultSounds)) as Record<string, HTMLAudioElement | undefined>;
        Object.keys(soundsToPath).forEach(type => {
            const audio = new Audio((soundsToPath as Record<string, string>)[type]);
            audio.volume = DEFAULT_VOLUME / 100;
            sounds[type] = audio;
        });
        setCurrentSounds(sounds);
    }, []);

    const playSound = (type: Sounds) => {
        const sound = currentSounds[type];
        if (sound === undefined) return;
        const clone = (sound.cloneNode(true) as HTMLAudioElement);
        clone.volume = sound.volume;
        clone.play();
    };

    const setVolume = (volume: number) => {
        Object.keys(currentSounds).forEach(sound => {
            const audio = (currentSounds as Record<string, HTMLAudioElement | undefined>)[sound];
            if (audio === undefined) return;
            audio.volume = volume / 100;
        });
    }

    return (
        <SoundsContext.Provider value={{playSound, setVolume}}>
            {children}
        </SoundsContext.Provider>
    );
}

export function useSounds() {
    const context = useContext(SoundsContext);
    if (context === undefined) throw new Error("useSounds must be used as sounds");
    return context;
}