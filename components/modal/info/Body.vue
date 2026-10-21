<template>
  <div class="relative grid grid-cols-4 grid-rows-5 w-max">
    <div
      v-for="i in 4 * 5"
      :key="i"
      :class="`w-[clamp(4rem,24vw,6rem)] h-[clamp(4rem,24vw,6rem)] ${[3, 4].includes(i) ? '' : 'bg-neutral-300 border-t border-r border-neutral-400/25'}`"
    />
    <div class="absolute top-0 left-0 w-full h-full shadow-[inset_0_0_2rem_black] overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
