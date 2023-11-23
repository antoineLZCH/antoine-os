<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useUIStore } from '~/stores/ui.store'

const uiStore = useUIStore()

const actions = [
  {
    name: 'Playground',
    actionName: 'playground',
    callback: () => uiStore.isPlaygroundWindowOpen = true,
    hasIcon: false,
  },
  {
    name: 'Settings',
    actionName: 'settings',
    callback: () => uiStore.isSettingsWindowOpen = true,
    hasIcon: false,
  },
  {
    name: 'About',
    actionName: 'about',
    callback: () => uiStore.isAboutWindowOpen = true,
    hasIcon: false,
  },
  {
    name: 'Shutdown',
    actionName: 'shutdown',
    callback: null,
    hasIcon: false,
  },
]

function openWindow(actionName: string) {
  console.log(actionName)
}
</script>

<template>
  <Menu v-slot="{ open }" as="div" class="font-mono relative border-r border-gray-700 dark:border-white">
    <MenuButton class="px-2" :class="[{ 'bg-gray:80 dark:bg-black': open }]">
      antoineOS
    </MenuButton>
    <MenuItems class="flex flex-col items-start absolute bg-white dark:bg-black border border-gray-700 dark:border-white z-[9999]">
      <MenuItem v-for="(action, index) in actions" :key="index" class="px-2 flex items-center border-b border-gray-700 dark:border-white w-full bg-gray:10 hover:bg-gray:40 dark:hover:bg-gray-80">
        <button @click="action.callback">
          {{ action.name }}
          <Icon v-if="action.hasIcon" name="carbon:chevron-right" class="h-4 w-4 ml-2" />
        </button>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
