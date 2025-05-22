<template>
  <div 
    ref="slideContainer"
    class="absolute bottom-0 left-0 right-0 flex justify-center transition-all duration-300 ease-in-out"
    :style="{ 
      zIndex: zIndexValue,
      transform: `translateY(${translateY}px)`
    }"
  >
    <div
      class="bg-white rounded-t-3xl shadow-lg w-full max-w-2xl mx-auto relative"
      :style="{ 
        height: `${slideHeight}px`,
        maxHeight: '85vh'
      }"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      
      <!-- Drag Handle -->
      <div class="h-2 w-16 bg-gray-300 rounded-full mx-auto mt-3 cursor-grab active:cursor-grabbing"></div>
      
      <!-- Content Container -->
      <div class="overflow-y-auto h-full pb-8 hide-scrollbar">
        
        <!-- Main Content -->
        <div class="px-6 pt-4 pb-2">
          <div class="flex items-start gap-4">
            <div class="relative">
              <img 
                src="@/assets/profiilipilt.png" 
                alt="Campaign creator" 
                class="w-16 h-16 rounded-full border-4 border-lime-400 object-cover"
              />
              <div class="absolute bottom-0 right-0 w-4 h-4 bg-lime-500 rounded-full border-2 border-white"></div>
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900">Help us Teach English for Kids on China Countryside</h2>
            </div>
          </div>
          
          <div class="mt-4">
            <p class="text-gray-700">
              I need about <span class="font-bold">9.000 signatures</span> to deliver to my mayor in two weeks and get that grant!
              Check more about our project and if you want to see how we are changing lovely children
              lifes on China countryside just teaching how they can use the internet.
            </p>
          </div>
          
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center gap-2">
              <img 
                src="@/assets/profiilipilt.png" 
                alt="Mateus Rodrigues" 
                class="w-10 h-10 rounded-full object-cover"
              />
              <span class="font-medium">Mateus Rodrigues</span>
              <div class="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <span class="ml-1">São Paulo, Brazil</span>
              </div>
            </div>
            
            <button class="px-4 py-2 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition">
              Sign campaign
            </button>
          </div>
          
          <!-- Progress Section -->
          <div class="mt-6">
            <div class="flex gap-1 mb-2">
              <img v-for="i in 9" :key="i" src="@/assets/profiilipilt.png" alt="Supporter" class="w-6 h-6 rounded-full border border-white" />
              <span class="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">+99</span>
            </div>
            
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div class="bg-lime-500 h-4 rounded-full" style="width: 50%"></div>
            </div>
            
            <div class="flex justify-between mt-1">
              <span class="text-gray-500 text-sm">Progress</span>
              <span class="font-bold">4.533/9.000</span>
            </div>
          </div>
        </div>
        
        <!-- Roadmap Section -->
        <div class="px-6 mt-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold">Roadmap <span class="text-gray-500 text-sm">(Coming Soon)</span></h3>
            <div class="flex gap-1">
              <div class="w-2 h-2 rounded-full bg-lime-500"></div>
              <div class="w-2 h-2 rounded-full bg-gray-300"></div>
              <div class="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
          
          <div v-if="isFullyOpen" class="mt-6 relative">
            <!-- Timeline Line -->
            <div class="absolute left-5 top-5 w-0.5 h-full bg-gray-200"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-8">
              
              <div class="flex gap-4">
                <div class="relative">
                  <img src="@/assets/profiilipilt.png" alt="Mateus" class="w-10 h-10 rounded-full z-10 relative bg-white" />
                  <div class="absolute bottom-0 right-0 w-3 h-3 bg-lime-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-medium">Mateus Rodrigues</span>
                    <span class="text-sm text-gray-500">in 20 days</span>
                  </div>
                  <p class="mt-1">is gathering <span class="font-bold">9000</span> signs to city's prefecture</p>
                  <p class="mt-2 text-gray-600 bg-gray-100 p-3 rounded-lg">
                    "We need to deliver this about of 9.000 signs to the mayor to he approve us as
                    international english teacher"
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="relative">
                  <img src="@/assets/profiilipilt.png" alt="Mateus" class="w-10 h-10 rounded-full z-10 relative bg-white" />
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-medium">Mateus Rodrigues</span>
                    <span class="text-sm text-gray-500">in 20 days</span>
                  </div>
                  <p class="mt-1">Raise together <span class="font-bold">$1000</span> to pay for our (2 persons) flights to 1st weeks</p>
                  <button class="mt-2 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd" />
                    </svg>
                    Fund campaign
                  </button>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="relative">
                  <img src="@/assets/profiilipilt.png" alt="Mateus" class="w-10 h-10 rounded-full z-10 relative bg-white" />
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-medium">Mateus Rodrigues</span>
                    <span class="text-sm text-gray-500">2 mins ago</span>
                  </div>
                  <p class="mt-1">Make <span class="font-bold">300 children</span> pass on the English proficiency test on China</p>
                  
                  <div class="mt-3 flex gap-2">
                    <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold relative">
                      3
                      <div class="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white">
                        ✓
                      </div>
                    </div>
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold relative">
                      2
                      <div class="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white">
                        ✓
                      </div>
                    </div>
                    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold relative">
                      4
                      <div class="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="relative">
                  <img src="@/assets/profiilipilt.png" alt="Mateus" class="w-10 h-10 rounded-full z-10 relative bg-white" />
                  <div class="absolute bottom-0 right-0 w-3 h-3 bg-lime-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-medium">Mateus Rodrigues</span>
                    <span class="text-sm text-gray-500">2 mins ago</span>
                  </div>
                  <p class="mt-1">Your earned <span class="font-bold">300 uSDG</span> + <span class="font-bold text-yellow-500">10.000 XP</span></p>
                  
                  <button class="mt-3 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd" />
                    </svg>
                    Get 300 uSDG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Indicator -->
        <div v-if="isFullyOpen" class="flex justify-center mt-8 gap-1">
          <div class="w-2 h-2 rounded-full bg-lime-500"></div>
          <div class="w-12 h-2 rounded-full bg-gray-200"></div>
          <div class="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Configuration
