<template>
    <section
      class="relative bg-cover bg-center min-h-[130vh] flex flex-col justify-center items-center text-white text-center px-4 pt-20"
      :style="{ backgroundImage: `url(${heroBackground})` }"
    >
      <div class="max-w-3xl -mt-75">
        <h1 class="text-7xl font-bold leading-tight mb-2">
          Solve problems all <br />
          <span class="relative inline-block">
            around the world
            <span
              class="absolute bottom-1 left-0 w-full h-2 bg-lime-400 rounded-full -z-10"
            ></span>
          </span>
        </h1>
  
        <p class="text-2xl mb-18">
          Fund and sign campaigns and missions in <br />
          all the 234 countries on the globe
        </p>
  
        <button
          class="px-6 py-3 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600 transition"
        >
          Get Started
        </button>
  
        <p class="mt-4 text-xl text-white/80">
          Already have an account?
          <a href="#" class="underline">Log in</a>
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  import heroBackground from '@/assets/EsilehePilt.png'
  </script>
  