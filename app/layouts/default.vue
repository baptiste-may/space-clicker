<template>
  <div
    class="relative w-screen h-screen bg-black bg-[url(/bg.webp)] bg-center select-none overflow-hidden"
  >
    <ClickAnimationProvier>
      <Header />
      <slot />
    </ClickAnimationProvier>
  </div>
</template>
