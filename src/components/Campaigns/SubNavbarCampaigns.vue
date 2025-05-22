<template>
    <div class="border-b border-gray-200">
      <div class="flex space-x-6 px-6 py-3">
        <RouterLink
          to="/Campaigns/Overview"
          class="px-3 py-1.5 rounded-md text-sm font-medium"
          :class="linkClass('/Campaigns/Overview')"
        >
          Overview
        </RouterLink>
  
        <RouterLink
          to="/Campaings/MyCampaigns"
          class="px-3 py-1.5 rounded-md text-sm font-medium"
          :class="linkClass('/Campaigns/MyCampaings')"
        >
          MyCampaings
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