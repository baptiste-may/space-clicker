<script lang="ts" setup>
defineProps({
  value: Number,
  x: String,
  y: String
});

const appear = ref(true);
const start = ref("0deg");
const end = ref("0deg");

onMounted(() => {
  start.value = `${randomNumber(-22, 22)}deg`;
  end.value = `${randomNumber(-22, 22)}deg`;
  setTimeout(() => {
    appear.value = false;
  }, 1);
});
</script>

<template>
  <Transition>
    <span v-if="appear"
          class="absolute text-orange-600 text-shadow-lg text-2xl -translate-1/2 pointer-events-none z-50"
    >+{{
        value
      }}</span>
  </Transition>
</template>

<style scoped>
span {
  top: v-bind(y);
  left: v-bind(x);
  transform: translateY(0) rotate(v-bind(start));
}

.v-leave-active {
  transition: opacity 1s linear, top 1s linear, transform 1s linear;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-150px) rotate(v-bind(end));
}
</style>