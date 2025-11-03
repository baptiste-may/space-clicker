export const DEFAULT_VOLUME = 75;

const soundsToPath = {
    short: "/space-short.wav",
    long: "/space-long.wav",
    wheatley: "/space-wheatley.wav"
};
export type Sounds = keyof typeof soundsToPath;

export const useGame = () => {

    const score = useState(() => 0);
    const hyperspace = useState(() => 0);

    const volume = useState(() => DEFAULT_VOLUME);
    const clickAnimation = useState(() => true);

    return {
        score, hyperspace,
        volume,
        playSound: (type: Sounds) => {
            const sound = new Audio(soundsToPath[type]);
            sound.volume = volume.value / 100;
            sound.play();
        },
        clickAnimation
    };
}