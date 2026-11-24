<script lang="ts" setup>
import NumberFlow from "@number-flow/vue";

const { score } = useGame();
</script>

<template>
  <div class="bg-neutral-300 p-8 w-sm shadow-[inset_0_0_2rem_black] z-40">
    <div class="relative">
      <hr class="border-2 mt-8" />
      <div class="relative flex h-48 items-center overflow-hidden">
        <div class="inline-block origin-center scale-y-150">
          <NumberFlow
            class="text-8xl font-bold px-2 text-black w-full"
            :value="score"
            :format="{
              // @ts-ignore
              notation: score >= 1e12 ? 'scientific' : 'compact',
              maximumFractionDigits: 3,
            }"
          />
        </div>
        <div
          class="fade-shadow"
          data-position="top"
        />
        <div
          class="fade-shadow"
          data-position="bottom"
        />
      </div>
      <div
        class="flex justify-between pb-1 border-b-4 px-2 text-xl mb-2 text-black font-bold w-full"
      >
        <NumberFlow
          :value="1"
          suffix="/24"
        />
        <!-- TODO: Click update -->
        <UButton disabled>Update click (1K)</UButton>
      </div>
      <div class="flex gap-0.5">
        <!-- TODO: Progress bar -->
        <div class="w-1 h-8 bg-black" />
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
