<script lang="ts" setup>
const isOpen = ref(false);
</script>

<template>
  <button class="absolute top-4 right-4 bg-white rounded cursor-pointer" @click="isOpen = true">
    <img alt="" src="/cake.png">
  </button>
  <Transition name=fade>
    <InfoModal v-if="isOpen" :close="() => isOpen = false" :open="isOpen"/>
  </Transition>
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>