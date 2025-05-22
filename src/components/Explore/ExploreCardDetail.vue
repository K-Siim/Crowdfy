<template>
    <div class="min-h-screen bg-white">
        <div v-if="article" class="max-w-7xl mx-auto px-6 md:px-8 py-12">
            <!-- Header with Back and Magazine -->
            <div class="flex justify-between items-center mb-12">
                <button @click="$router.back()" class="text-gray-700 font-medium hover:text-black transition-colors">
                    ← Go back
                </button>
            </div>

            <!-- Title and Preview Text -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h1 class="text-4xl md:text-5xl font-bold leading-tight">{{ article.title }}</h1>
                </div>
                <div>
                    <p class="text-gray-700 text-lg leading-relaxed">{{ getFirstFiveSentences(article.desc) }}</p>
                </div>
            </div>

            <!-- Article Image -->
            <div class="mb-12">
                <!-- Article Metadata -->
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center gap-6 text-gray-700">
                        <span><span class="font-bold">Text:</span> {{ article.author }}</span>
                        <span><span class="font-bold">Date:</span> {{ article.date }}</span>
                    </div>
                    <span class="text-gray-700 text-xs border border-gray-300 rounded-full px-3 py-1">{{ article.tag }}</span>
                </div>
                <img :src="article.image" :alt="article.title" class="w-full h-[600px] object-cover rounded-lg shadow-lg" />
            </div>

            <!-- Two Column Content -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                <!-- Left Column - Author Info -->
                <div class="space-y-6">
                    <!-- Author Profile -->
                    <div class="flex items-center gap-4 pb-4 border-b border-gray-200">
                        <img :src="article.authorImage" :alt="article.author" class="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h3 class="text-lg font-medium text-gray-800">{{ article.author }}</h3>
                            <p class="text-sm text-gray-500">{{ getAuthorRole(article.author) }}</p>
                        </div>
                    </div>

                    <!-- Article Info -->
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700 font-bold">Date:</span>
                            <span class="text-gray-700">{{ article.date }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700 font-bold">Read:</span>
                            <span class="text-gray-700">{{ article.readTime }}</span>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div class="pt-4">
                        <div class="flex justify-between items-center mb-3">
                            <h4 class="text-gray-700 font-bold">Share:</h4>
                            <div class="flex gap-4">
                                <a href="https://www.instagram.com" target="_blank" class="text-gray-500 hover:text-gray-700">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://www.twitter.com" target="_blank" class="text-gray-500 hover:text-gray-700">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com" target="_blank" class="text-gray-500 hover:text-gray-700">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Article Content -->
                <div class="prose prose-lg md:col-span-2">
                    <div v-for="(paragraph, index) in article.desc.split('\n\n')" :key="index" class="mb-8">
                        <p class="text-gray-700 leading-relaxed text-lg">{{ paragraph }}</p>
                        <!-- Add quote after third paragraph -->
                        <div v-if="index === 2" class="my-16">
                            <div class="border-t border-b border-gray-200 py-8">
                                <blockquote class="text-4xl font-bold text-gray-800 italic leading-tight">
                                    "The greatest glory in living lies not in never falling but in rising every time we
                                    fall"
                                </blockquote>
                                <p class="text-gray-600 mt-4 text-lg">- Nelson Mandela</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="max-w-4xl mx-auto px-6 md:px-8 py-12 text-center">
            <h1 class="text-2xl font-bold mb-4 text-gray-800">Article not found</h1>
            <button @click="$router.back()"
                class="text-gray-700 font-medium flex items-center gap-2 hover:text-black transition-colors mx-auto">
                <span class="text-xl">←</span>
                Back to Articles
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { exploreCards } from '@/data/explorecards'

const route = useRoute()
const article = ref(null)

// Function to get first 5 sentences
const getFirstFiveSentences = (text) => {
    const firstParagraph = text.split('\n\n')[0]
    const sentences = firstParagraph.split(/[.!?]+/).filter(s => s.trim().length > 0)
    return sentences.slice(0, 5).join('. ') + '.'
}

// Function to get author role
const getAuthorRole = (authorName) => {
    return 'Author' // Default role since we don't have author data
}

const findArticle = () => {
    const decodedTitle = decodeURIComponent(route.params.title)
    console.log('Looking for article with title:', decodedTitle)
    console.log('Available articles:', exploreCards)
    article.value = exploreCards.find(a => a.title === decodedTitle)
    console.log('Found article:', article.value)
}

onMounted(() => {
    console.log('Route params:', route.params)
    findArticle()
})

// Watch for route changes
watch(() => route.params.title, findArticle)
</script> 