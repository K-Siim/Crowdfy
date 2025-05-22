<template>
    <div>
        <!-- Header Section -->
        <div class="flex justify-between items-start mb-8">
            <div>
                <h1 class="text-3xl font-bold text-gray-900">Favorites</h1>
                <p class="text-gray-600 mt-1">Where do you want to help?</p>
            </div>
            <div class="flex items-center gap-3">
                <!-- Sort Buttons -->
                <div class="flex items-center gap-2">
                    <button 
                        @click="toggleMoneySort"
                        class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        :class="{ 'bg-gray-50': moneySort !== null }"
                    >
                        <div class="flex items-center gap-1">
                            <span>Money</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'transform rotate-180': moneySort === 'desc' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                        </div>
                    </button>
                    <button 
                        @click="toggleDateSort"
                        class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        :class="{ 'bg-gray-50': dateSort !== null }"
                    >
                        <div class="flex items-center gap-1">
                            <span>Date</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'transform rotate-180': dateSort === 'desc' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                        </div>
                    </button>
                </div>
                <!-- Filter Button -->
                <button class="px-3 py-1.5 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    <div class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <span>Show filters</span>
                    </div>
                </button>
            </div>
        </div>

        <!-- View Selector -->
        <div class="flex justify-between items-center mb-6">
            <!-- Category Buttons -->
            <div class="flex">
                <button 
                    v-for="(category, index) in categories" 
                    :key="category"
                    @click="selectedCategory = category"
                    class="px-4 py-2 text-sm font-medium transition-colors duration-200"
                    :class="[
                        selectedCategory === category
                            ? 'bg-white text-gray-900'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                        index === 0 ? 'rounded-l-md' : '',
                        index === categories.length - 1 ? 'rounded-r-md' : '',
                        'border border-gray-300',
                        index !== 0 ? '-ml-[1px]' : ''
                    ]"
                >
                    {{ category }}
                </button>
            </div>

            <!-- View Toggle -->
            <div class="flex gap-2">
                <button 
                    @click="viewMode = 'list'"
                    class="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    :class="{ 'bg-gray-100': viewMode === 'list' }"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <button 
                    @click="viewMode = 'map'"
                    class="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    :class="{ 'bg-gray-100': viewMode === 'map' }"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="article in sortedCards" :key="article.title" 
                @click="goToArticle(article.title)"
                class="group relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <!-- Image Container -->
                <div class="relative h-64 overflow-hidden">
                    <img :src="article.image" :alt="article.title" 
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <!-- Share and Love Buttons -->
                    <div class="absolute bottom-4 right-4 flex gap-2">
                        <button class="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 hover:scale-110 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </button>
                        <button class="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 hover:scale-110 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Author Info -->
                <div class="flex items-center gap-3 px-6 pt-4">
                    <img :src="article.authorImage" :alt="article.author" 
                        class="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100" />
                    <span class="text-sm font-medium text-gray-700">{{ article.author }}</span>
                </div>

                <!-- Content -->
                <div class="p-6 pt-3">
                    <!-- Title -->
                    <h2 class="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {{ article.title }}
                    </h2>
                    
                    <!-- Description -->
                    <p class="text-gray-600 mb-4 line-clamp-2">
                        {{ getFirstFiveSentences(article.desc) }}
                    </p>

                    <!-- Progress Bar -->
                    <div class="space-y-2">
                        <!-- Progress Bar -->
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-green-500 h-2.5 rounded-full" :style="{ width: `${(article.collected / article.goal) * 100}%` }"></div>
                        </div>
                        
                        <!-- Donation Info -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="/assets/gift.png" alt="gift" class="w-4 h-4" />
                                <span class="text-sm font-medium text-gray-700">€{{ article.collected.toLocaleString() }} collected</span>
                            </div>
                            <span class="text-sm text-gray-500">{{ Math.round((article.collected / article.goal) * 100) }}% of coal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-between mt-12">
            <!-- Previous Button -->
            <button 
                @click="currentPage > 1 && currentPage--"
                class="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="currentPage === 1"
            >
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Previous</span>
                </div>
            </button>

            <!-- Page Numbers -->
            <div class="flex items-center gap-2">
                <button 
                    v-for="page in 9" 
                    :key="page"
                    @click="currentPage = page"
                    class="w-8 h-8 flex items-center justify-center text-sm rounded-md"
                    :class="[
                        currentPage === page 
                            ? 'font-bold text-gray-900' 
                            : 'font-normal text-gray-600 hover:text-gray-900'
                    ]"
                >
                    {{ page }}
                </button>
            </div>

            <!-- Next Button -->
            <button 
                @click="currentPage < 9 && currentPage++"
                class="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="currentPage === 9"
            >
                <div class="flex items-center gap-2">
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { exploreCards } from '@/data/explorecards';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();
const moneySort = ref(null);
const dateSort = ref(null);
const currentPage = ref(1);
const selectedCategory = ref('All views');
const viewMode = ref('list');

const categories = ['All views', 'Petitions', 'Donations'];

const toggleMoneySort = () => {
    if (moneySort.value === null) {
        moneySort.value = 'desc';
    } else if (moneySort.value === 'desc') {
        moneySort.value = 'asc';
    } else {
        moneySort.value = null;
    }
    dateSort.value = null; // Reset other sort
};

const toggleDateSort = () => {
    if (dateSort.value === null) {
        dateSort.value = 'desc';
    } else if (dateSort.value === 'desc') {
        dateSort.value = 'asc';
    } else {
        dateSort.value = null;
    }
    moneySort.value = null; // Reset other sort
};

const sortedCards = computed(() => {
    let sorted = [...exploreCards];
    
    if (moneySort.value) {
        sorted.sort((a, b) => {
            const diff = a.collected - b.collected;
            return moneySort.value === 'asc' ? diff : -diff;
        });
    } else if (dateSort.value) {
        sorted.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            const diff = dateA - dateB;
            return dateSort.value === 'asc' ? diff : -diff;
        });
    }
    
    return sorted;
});

const goToArticle = (title) => {
    router.push(`/article/${encodeURIComponent(title)}`);
};

const getFirstFiveSentences = (text) => {
    const firstParagraph = text.split('\n\n')[0];
    const sentences = firstParagraph.split(/[.!?]+/).filter(s => s.trim().length > 0);
    return sentences.slice(0, 5).join('. ') + '.';
};
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>