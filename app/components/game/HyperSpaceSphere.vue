<script lang="ts" setup>
interface Props {
  type: null | "blue" | "yellow";
}

const props = defineProps<Props>();

const sphereColor = computed(() => {
  if (props.type === null) return "bg-neutral-600";
  if (props.type === "blue") return "bg-blue-400";
  return "bg-orange-400";
});
</script>

<template>
  <div
      :class="[
          'w-4 h-4 rounded-full shadow-[inset_0_0_4px_black] transition-colors',
          sphereColor
      ]"/>
</template>