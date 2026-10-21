export const DEFAULT_VOLUME = 75;

const soundsToPath = {
  short: "/space-short.wav",
  long: "/space-long.wav",
  wheatley: "/space-wheatley.wav",
};
export type Sounds = keyof typeof soundsToPath;

export const useGame = () => {
  const score = useState(() => 0);
  const hyperspace = useState(() => 0);

  const volume = useState(() => DEFAULT_VOLUME);
  const clickAnimation = useState(() => true);
  const infoModalOpen = useState(() => false);

  return {
    score,
    hyperspace,
    volume,
    changeVolume: (newVolume: number) => {
      if (!Number.isFinite(newVolume)) return;
      volume.value = Math.min(100, Math.max(0, newVolume));
    },
    playSound: (type: Sounds) => {
      const sound = new Audio(soundsToPath[type]);
      sound.volume = volume.value / 100;
      sound.play();
    },
    clickAnimation,
    isInfoModalOpen: infoModalOpen,
    closeInfoModal: () => {
      infoModalOpen.value = false;
    },
    openInfoModal: () => {
      infoModalOpen.value = true;
    },
  };
};
