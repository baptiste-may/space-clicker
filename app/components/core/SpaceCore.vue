<script lang="ts" setup>
defineProps<{
  click: (event: PointerEvent) => void;
}>();

const pressed = ref(false);
</script>

<template>
  <img
      :class="[
          'absolute left-1/2 top-1/2 -translate-1/2 cursor-pointer animate-[spin_5s_infinite_linear] transition-transform',
          pressed ? 'scale-90' : ''
      ]" alt=""
      draggable=false src="/space-core.webp" @click="click"
      @mousedown="pressed = true" @mouseup="pressed = false"
  >
</template>

<style scoped>
img {
  width: 200px;
  height: 205px;
}
</style>