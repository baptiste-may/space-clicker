<script lang="ts" setup>
import NumberFlow from "@number-flow/vue";

const { score, clickPower, clickUpgradeCost, buyClickUpgrade } = useGame();
</script>

<template>
  <div class="bg-neutral-300 p-8 w-sm shadow-[inset_0_0_2rem_black] z-40">
    <div class="relative">
      <hr class="border-2 mt-8" />
      <GameScore />
      <div
        class="flex justify-between pb-1 border-b-4 px-2 text-xl mb-2 text-black font-bold w-full"
      >
        <NumberFlow
          :value="clickPower"
          suffix="/24"
        />
        <UButton
          :disabled="score < clickUpgradeCost"
          @click="buyClickUpgrade"
        >
          Update click ({{ clickUpgradeCost }})
        </UButton>
      </div>
      <div class="flex gap-0.5">
        <div
          v-for="i in clickPower"
          :key="i"
          class="w-1 h-8 bg-black"
        />
      </div>
      <!-- TODO: Upgrades -->
    </div>
  </div>
</template>

<style scoped>
.fade-shadow {
  position: absolute;
  width: 200%;
  height: calc(var(--spacing) * 48);
  left: -50%;

  &[data-position="top"] {
    box-shadow: inset 0 1rem 1.5rem var(--ui-color-neutral-300);
  }
  &[data-position="bottom"] {
    box-shadow: inset 0 -1rem 1.5rem var(--ui-color-neutral-300);
  }
}
</style>
