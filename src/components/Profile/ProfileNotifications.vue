<template>
  <div class="flex h-screen bg-gray-50 overflow-hidden">
    <!-- Left Panel - Notifications -->
    <div class="w-96 bg-white shadow-lg flex flex-col h-full">
      <!-- Header -->
      <div class="p-6 border-b">
        <h1 class="text-2xl font-semibold text-gray-900">Notifications</h1>
        <div class="flex mt-4 space-x-6">
          <button
            :class="['text-sm font-medium', activeTab === 'All views' ? 'text-gray-900' : 'text-gray-500']"
            @click="activeTab = 'All views'"
          >
            All views
          </button>
          <button
            :class="['text-sm font-medium flex items-center', activeTab === 'Funding' ? 'text-gray-900' : 'text-gray-500']"
            @click="activeTab = 'Funding'"
          >
            <Heart class="w-4 h-4 mr-2" />
            Funding
          </button>
          <button
            :class="['text-sm font-medium flex items-center', activeTab === 'Signatures' ? 'text-gray-900' : 'text-gray-500']"
            @click="activeTab = 'Signatures'"
          >
            <FileText class="w-4 h-4 mr-2" />
            Signatures
          </button>
        </div>
      </div>

      <!-- Notifications List -->
      <div class="flex-1 overflow-y-auto">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          class="p-4 border-b hover:bg-gray-50 cursor-pointer"
        >
          <div class="flex items-start space-x-3">
            <img src="@/assets/profiilipilt.png" alt="Profile" class="w-10 h-10 rounded-full" />
            <div class="flex-1">
              <div class="flex items-center space-x-2">
                <span class="font-medium text-gray-900">{{ notification.user }}</span>
                <span class="text-sm text-gray-500">{{ notification.time }}</span>
                <div v-if="notification.isActive" class="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <p class="text-sm text-gray-600 mt-1">{{ notification.action }}</p>
              <p v-if="notification.description" class="text-sm text-gray-500 mt-2 italic">
                {{ notification.description }}
              </p>
              <button
                v-if="notification.hasButton"
                :class="[
                  'mt-3 px-4 py-2 rounded-md text-sm font-medium',
                  notification.buttonStyle === 'gray'
                    ? 'bg-gray-500 text-white hover:bg-gray-600'
                    : notification.buttonStyle === 'purple'
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                ]"
              >
                {{ notification.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="p-4 border-t bg-white">
        <div class="flex items-center justify-between">
          <button
            class="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            @click="currentPage = Math.max(1, currentPage - 1)"
          >
            <ChevronLeft class="w-4 h-4" />
            <span>Previous</span>
          </button>
          <div class="flex space-x-2">
            <button
              v-for="page in [1, 2, 3]"
              :key="page"
              :class="[
                'w-8 h-8 rounded',
                page === currentPage ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
              ]"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
            <span class="text-gray-400">...</span>
            <button
              v-for="page in [8, 9, 10]"
              :key="page"
              class="w-8 h-8 rounded text-gray-600 hover:bg-gray-100"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            @click="currentPage++"
          >
            <span>Next</span>
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Right Panel - Detail View -->
    <div class="flex-1 relative">
      <div class="relative h-full">
        <img src="@/assets/ImageProfile.png" alt="Countryside" class="w-full h-full object-cover" />
        <div
          v-for="(point, index) in pricePoints"
          :key="index"
          class="absolute bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg"
          :style="{
            top: point.top,
            left: point.left,
            right: point.right,
            transform: 'translate(-50%, -50%)'
          }"
        >
          <TrendingUp class="w-3 h-3 inline mr-1" />
          {{ point.amount }}
        </div>

        <div class="absolute top-4 right-4 bg-green-100 text-green-800 p-3 rounded-lg shadow-lg max-w-xs">
          <p class="text-sm">Vai ficarótimo a introdução de passagem de dados do ambiente!</p>
          <div class="text-xs mt-2 text-green-600">yesterday</div>
        </div>
      </div>

      <!-- Campaign Details -->
      <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl p-6">
        <div class="flex items-start space-x-4">
          <img src="@/assets/profiilipilt.png" class="w-15 h-15 rounded-full" />
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-gray-900 mb-2">
              Help us Teach English for Kids on China Countryside
            </h2>
            <p class="text-gray-600 text-sm mb-4">
              I need about 9,000 signatures to deliver to my mayor in two weeks and get that great idea more
              about our project...
            </p>

            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-3">
                <img src="@/assets/profiilipilt.png" class="w-10 h-10 rounded-full" />
                <div>
                  <div class="font-medium text-gray-900">Mateus Rodrigues</div>
                  <div class="text-sm text-gray-500">São Paulo, Brazil</div>
                </div>
              </div>
              <button class="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600">
                Sign campaign
              </button>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex -space-x-2">
                <div
                  v-for="(supporter, index) in supporters.slice(0, 8)"
                  :key="index"
                  class="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs"
                >
                  {{ supporter }}
                </div>
                <div
                  class="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-600"
                >
                  +99
                </div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-gray-900">4,533/9,000</div>
              </div>
            </div>

            <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div class="bg-green-500 h-2 rounded-full" style="width: 50%"></div>
            </div>

            <div class="mt-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Roadmap</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3" v-for="(item, i) in roadmap" :key="i">
                  <img src="@/assets/profiilipilt.png" class="w-10 h-10 rounded-full" />
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <span class="font-medium text-gray-900">{{ item.user }}</span>
                      <span class="text-sm text-gray-500">{{ item.time }}</span>
                    </div>
                    <p class="text-sm text-gray-600">{{ item.action }}</p>
                    <p v-if="item.description" class="text-sm text-gray-500 mt-1 italic">
                      {{ item.description }}
                    </p>
                  </div>
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
import { ref } from 'vue'
import { ChevronLeft, ChevronRight, Heart, FileText, TrendingUp } from 'lucide-vue-next'

