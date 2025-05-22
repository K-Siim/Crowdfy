
<template>
    <div class="max-w-6xl mx-auto px-16 py-8">
        <!-- Top Header Section -->
        <PageHeader 
            title="My Campaigns"
            subtitle="Your current sales summary and activity"
        >
            <template #actions>
                <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export Report
                </button>
                <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Invite
                </button>
            </template>
        </PageHeader>

        <div class="grid grid-cols-4 gap-8">
            <!-- Left Column (3/4) -->
            <div class="col-span-3 bg-white rounded-xl border border-gray-200 p-6">
                <!-- Campaign List Header -->
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-lg font-semibold text-gray-800">Your campaigns ({{ myCampaigns.length }})</h2>
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
                            In Progress
                        </button>
                        <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Concluded
                        </button>
                    </div>
                </div>

                <!-- Campaign Cards -->
                <div class="grid grid-cols-2 gap-8">
                    <div v-for="campaign in myCampaigns" :key="campaign.title" class="flex flex-col">
                        <div class="bg-lime-100 rounded-lg shadow-md overflow-hidden relative h-64">
                            <div class="p-8 h-full flex flex-col justify-between w-2/3">
                                <div class="text-gray-800">
                                    <h3 class="text-xl font-semibold mb-3">{{ campaign.title }}</h3>
                                    <p class="text-sm text-gray-600">{{ campaign.author }}</p>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center gap-2">
                                        <img src="/assets/gift.png" alt="gift" class="w-4 h-4" />
                                        <span class="text-sm font-medium text-gray-700">€{{ campaign.collected }} collected</span>
                                    </div>
                                    <span class="text-sm text-gray-600">{{ Math.round((campaign.collected / campaign.goal) * 100) }}% of goal</span>
                                </div>
                            </div>
                            <img :src="campaign.image" :alt="campaign.title" class="absolute right-0 top-0 w-1/3 h-full object-cover" />
                        </div>
                        <div class="bg-white rounded-lg shadow-md p-4 mt-4">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-sm font-medium text-gray-700">Total Donations</span>
                                <span class="text-sm text-gray-500">€{{ campaign.goal }} Goal</span>
                            </div>
                            <div class="w-full bg-gray-100 rounded-full h-2">
                                <div class="bg-lime-400 h-2 rounded-full" :style="{ width: `${(campaign.collected / campaign.goal) * 100}%` }"></div>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <span class="text-sm text-gray-600">€{{ campaign.collected }} raised</span>
                                <span class="text-sm text-gray-600">{{ Math.round((campaign.collected / campaign.goal) * 100) }}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Help and Manage Section -->
                <div class="flex justify-between items-center mt-8">
                    <a href="#" class="text-lime-600 hover:text-lime-700 font-medium">Need help?</a>
                    <button class="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Manage campaigns
                    </button>
                </div>

                <!-- Metrics Section -->
                <div class="grid grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
                    <!-- Donations -->
                    <div class="flex flex-col border border-gray-200 rounded-lg p-4">
                        <span class="text-sm text-gray-600 mb-1">Donations</span>
                        <span class="text-2xl font-semibold text-gray-800 mb-4">€{{ myCampaigns.reduce((sum, campaign) => sum + campaign.collected, 0) }}</span>
                        <div class="pt-3 border-t border-gray-200">
                            <a href="#" class="text-lime-600 hover:text-lime-700 text-sm font-medium">View analytics</a>
                        </div>
                    </div>

                    <!-- Signatures -->
                    <div class="flex flex-col border border-gray-200 rounded-lg p-4">
                        <span class="text-sm text-gray-600 mb-1">Signatures</span>
                        <span class="text-2xl font-semibold text-gray-800 mb-4">1,234</span>
                        <div class="pt-3 border-t border-gray-200">
                            <a href="#" class="text-lime-600 hover:text-lime-700 text-sm font-medium">View report</a>
                        </div>
                    </div>

                    <!-- Likes -->
                    <div class="flex flex-col border border-gray-200 rounded-lg p-4">
                        <span class="text-sm text-gray-600 mb-1">Likes</span>
                        <span class="text-2xl font-semibold text-gray-800 mb-4">567</span>
                        <div class="pt-3 border-t border-gray-200">
                            <a href="#" class="text-lime-600 hover:text-lime-700 text-sm font-medium">View report</a>
                        </div>
                    </div>

                    <!-- Views -->
                    <div class="flex flex-col border border-gray-200 rounded-lg p-4">
                        <span class="text-sm text-gray-600 mb-1">Views</span>
                        <span class="text-2xl font-semibold text-gray-800 mb-4">8,901</span>
                        <div class="pt-3 border-t border-gray-200">
                            <a href="#" class="text-lime-600 hover:text-lime-700 text-sm font-medium">View report</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column (1/4) -->
            <div class="col-span-1">
                <div class="bg-white rounded-xl border border-gray-200 p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg font-semibold text-gray-800">Activity</h2>
                        <a href="#" class="text-lime-600 hover:text-lime-700 text-sm font-medium">View all</a>
                    </div>

                    <!-- Donators List -->
                    <div class="space-y-2">
                        <div v-for="donator in donators" :key="donator.name" class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition">
                            <img :src="donator.image" :alt="donator.name" class="w-8 h-8 rounded-full object-cover" />
                            <div class="flex-1 min-w-0">
                                <div class="flex justify-between items-center">
                                    <span class="text-sm font-medium text-gray-800 truncate">{{ donator.name }}</span>
                                    <span class="text-xs text-gray-500 ml-2 flex-shrink-0">{{ donator.time }}</span>
                                </div>
                                <div class="flex items-center gap-1 mt-0.5">
                                    <img src="/assets/gift.png" alt="gift" class="w-3 h-3" />
                                    <p class="text-xs text-gray-600">€{{ donator.amount }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { exploreCards } from '@/data/explorecards.js';
import PageHeader from '@/components/Common/PageHeader.vue';

// Get first 4 campaigns
const myCampaigns = exploreCards.slice(0, 4);

// Sample donator data
const donators = [
    { name: 'Sarah Johnson', amount: 120, time: '2h ago', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Michael Chen', amount: 85, time: '3h ago', image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Emma Wilson', amount: 200, time: '4h ago', image: 'https://i.pravatar.cc/100?img=3' },
    { name: 'James Brown', amount: 150, time: '5h ago', image: 'https://i.pravatar.cc/100?img=4' },
    { name: 'Sophia Lee', amount: 90, time: '6h ago', image: 'https://i.pravatar.cc/100?img=5' },
    { name: 'David Kim', amount: 175, time: '7h ago', image: 'https://i.pravatar.cc/100?img=6' },
    { name: 'Olivia Martinez', amount: 110, time: '8h ago', image: 'https://i.pravatar.cc/100?img=7' },
    { name: 'Lucas Anderson', amount: 95, time: '9h ago', image: 'https://i.pravatar.cc/100?img=8' },
    { name: 'Isabella Taylor', amount: 130, time: '10h ago', image: 'https://i.pravatar.cc/100?img=9' },
    { name: 'Ethan White', amount: 160, time: '11h ago', image: 'https://i.pravatar.cc/100?img=10' }
];
</script>