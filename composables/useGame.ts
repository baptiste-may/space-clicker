export const DEFAULT_VOLUME = 75;

const soundsToPath = {
  short: "/space-short.wav",
  long: "/space-long.wav",
  wheatley: "/space-wheatley.wav",
};
export type Sounds = keyof typeof soundsToPath;

export const useGame = () => {
  const score = useState(() => 0);

  const clickLevel = useState(() => 1);
  const clickPower = computed(() => clickLevel.value);
  const clickUpgradeCost = computed(() => getClickUpgradeCost(clickLevel.value));

  const buyClickUpgrade = () => {
    if (score.value < clickUpgradeCost.value) return;
    score.value -= clickUpgradeCost.value;
    clickLevel.value += 1;
  };

  const volume = useState(() => DEFAULT_VOLUME);
  const clickAnimation = useState(() => true);
  const infoModalOpen = useState(() => false);

  return {
    score,
    clickPower,
    clickUpgradeCost,
    buyClickUpgrade,
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
