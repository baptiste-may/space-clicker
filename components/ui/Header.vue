<script setup lang="ts">
const { openInfoModal } = useGame();
</script>

<template>
  <UButton
    class="absolute top-4 right-4"
    square
    color="neutral"
    variant="ghost"
    aria-label="Open settings"
    :ui="{ base: 'p-0 rounded-[4px] bg-white hover:bg-white active:bg-white cursor-pointer' }"
    @click="openInfoModal"
  >
    <img
      alt=""
      src="/cake.png"
    />
  </UButton>
  <ModalInfo />
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
