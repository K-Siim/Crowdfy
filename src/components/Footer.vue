<template>
    <footer class="bg-gray-50 py-8 border-t border-gray-200">
      <div class="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-700">
        <div>
          <h2 class="text-lg font-semibold text-green-600">Home</h2>
          <ul class="space-y-2">
            <li>My favorites</li>
            <li>Recents</li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold">Explore</h2>
          <ul class="space-y-2">
            <li>Lists</li>
            <li class="flex items-center">Maps <span class="ml-2 text-sm bg-green-100 text-green-600 px-2 py-1 rounded">New</span></li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold">Campaigns</h2>
          <ul class="space-y-2">
            <li>Home</li>
            <li class="flex items-center">Campaigns <span class="ml-2 text-sm bg-green-100 text-green-600 px-2 py-1 rounded">12</span></li>
            <li class="flex items-center">Donations <span class="ml-2 text-sm bg-green-100 text-green-600 px-2 py-1 rounded">4</span></li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold">Profile</h2>
          <ul class="space-y-2">
            <li>Settings</li>
            <li class="flex items-center">Notifications <span class="ml-2 text-sm bg-green-100 text-green-600 px-2 py-1 rounded">10</span></li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold">Resources</h2>
          <ul class="space-y-2">
            <li>How to use Crowdfy</li>
            <li>Docs</li>
            <li>Legal Terms</li>
            <li>Blog</li>
            <li>Merch</li>
          </ul>
        </div>
      </div>
      <div class="mt-8 flex justify-between items-center text-gray-500 px-4">
        <div class="flex items-center gap-2">
          <img src="@/assets/FooterLogo.png" alt="Crowdfy logo" class="h-8">
          
        </div>
        <p>© 2077 Mainnet Design. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  footer {
    border-top: 1px solid #e5e7eb;
  }
  </style>