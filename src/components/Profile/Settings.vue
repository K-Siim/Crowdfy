<template>
    <div class="max-w-5xl mx-auto p-6">
      
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Personal Info</h1>
          <p class="text-gray-600">Update your personal info with your data preferences</p>
        </div>
        <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition">
          Save settings
        </button>
      </div>
  
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div class="lg:col-span-2 space-y-8">
          
          <div>
            <label class="block mb-2 font-medium">Seu Nome</label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                v-model="personalInfo.firstName" 
                class="border border-gray-300 rounded-lg p-3 w-full" 
                placeholder="First name"
              />
              <input 
                type="text" 
                v-model="personalInfo.lastName" 
                class="border border-gray-300 rounded-lg p-3 w-full" 
                placeholder="Last name"
              />
            </div>
          </div>
  
          
          <div>
            <label class="block mb-2 font-medium">Título da Campanha</label>
            <input 
              type="email" 
              v-model="personalInfo.email" 
              class="border border-gray-300 rounded-lg p-3 w-full" 
            />
          </div>
  
          
          <div>
            <label class="block mb-2 font-medium">Sua Foto de Perfil</label>
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex-shrink-0">
                <div class="w-32 h-32 rounded-full bg-lime-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="@/assets/profiilipilt.png" 
                    alt="Profile Avatar" 
                    class="w-24 h-24 object-cover"
                  />
                </div>
              </div>
              <div class="flex-grow space-y-4">
                
                <div>
                  <label class="block text-sm mb-1">Person</label>
                  <select v-model="personalInfo.person" class="border border-gray-300 rounded-lg p-3 w-full appearance-none bg-white pr-8 relative">
                    <option>Mattew</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm mb-1">Skin Tone</label>
                  <select v-model="personalInfo.skinTone" class="border border-gray-300 rounded-lg p-3 w-full appearance-none bg-white pr-8 relative">
                    <option>Black</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm mb-1">Pose</label>
                  <select v-model="personalInfo.pose" class="border border-gray-300 rounded-lg p-3 w-full appearance-none bg-white pr-8 relative">
                    <option>1 Happy</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm mb-1">Type</label>
                  <div class="flex gap-8 mt-2">
                    <label class="flex items-center">
                      <input type="radio" v-model="personalInfo.gender" value="Male" class="mr-2 accent-black" checked />
                      Male
                    </label>
                    <label class="flex items-center">
                      <input type="radio" v-model="personalInfo.gender" value="Female" class="mr-2" />
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          
          <div class="bg-lime-50 p-4 rounded-lg flex items-center">
            <div class="w-10 h-10 bg-lime-200 rounded-full flex items-center justify-center mr-4">
              <span class="text-xl font-medium">$</span>
            </div>
            <span class="font-medium">You will get 99,9% of the raised amount</span>
          </div>
  
          
          <div>
            <label class="block mb-2 font-medium">Localization</label>
            <select v-model="personalInfo.location" class="border border-gray-300 rounded-lg p-3 w-full appearance-none bg-white pr-8 relative">
              <option>Rio de Janeiro, Brasil</option>
            </select>
          </div>
  
          
          <div>
            <label class="block mb-2 font-medium">Banner Image</label>
            <div class="flex gap-4">
              <div class="w-32 h-16 overflow-hidden rounded-md">
                <img src="@/assets/Image overlay.png" alt="Banner preview" class="w-full h-full object-cover" />
              </div>
              <div class="flex-grow border border-gray-300 border-dashed rounded-lg flex flex-col items-center justify-center p-4">
                <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p class="mb-1"><span class="text-green-500">Click here to upload</span> ou drag here your image</p>
                <p class="text-sm text-gray-500">Recommended 800×600 resolution (max. 1MB)</p>
              </div>
            </div>
          </div>
        </div>
  
        
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            
            <div class="relative">
              <img 
                src="@/assets/Image overlay.png" 
                alt="Rio de Janeiro" 
                class="w-full h-48 object-cover"
              />
              <div class="absolute bottom-4 right-4 flex gap-2">
                <button class="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
                <button class="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            
            <div class="p-4">
              <div class="flex items-center">
                <div class="bg-lime-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                  <img 
                    src="@/assets/profiilipilt.png" 
                    alt="Profile" 
                    class="w-6 h-6 object-cover"
                  />
                </div>
                <div>
                  <h2 class="text-xl font-bold">Marcus Dutra</h2>
                  <p class="text-gray-600 text-sm">Designer, Rio de Janeiro, Brasil</p>
                </div>
              </div>
              
              
              <div class="mt-6">
                <div class="h-1 bg-gray-100 rounded-full overflow-hidden w-full">
                  <div class="bg-gradient-to-r from-green-500 to-lime-300 h-full" style="width: 90%"></div>
                </div>
                <div class="flex justify-between mt-2 text-sm">
                  <span class="text-gray-700">18.543 XP/20.000 XP</span>
                  <span class="font-medium">Level 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        personalInfo: {
          firstName: 'Marcus',
          lastName: 'Dutra',
          email: 'marcus@mainnet.design',
          person: 'Mattew',
          skinTone: 'Black',
          pose: '1 Happy',
          gender: 'Male',
          location: 'Rio de Janeiro, Brasil',
        }
      }
    }
  }
  </script>
  
  <style>
  
  </style>