const currentPage = ref(1)
const activeTab = ref('All views')

const notifications = ref([
  {
    id: 1,
    user: 'Mateus Rodrigues',
    time: 'in 20 days',
    action: "is gathering 9000 signs to city's prefecture",
    description: '"We need to deliver this about of 9,000 signs to the mayor to he approve us as international english teacher"',
    type: 'petition',
    isActive: true
  },
  {
    id: 2,
    user: 'Mateus Rodrigues',
    time: 'in 20 days',
    action: 'is raising $1000 to afford their travel costs (2 persons)',
    type: 'funding',
    hasButton: true,
    buttonText: 'Fund campaign',
    isActive: true
  },
  {
    id: 3,
    user: 'Mateus Rodrigues',
    time: 'in 20 days',
    action: 'is raising $1000 to afford their travel costs (2 persons)',
    type: 'funding',
    hasButton: true,
    buttonText: 'Fund campaign',
    isActive: true
  },
  {
    id: 4,
    user: 'Mateus Rodrigues',
    time: '2 mins ago',
    action: 'Your 300 uSDG + 10,000 XP will be available in 3 days',
    hasButton: true,
    buttonText: 'Get 300 uSDG',
    buttonStyle: 'gray'
  },
  {
    id: 5,
    user: 'Mateus Rodrigues',
    time: 'in 20 days',
    action: 'is teaching english to 300 chinese children',
    hasButton: true,
    buttonText: 'Write Words of Support',
    buttonStyle: 'green'
  },
  {
    id: 6,
    user: 'Mateus Rodrigues',
    time: '2 mins ago',
    action: 'Your earned 300 uSDG + 10,000 XP',
    hasButton: true,
    buttonText: 'Get 300 uSDG',
    buttonStyle: 'purple'
  },
  {
    id: 7,
    user: 'Mateus Rodrigues',
    time: '2 mins ago',
    action: 'Your 300 uSDG + 10,000 XP will be available in 3 days',
    hasButton: true,
    buttonText: 'Get 300 uSDG',
    buttonStyle: 'gray'
  }
])

const pricePoints = [
  { amount: '$23.42', top: '15%', left: '60%' },
  { amount: '$12.31', top: '30%', left: '65%' },
  { amount: '$43.80', top: '20%', left: '85%' },
  { amount: '$53.88', top: '45%', left: '70%' },
  { amount: '$23.42', top: '35%', right: '15%' },
  { amount: '$51.21', top: '40%', right: '8%' }
]

const supporters = ['👤', '👤', '👤', '👤', '👤', '👤', '👤', '👤', '👤']

const roadmap = [
  notifications.value[0],
  {
    user: 'Mateus Rodrigues',
    time: 'in 20 days',
    action: 'Raise together $1000 to pay for our (2 persons) flights to 1st weeks'
  }
]
</script>
