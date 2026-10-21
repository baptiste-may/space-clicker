<template>
  <div
    class="relative w-screen h-screen bg-black bg-[url(/bg.webp)] bg-center select-none overflow-hidden"
  >
    <ProviderClickAnimation>
      <UiHeader />
      <slot />
    </ProviderClickAnimation>
  </div>
</template>
