<script setup lang="ts">
const { openInfoModal, isInfoModalOpen } = useGame();
</script>

<template>
  <button
    class="absolute top-4 right-4 bg-white rounded cursor-pointer"
    aria-label="Open settings"
    @click="openInfoModal"
  >
    <img
      alt=""
      src="/cake.png"
    />
  </button>
  <Transition name="fade">
    <ModalInfo v-if="isInfoModalOpen" />
  </Transition>
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
