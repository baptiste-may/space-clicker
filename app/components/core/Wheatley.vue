<script lang="ts" setup>
defineProps<{
  click: (event: PointerEvent) => void;
}>();

const posX = ref("-100%");
const posY = ref("-100%");
const visible = ref(true);

const move = () => {
  const useXAxis = Math.random() < 0.5;
  const positivDirection = Math.random() < 0.5;

  const x = useXAxis ? (positivDirection ? 100 : 0) : randomNumber(10, 90);
  const y = useXAxis ? randomNumber(10, 90) : positivDirection ? 100 : 0;
  const endX = useXAxis ? (positivDirection ? 0 : 100) : randomNumber(10, 90);
  const endY = useXAxis ? randomNumber(10, 90) : positivDirection ? 0 : 100;

  const delay = randomNumber(15, 35);

  visible.value = false;
  posX.value = `calc(${x}vw + ${!useXAxis ? 0 : x >= 50 ? 100 : -100}px)`;
  posY.value = `calc(${y}vh + ${useXAxis ? 0 : y >= 50 ? 100 : -100}px)`;

  setTimeout(
    () => {
      visible.value = true;
      setTimeout(() => {
        posX.value = `calc(${endX}vw + ${!useXAxis ? 0 : endX >= 50 ? 100 : -100}px)`;
        posY.value = `calc(${endY}vh + ${useXAxis ? 0 : endY >= 50 ? 100 : -100}px)`;
        setTimeout(move, 10000);
      }, 1);
    },
    delay * 1000 + 10000,
  );
};

onMounted(() => {
  move();
});

const pressed = ref(false);
</script>

<template>
  <img
    :class="[
      'absolute -translate-1/2 cursor-pointer animate-[spin_5s_infinite_linear] transition-transform',
      pressed ? 'scale-90' : '',
      !visible ? 'hidden' : '',
    ]"
    alt="Wheatley"
    draggable="false"
    src="/wheatley.webp"
    @click="click"
    @mousedown="pressed = true"
    @mouseup="pressed = false"
  />
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
  top: v-bind(posY);
  left: v-bind(posX);
  transition:
    top 10s linear,
    left 10s linear;
}
</style>
