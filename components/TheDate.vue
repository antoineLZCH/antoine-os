<script setup lang="ts">
import dayjs from 'dayjs'

const time = ref()

const date = computed(() => {
  return dayjs().format('DD MMM YYYY')
})

onMounted(() => {
  setInterval(() => {
    time.value = dayjs().format('HH:mm')
  }, 1000)
})
</script>

<template>
  <div v-if="time" class="flex items-center font-mono">
    <div class="px-2 border-l border-gray-700 dark:border-white">
      {{ time }}
    </div>
    <div class="border-l border-gray-700 dark:border-white px-2">
      <span>{{ date }}</span>
    </div>
  </div>
</template>
