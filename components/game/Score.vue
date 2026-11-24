<script setup lang="ts">
import NumberFlow from "@number-flow/vue";

const { score } = useGame();
</script>

<template>
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
</template>
