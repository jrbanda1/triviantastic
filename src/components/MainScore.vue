<script setup>
import useScore from '@/composables/useScore'
const { score } = useScore()
</script>

<template>
  <p class="score">Score: {{ score }}</p>
</template>

<style lang="postcss" scoped>
.score {
  @apply absolute bottom-6 right-1/2 text-2xl font-bold uppercase text-slate-700;
}
</style>
