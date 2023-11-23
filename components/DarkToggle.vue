<script lang="ts" setup>
const colorMode = useColorMode()

const toggleMode = () => colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
</script>

<template>
  <button class="border-l border-gray-700 dark:border-white w-6 h-6 flex items-center justify-center" @click="toggleMode">
    <span class="i-carbon-moon dark:i-carbon-sun" />
  </button>
</template>
