<script lang="ts" setup>
const {animations} = useClickAnimation();
</script>

<template>
  <ClickAnimation v-for="(data, id) in animations" :key="id" :value="data[0]" :x="`${data[1]}px`" :y="`${data[2]}px`"/>
  <slot/>
</template>