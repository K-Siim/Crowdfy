<template>
    <div class="border-b border-gray-200">
      <div class="flex space-x-6 px-6 py-3">
        <RouterLink
          to="/profile/settings"
          class="px-3 py-1.5 rounded-md text-sm font-medium"
          :class="linkClass('/profile/settings')"
        >
          Settings
        </RouterLink>
  
        <RouterLink
          to="/profile/notifications"
          class="px-3 py-1.5 rounded-md text-sm font-medium"
          :class="linkClass('/profile/notifications')"
        >
          Notifications
        </RouterLink>
  
        <RouterLink
          to="/profile/favorites"
          class="px-3 py-1.5 rounded-md text-sm font-medium"
          :class="linkClass('/profile/favorites')"
        >
          Favorites
        </RouterLink>
  
        <RouterLink
          to="/profile/history"
          class="px-3 py-1.5 rounded-md text-sm font-medium"
          :class="linkClass('/profile/history')"
        >
          History
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  function linkClass(path) {
    return route.path === path
      ? 'bg-lime-100 text-black font-semibold'
      : 'text-gray-700 hover:text-black hover:bg-gray-100'
  }
  </script>
  