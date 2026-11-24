<script lang="ts" setup>
import type { Sounds } from "~/composables/useGame";

const { score, clickPower, playSound } = useGame();
const { playAnimation } = useClickAnimation();

const addScore = (nb: number, sound: Sounds, x: number, y: number) => {
  playSound(sound);
  playAnimation(nb, x, y);
  score.value += nb;
};
</script>

<template>
  <CoreWheatley :click="(e) => addScore(clickPower * 3, 'wheatley', e.clientX, e.clientY)" />
  <CoreSpace :click="(e) => addScore(clickPower, 'short', e.clientX, e.clientY)" />
</template>
