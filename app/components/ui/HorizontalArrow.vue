<script lang="ts" setup>
defineProps<{
  direction: "left" | "right";
  disabled: boolean;
}>();
</script>

<template>
  <svg :class="`w-3 h-6 ${disabled ? 'text-neutral-500' : 'text-white'}`"
       fill="none" height=50 viewBox="0 0 25 50" width=25
       xmlns="http://www.w3.org/2000/svg"
  >
    <path
        :d="`M${direction === 'left' ? 0 : 25} 0L${direction === 'left' ? 25 : 0} 25L${direction === 'left' ? 0 : 25} 50V0 0Z`"
        fill="currentColor"/>
  </svg>
</template>