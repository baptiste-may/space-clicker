<script lang="ts" setup>
defineProps<{
  click: (event: PointerEvent) => void;
}>();

const { hyperspace } = useGame();
const isReady = computed(() => hyperspace.value >= 100);
</script>

<template>
  <div
    class="absolute flex flex-col items-center gap-4 left-1/2 top-[calc(50%+150px)] -translate-x-1/2"
  >
    <div class="flex gap-2">
      <HyperSpaceSphere
        v-for="i in 10"
        :key="i"
        :type="isReady ? 'yellow' : hyperspace / 100 > i / 10 ? 'blue' : null"
      />
    </div>
    <Transition name="fade">
      <Button
        v-if="isReady"
        :disabled="!isReady"
        @click="click"
        >Use Hyperspace</Button
      >
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
