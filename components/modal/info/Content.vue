<script setup lang="ts">
const { volume, changeVolume, clickAnimation } = useGame();
</script>

<template>
  <h1 class="flex items-center text-6xl uppercase font-bold h-24 pl-6">Space!</h1>
  <ModalInfoContentTitle id="settings-title">Settings</ModalInfoContentTitle>
  <div class="flex flex-col">
    <div class="relative input-grid items-end px-4 py-2">
      <label
        class="text-2xl"
        for="volume"
        >Volume</label
      >
      <input
        id="volume"
        :value="volume"
        class="h-4 cursor-pointer"
        max="100"
        min="0"
        type="range"
        @input="
          (event) => changeVolume(Number.parseInt((event.target as HTMLInputElement).value, 10))
        "
      />
      <div class="range-progress" />
    </div>
    <div
      class="input-grid items-center px-4 py-2 [&_svg]:hidden [&:hover_svg]:flex [&:focus-within_svg]:flex"
    >
      <span class="text-2xl">Click Particle</span>
      <div class="flex gap-1 justify-end px-4">
        <button
          :class="{
            'cursor-pointer': clickAnimation,
          }"
          aria-label="Disable click particles"
          type="button"
          @click="() => (clickAnimation = false)"
        >
          <UiHorizontalArrow
            :disabled="!clickAnimation"
            direction="right"
          />
        </button>
        <span class="text-xl">{{ clickAnimation ? "Enabled" : "Disabled" }}</span>
        <button
          :class="{
            'cursor-pointer': !clickAnimation,
          }"
          aria-label="Enable click particles"
          type="button"
          @click="() => (clickAnimation = true)"
        >
          <UiHorizontalArrow
            :disabled="clickAnimation"
            direction="left"
          />
        </button>
      </div>
    </div>
  </div>
  <ModalInfoContentTitle>Credit</ModalInfoContentTitle>
  <p class="text-xl px-4 mt-2">
    Made with ❤️ by
    <a
      class="underline"
      href="https://may-baptiste.fr"
      target="_blank"
      >Baptiste May</a
    >
  </p>
  <p class="text-xl px-4">All characters, sounds and icons goes to Valve</p>
</template>

<style scoped>
.range-progress {
  width: calc((100% / 2 - 16px) * v-bind(volume / 100));
}

@media (hover: none) {
  .input-grid svg {
    display: flex;
  }
}
</style>
