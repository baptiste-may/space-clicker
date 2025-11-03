<script lang="ts" setup>
defineProps<{
  open: boolean;
  close: () => void;
}>();

const {volume, clickAnimation} = useGame();
</script>

<template>
  <div class="absolute flex items-center justify-center w-screen h-screen backdrop-blur-sm z-40" @click="close">
    <div class="relative flex flex-col gap-2" @click.stop>
      <div class="relative grid grid-cols-4 grid-rows-5">
        <div v-for="i in 4 * 5" :key="i"
             :class="`w-24 h-24 ${[3, 4].includes(i) ? '' : 'bg-neutral-300 border-[0.5px] border-neutral-500/25'}`"/>
        <div class="absolute top-0 left-0 w-full h-full">
          <h1 class="flex items-center text-4xl uppercase font-extrabold h-24 pl-6">Space!</h1>
          <InfoModalTitle>Settings</InfoModalTitle>
          <div class="flex flex-col">
            <div class="relative input-grid items-end px-4 py-2">
              <span class="text-2xl">Volume</span>
              <input :value="volume" class="h-4" max=100 min=0 type=range
                     @input="event => volume = parseInt(event.target?.value)"/>
              <div class="range-progress"/>
            </div>
            <div class="input-grid items-center px-4 py-2 [&_svg]:hidden [&:hover_svg]:flex">
              <span class="text-2xl">Click Particle</span>
              <div class="flex gap-1 justify-end px-4">
                <button @click="() => clickAnimation = false">
                  <HorizontalArrow :disabled="!clickAnimation" direction="right"/>
                </button>
                <span class="text-xl">{{ clickAnimation ? "Enabled" : "Disabled" }}</span>
                <button @click="() => clickAnimation = true">
                  <HorizontalArrow :disabled="clickAnimation" direction="left"/>
                </button>
              </div>
            </div>
          </div>
          <InfoModalTitle>Credit</InfoModalTitle>
          <p class="px-4">Made with ❤️ by <a class="underline" href="https://may-baptiste.fr" target="_blank">Baptiste
            May</a></p>
          <p class="px-4">All characters, sounds and icons goes to Valve</p>
        </div>
      </div>
      <Button @click="close">Close</Button>
    </div>
  </div>
</template>

<style scoped>
.range-progress {
  width: calc((100% / 2 - 16px) * v-bind(volume / 100));
}
</style>