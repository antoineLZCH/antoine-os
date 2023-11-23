<script setup lang="ts">
import { useUIStore } from '~/stores/ui.store'

const uiStore = useUIStore()
</script>

<template>
  <div class="p-2 h-full">
    <TheWindow v-if="uiStore.isAboutWindowOpen" name="About" :width="400" :height="600" @close="uiStore.isAboutWindowOpen = false" />
    <TheWindow v-if="uiStore.isPlaygroundWindowOpen" name="Playground" :width="400" :height="500" @close="uiStore.isPlaygroundWindowOpen = false" />
    <TheWindow v-if="uiStore.isSettingsWindowOpen" name="Settings" :width="200" :height="300" @close="uiStore.isSettingsWindowOpen = false" />
  </div>
</template>
