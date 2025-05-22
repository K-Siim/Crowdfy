<template>
    <div class="border-b border-gray-200">
        <div class="flex justify-between items-center px-6 py-3">
            <!-- Left side navigation -->
            <div class="flex space-x-6">
                <RouterLink
                    to="/campaigns/overview"
                    class="px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-2"
                    :class="linkClass('/campaigns/overview')"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Overview
                </RouterLink>

                <RouterLink
                    to="/campaigns/mycampaigns"
                    class="px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-2"
                    :class="linkClass('/campaigns/mycampaigns')"
                >
                    <img src="/assets/rocket.png" alt="rocket" class="h-5 w-5" />
                    MyCampaigns
                </RouterLink>
            </div>

            <!-- Right side search -->
            <div class="flex-1 max-w-xs">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        class="block w-full pl-8 pr-3 py-1.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Search"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function linkClass(path) {
    return route.path === path
        ? 'bg-green-50 text-gray-900 font-semibold'
        : 'text-gray-700 hover:text-black hover:bg-gray-100'
}
</script>