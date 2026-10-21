<script lang="ts" setup>
import type { Sounds } from "~/composables/useGame";
import { randomNumber } from "~/utils";

const { score, hyperspace, playSound } = useGame();
const { playAnimation } = useClickAnimation();

const addScore = (
  nb: number,
  sound: Sounds,
  x: number,
  y: number,
  ignoreHyperspace: boolean = false,
) => {
  playSound(sound);
  playAnimation(nb, x, y);
  score.value += nb;
  if (!ignoreHyperspace) hyperspace.value = Math.min(hyperspace.value + nb, 100);
  else hyperspace.value = 0;
};
</script>

<template>
  <CoreWheatley :click="(e) => addScore(3, 'wheatley', e.clientX, e.clientY)" />
  <CoreSpace :click="(e) => addScore(1, 'short', e.clientX, e.clientY)" />
  <GameScore />
  <GameHyperSpace
    :click="
      (e) => {
        if (hyperspace === 100) addScore(randomNumber(25, 75), 'long', e.clientX, e.clientY, true);
      }
    "
  />
</template>
