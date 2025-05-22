<script setup>
import ExploreCards from '../components/Explore/ExploreCards.vue';
import SubNavbarExplore from '../components/Explore/SubNavbarExplore.vue';
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <SubNavbarExplore />
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ExploreCards />
        </main>
    </div>
</template>

