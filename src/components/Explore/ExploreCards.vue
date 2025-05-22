<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="article in exploreCards" :key="article.title" 
            @click="goToArticle(article.title)"
            class="group relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <!-- Image Container -->
            <div class="relative h-64 overflow-hidden">
                <img :src="article.image" :alt="article.title" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- Share and Love Buttons -->
                <div class="absolute bottom-4 right-4 flex gap-2">
                    <button class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </button>
                    <button class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
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
</template>

<script setup>
import { exploreCards } from '@/data/explorecards';
import { useRouter } from 'vue-router';

const router = useRouter();

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