<script lang="ts" setup>
defineProps<{}>();
</script>

<template>
  <button
      class="w-min bg-neutral-400 disabled:bg-neutral-500 hover:bg-neutral-200 px-4 py-1 text-nowrap font-extrabold shadow-[inset_0_0_10px_#444] transition-colors cursor-pointer disabled:cursor-not-allowed">
    <slot/>
  </button>
</template>