const MIN_HEIGHT = 400; 
const MAX_HEIGHT = ref(window.innerHeight * 0.85);
const INITIAL_VISIBLE_PERCENT = 1; // 40% visible above footer initially

// Reactive state
const slideHeight = ref(MIN_HEIGHT);
const isDragging = ref(false);
const startY = ref(0);
const startHeight = ref(0);
const slideContainer = ref(null);
const currentSlideIndex = ref(0);
const slides = ref([1, 2, 3]); 
const slideInterval = ref(null);

// Computed properties
const visiblePercent = computed(() => {
  return (slideHeight.value / MAX_HEIGHT.value) * 100;
});

const isFullyOpen = computed(() => {
  return visiblePercent.value > 80;
});


const zIndexValue = computed(() => {
  if (visiblePercent.value > 70) return 25; 
  return 15; 
});


const translateY = computed(() => {
  // Calculate how much should be hidden behind footer
  const hiddenPortion = slideHeight.value * (100 - INITIAL_VISIBLE_PERCENT) / 100;
  
  // When fully expanded, slide comes all the way up
  const expansionOffset = (visiblePercent.value / 100) * hiddenPortion;
  
  // Add 20px offset to move it downwards
  return hiddenPortion - expansionOffset + 77;
});

// Drag functionality
const startDrag = (event) => {
  isDragging.value = true;
  startY.value = event.type === 'mousedown' ? event.clientY : event.touches[0].clientY;
  startHeight.value = slideHeight.value;
  
  // Add event listeners
  if (event.type === 'mousedown') {
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  } else {
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', stopDrag);
  }
  
  // Prevent default to avoid scrolling issues
  event.preventDefault();
};

const drag = (event) => {
  if (!isDragging.value) return;
  
  const currentY = event.type === 'mousemove' ? event.clientY : event.touches[0].clientY;
  const deltaY = startY.value - currentY;
  let newHeight = startHeight.value + deltaY;
  
  // Constrain height
  newHeight = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT.value, newHeight));
  slideHeight.value = newHeight;
  
  // Prevent scrolling while dragging
  event.preventDefault();
};

const stopDrag = () => {
  isDragging.value = false;
  
  // Remove event listeners
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchmove', drag);
  document.removeEventListener('touchend', stopDrag);
  
  // Snap to positions based on drag distance
  if (visiblePercent.value > 60) {
    // Snap to fully open
    slideHeight.value = MAX_HEIGHT.value;
    startSlideshow();
  } else {
    // Snap back to initial position (40% visible above footer)
    slideHeight.value = MIN_HEIGHT;
    stopSlideshow();
  }
};

// Slideshow functionality
const startSlideshow = () => {
  if (slideInterval.value) return;
  
  slideInterval.value = setInterval(() => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
  }, 5000); 
};

const stopSlideshow = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value);
    slideInterval.value = null;
  }
};

// Window resize handler
const onResize = () => {
  const newMaxHeight = window.innerHeight * 0.85;
  MAX_HEIGHT.value = newMaxHeight;
  
  // Adjust current height if it was at max
  if (slideHeight.value >= MAX_HEIGHT.value * 0.9) {
    slideHeight.value = newMaxHeight;
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  stopSlideshow();
  window.removeEventListener('resize', onResize);
  // Clean up any remaining event listeners
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchmove', drag);
  document.removeEventListener('touchend', stopDrag);
});
</script>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none; 
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; 
}

/* Smooth cursor transitions */
.cursor-grab:active {
  cursor: grabbing;
}
</style>