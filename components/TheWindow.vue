<script setup lang="ts">
import { type DragOptions, vDraggable } from '@neodrag/vue'

defineProps<{
  name: string
  width: number
  height: number
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

const zIndexValue = ref(0)

const draggableOptions: DragOptions = {
  bounds: 'parent',
  handle: '.window-bar',
  axis: 'both',
  onDragStart: () => {
    if (zIndexValue.value > 9998)
      zIndexValue.value = 1
    zIndexValue.value++
  },
}
</script>

<template>
  <div v-draggable="draggableOptions" class="window absolute border-gray-700 dark:border-white border bg-white dark:bg-black" :style="{ width: `${width}px`, height: `${height}px`, zIndex: zIndexValue }">
    <div class="window-bar flex items-center justify-between border-b border-gray-700 dark:border-white cursor-pointer pr-2">
      <button class="border-r border-gray-700 dark:border-white h-6 w-6 flex items-center justify-center" @click="emits('close')">
        <Icon class="h-4 w-4" name="carbon:close" />
      </button>
      <span class="font-mono text-sm">{{ name }}</span>
    </div>
    <div class="content bg-white">
      <slot />
    </div>
  </div>
</template>
