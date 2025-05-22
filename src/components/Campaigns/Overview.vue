<template>
    <div class="max-w-6xl mx-auto p-10">
        <!-- Top Header Section -->
        <div class="mb-10">
            <div class="flex justify-between items-center">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">Help me Fight Cancer</h1>
                    <p class="text-gray-600">Your current sales summary and activity</p>
                </div>
                <div class="flex gap-3">
                    <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        Share Campaign
                    </button>
                    <button class="bg-white hover:bg-green-50 text-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Like
                    </button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-8">
            <!-- Left Column (2/3) -->
            <div class="col-span-2">
                <!-- Campaign Image -->
                <div class="mb-8">
                    <img src="/assets/cancer.png" alt="Cancer Awareness" class="w-full h-96 object-cover rounded-lg" />
                </div>

                <!-- Campaign Details -->
                <div class="mb-8 pb-8 border-b border-gray-200">
                    <h2 class="text-xl font-semibold mb-4">Campaign Details</h2>
                    <div class="space-y-4">
                        <p class="text-gray-600">
                            I'm raising funds for my cancer treatment. Your support means the world to me and my family.
                            Every contribution, no matter how small, brings me one step closer to recovery.
                        </p>
                        <div class="flex items-center gap-2">
                            <img src="/assets/gift.png" alt="gift" class="w-4 h-4" />
                            <span class="text-sm font-medium text-gray-700">Goal: €50,000</span>
                        </div>
                    </div>
                </div>

                <!-- Organization -->
                <div class="mb-8 pb-8 border-b border-gray-200">
                    <h2 class="text-xl font-semibold mb-4">👥Organization</h2>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                <img src="/assets/author.png" alt="organization" class="w-12 h-12 rounded-full" />
                            </div>
                            <div>
                                <h3 class="font-medium text-gray-900">Cancer Research Foundation</h3>
                                <p class="text-sm text-gray-600">Verified Organization</p>
                            </div>
                        </div>
                        <button class="bg-white hover:bg-green-50 text-gray-700 px-3 py-1.5 rounded-lg transition flex items-center justify-center gap-1.5 border border-gray-200 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact
                        </button>
                    </div>
                </div>

                <!-- Words of Support -->
                <div class="mb-8 pb-8 border-b border-gray-200">
                    <h2 class="text-xl font-semibold mb-4">🕊️ Words of Support</h2>
                    <div class="space-y-6">
                        <div class="flex flex-col gap-2">
                            <p class="text-gray-600 text-sm">"Stay strong! Wishing you a speedy recovery."</p>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 rounded-full bg-green-50 p-0.5">
                                    <img src="/assets/author.png" alt="supporter" class="w-full h-full rounded-full" />
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm font-medium">Sarah Wilson</p>
                                    <div class="flex items-center gap-2">
                                        <p class="text-sm text-gray-600">€75</p>
                                        <span class="text-xs text-gray-500">•</span>
                                        <span class="text-xs text-gray-500">2 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-2">
                            <p class="text-gray-600 text-sm">"You're not alone in this fight. Keep going!"</p>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 rounded-full bg-green-50 p-0.5">
                                    <img src="/assets/author.png" alt="supporter" class="w-full h-full rounded-full" />
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm font-medium">Mike Johnson</p>
                                    <div class="flex items-center gap-2">
                                        <p class="text-sm text-gray-600">€200</p>
                                        <span class="text-xs text-gray-500">•</span>
                                        <span class="text-xs text-gray-500">1 day ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-2">
                            <p class="text-gray-600 text-sm">"Sending you strength and hope!"</p>
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 rounded-full bg-green-50 p-0.5">
                                    <img src="/assets/author.png" alt="supporter" class="w-full h-full rounded-full" />
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm font-medium">Emma Davis</p>
                                    <div class="flex items-center gap-2">
                                        <p class="text-sm text-gray-600">€150</p>
                                        <span class="text-xs text-gray-500">•</span>
                                        <span class="text-xs text-gray-500">3 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Creation Date -->
                <div class="mb-8 pb-8 border-b border-gray-200">
                    <p class="text-gray-600">Created on November 2nd, 2023</p>
                </div>

                <!-- Report Campaign -->
                <div>
                    <button class="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                        Denunciar esta campanha
                    </button>
                </div>
            </div>

            <!-- Right Column (1/3) -->
            <div class="col-span-1">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex items-center gap-2 mb-4">
                        <h2 class="text-lg font-semibold">💰 Funds donated to this campaign</h2>
                    </div>
                    
                    <div class="space-y-6">
                        <div>
                            <div class="text-center mb-4">
                                <div class="text-2xl font-bold text-gray-800">€25,000 / <span class="text-gray-600">€50,000</span></div>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-green-500 h-2.5 rounded-full" style="width: 50%"></div>
                            </div>
                            <p class="text-sm text-gray-500 mt-1">50% of goal reached</p>
                        </div>

                        <!-- Recent Donators -->
                        <div class="border-t pt-4">
                            <h3 class="text-sm font-medium text-gray-700 mb-3">Recent Donators</h3>
                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 rounded-full bg-green-50 p-0.5">
                                        <img src="/assets/author.png" alt="donator" class="w-full h-full rounded-full" />
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm font-medium">John Doe</p>
                                        <div class="flex items-center gap-2">
                                            <p class="text-sm text-gray-600">€100</p>
                                            <span class="text-xs text-gray-500">•</span>
                                            <span class="text-xs text-gray-500">2 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 rounded-full bg-green-50 p-0.5">
                                        <img src="/assets/author.png" alt="donator" class="w-full h-full rounded-full" />
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm font-medium">Jane Smith</p>
                                        <div class="flex items-center gap-2">
                                            <p class="text-sm text-gray-600">€50</p>
                                            <span class="text-xs text-gray-500">•</span>
                                            <span class="text-xs text-gray-500">5 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 rounded-full bg-green-50 p-0.5">
                                        <img src="/assets/author.png" alt="donator" class="w-full h-full rounded-full" />
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm font-medium">Mike Johnson</p>
                                        <div class="flex items-center gap-2">
                                            <p class="text-sm text-gray-600">€200</p>
                                            <span class="text-xs text-gray-500">•</span>
                                            <span class="text-xs text-gray-500">1 day ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 rounded-full bg-green-50 p-0.5">
                                        <img src="/assets/author.png" alt="donator" class="w-full h-full rounded-full" />
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm font-medium">Sarah Wilson</p>
                                        <div class="flex items-center gap-2">
                                            <p class="text-sm text-gray-600">€75</p>
                                            <span class="text-xs text-gray-500">•</span>
                                            <span class="text-xs text-gray-500">2 days ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 rounded-full bg-green-50 p-0.5">
                                        <img src="/assets/author.png" alt="donator" class="w-full h-full rounded-full" />
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm font-medium">David Brown</p>
                                        <div class="flex items-center gap-2">
                                            <p class="text-sm text-gray-600">€150</p>
                                            <span class="text-xs text-gray-500">•</span>
                                            <span class="text-xs text-gray-500">3 days ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex gap-3 mt-6">
                                <button class="flex-1 bg-white hover:bg-green-50 text-gray-700 px-3 py-1.5 rounded-lg transition flex items-center justify-center gap-1.5 border border-gray-200 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                    Share Campaign
                                </button>
                                <button class="flex-1 bg-white hover:bg-green-50 text-gray-700 px-3 py-1.5 rounded-lg transition flex items-center justify-center gap-1.5 border border-gray-200 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    Like
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- New Section -->
                <div class="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h2 class="text-lg font-semibold mb-4">💪 Fund this campaign</h2>
                    
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Funding</label>
                            <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                                <input type="number" value="50" class="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Words of support 🕊️</label>
                            <textarea 
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 h-32 resize-none"
                                placeholder="Share your wishes and support..."
                            ></textarea>
                            <p class="text-sm text-gray-500 mt-2">Not only numbers make the difference on our lives:)</p>
                        </div>

                        <button class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition">
                            Donate now
                        </button>

                        <div class="pt-4 border-t">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-sm font-medium text-gray-700">Progress</span>
                                <span class="text-sm text-gray-600">50%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-green-500 h-2.5 rounded-full" style="width: 50%"></div>
                            </div>
                            <div class="flex justify-between items-center mt-1">
                                <span class="text-sm text-gray-600">€25,000 raised</span>
                                <span class="text-sm text-gray-600">Goal: €50,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Component logic will go here
</script>

