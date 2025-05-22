<template>
    <div class="max-w-6xl mx-auto px-16 py-8">
        <!-- Top Header Section -->
        <PageHeader 
            title="My Favorites"
            subtitle="Your saved campaigns and articles"
        >
            <template #actions>
                <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export Favorites
                </button>
                <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filter
                </button>
            </template>
        </PageHeader>

        <div class="grid grid-cols-4 gap-8">
            <!-- Left Column (3/4) -->
            <div class="col-span-3 bg-white rounded-xl border border-gray-200 p-6">
                <!-- Campaign List Header -->
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-lg font-semibold text-gray-800">Saved items ({{ favorites.length }})</h2>
                    <div class="flex gap-3">
                        <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                            All
                        </button>
                        <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Campaigns
                        </button>
                        <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            Articles
                        </button>
                    </div>
                </div>

                <!-- Favorites Grid -->
                <div class="grid grid-cols-2 gap-8">
                    <ExploreCard 
                        v-for="item in favorites" 
                        :key="item.title" 
                        :card="item"
                    />
                </div>
            </div>

            <!-- Right Column (1/4) -->
            <div class="col-span-1">
                <div class="bg-white rounded-xl border border-gray-200 p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg font-semibold text-gray-800">Recent Activity</h2>
                        <a href="#" class="text-lime-600 hover:text-lime-700 text-sm font-medium">View all</a>
                    </div>

                    <!-- Activity List -->
                    <div class="space-y-2">
                        <div v-for="activity in recentActivity" :key="activity.id" class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition">
                            <img :src="activity.image" :alt="activity.name" class="w-8 h-8 rounded-full object-cover" />
                            <div class="flex-1 min-w-0">
                                <div class="flex justify-between items-center">
                                    <span class="text-sm font-medium text-gray-800 truncate">{{ activity.name }}</span>
                                    <span class="text-xs text-gray-500 ml-2 flex-shrink-0">{{ activity.time }}</span>
                                </div>
                                <p class="text-xs text-gray-600 truncate">{{ activity.action }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PageHeader from '@/components/Common/PageHeader.vue';
import ExploreCard from '@/components/Explore/ExploreCard.vue';
import { exploreCards } from '@/data/explorecards.js';

// Get first 4 items as favorites
const favorites = exploreCards.slice(0, 4);

// Sample recent activity data
const recentActivity = [
    { id: 1, name: 'Sarah Johnson', action: 'Saved a new campaign', time: '2h ago', image: 'https://i.pravatar.cc/100?img=1' },
    { id: 2, name: 'Michael Chen', action: 'Liked an article', time: '3h ago', image: 'https://i.pravatar.cc/100?img=2' },
    { id: 3, name: 'Emma Wilson', action: 'Shared a campaign', time: '4h ago', image: 'https://i.pravatar.cc/100?img=3' },
    { id: 4, name: 'James Brown', action: 'Commented on an article', time: '5h ago', image: 'https://i.pravatar.cc/100?img=4' },
    { id: 5, name: 'Sophia Lee', action: 'Saved a new article', time: '6h ago', image: 'https://i.pravatar.cc/100?img=5' }
];
</script> 