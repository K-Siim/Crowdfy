<template>
    <div>
      <!-- Navbar -->
      <header
        class="w-full fixed top-0 left-0 right-0 z-50"
        :class="isHomePage ? '' : 'bg-pink-500'"
        :style="isHomePage ? { backgroundImage: 'url(/src/assets/Screenshot-2025-05-07-at-19.58.20.png)' } : {}"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <!-- Left section -->
            <div class="flex items-center space-x-4">
              <img src="@/assets/Logo.png" alt="Logo" class="h-6" />
              <nav class="hidden md:flex space-x-6 text-white font-medium">
                <RouterLink to="/" class="hover:underline">Home</RouterLink>
                <RouterLink to="/explore" class="hover:underline">Explore</RouterLink>
                <RouterLink to="/campaigns" class="hover:underline">Campaigns</RouterLink>
                <RouterLink to="/profile" class="hover:underline">Profile</RouterLink>
              </nav>
            </div>
  
            <!-- Right section -->
            <div class="hidden md:flex items-center space-x-4">
              <!-- Search -->
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search"
                  class="pl-10 pr-4 py-1.5 rounded-md bg-white/20 border border-white text-white placeholder-white text-sm focus:outline-none"
                />
                <svg
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.85a7.5 7.5 0 010 13.8z"
                  />
                </svg>
              </div>
  
              <!-- Add Button -->
              <button
                class="w-8 h-8 border border-white rounded-md flex items-center justify-center text-white text-lg"
              >
                +
              </button>
  
              <!-- Profile Picture -->
              <div
                class="w-10 h-10 border-2 border-purple-500 rounded-full overflow-hidden"
              >
                <img
                  src="@/assets/profiilipilt.png"
                  alt="Profile"
                  class="w-full h-full object-cover"
                />
              </div>
  
              <!-- Settings -->
              <button
                class="w-8 h-8 border border-white rounded-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M11.3 1.046a1 1 0 00-2.6 0l-.25.79a6.07 6.07 0 00-1.518.884l-.81-.312a1 1 0 00-1.2.45l-.78 1.35a1 1 0 00.24 1.3l.69.52a6.07 6.07 0 000 1.768l-.69.52a1 1 0 00-.24 1.3l.78 1.35a1 1 0 001.2.45l.81-.312a6.07 6.07 0 001.518.884l.25.79a1 1 0 002.6 0l.25-.79a6.07 6.07 0 001.518-.884l.81.312a1 1 0 001.2-.45l.78-1.35a1 1 0 00-.24-1.3l-.69-.52a6.07 6.07 0 000-1.768l.69-.52a1 1 0 00.24-1.3l-.78-1.35a1 1 0 00-1.2-.45l-.81.312a6.07 6.07 0 00-1.518-.884l-.25-.79zM10 13a3 3 0 110-6 3 3 0 010 6z"
                  />
                </svg>
              </button>
            </div>
  
            <!-- Mobile hamburger -->
            <div class="md:hidden flex items-center">
              <button
                @click="mobileMenuOpen = !mobileMenuOpen"
                class="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
  
          
          <div
            v-if="mobileMenuOpen"
            class="md:hidden mt-2 space-y-2 text-white font-medium"
          >
            <RouterLink to="/" class="block px-2 py-1 hover:bg-white/10 rounded"
              >Home</RouterLink
            >
            <RouterLink
              to="/explore"
              class="block px-2 py-1 hover:bg-white/10 rounded"
              >Explore</RouterLink
            >
            <RouterLink
              to="/campaigns"
              class="block px-2 py-1 hover:bg-white/10 rounded"
              >Campaigns</RouterLink
            >
            <RouterLink
              to="/profile"
              class="block px-2 py-1 hover:bg-white/10 rounded"
              >Profile</RouterLink
            >
          </div>
        </div>
      </header>
  
      
      <div v-if="!isHomePage" class="h-20"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const mobileMenuOpen = ref(false)
  const route = useRoute()
  const isHomePage = computed(() => route.path === '/')
  </script>
  