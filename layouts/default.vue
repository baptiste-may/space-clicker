<template>
  <div
    class="relative flex w-screen h-screen bg-black bg-[url(/bg.webp)] p-4 bg-center select-none overflow-hidden"
  >
    <ProviderClickAnimation>
      <UiHeader />
      <GameUpgradesCard />
      <div class="relative flex-1">
        <slot />
      </div>
    </ProviderClickAnimation>
  </div>
</template>
