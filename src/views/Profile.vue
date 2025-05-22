<script setup>
import SubNavbarProfile from '@/components/Profile/SubNavbarProfile.vue';
import Settings from '@/components/Profile/Settings.vue';
</script>


<template>
   
  <div>
    <SubNavbarProfile />
    
    <div class="p-6">
      <router-view />
    </div>
  </div>
</template>
