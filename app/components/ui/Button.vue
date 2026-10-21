<script lang="ts" setup>
defineProps<{}>();
</script>

<template>
  <button
      class="w-min bg-neutral-400 disabled:bg-neutral-500 hover:bg-neutral-200 px-3 py-0.5 text-nowrap font-bold text-lg shadow-[inset_0_0_10px_#444] transition-colors cursor-pointer disabled:cursor-not-allowed">
    <slot/>
  </button>
</template>