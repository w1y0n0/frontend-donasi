<template>
    <div>
  
          <div class="bg-white text-center fixed inset-x-0 bottom-0 z-10">
              <div class="container mx-auto grid grid-cols-4 gap-4 p-2 sm:w-full md:w-5/12">
  
                  <div>
                      <a href="#"
                          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                          <img class="inline-block mb-1" width="25" height="25"
                              src="../assets/images/home.png">
                          <span class="block text-xs">Beranda</span>
                      </a>
                  </div>
  
                  <div>
                      <a href="#"
                          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                          <img width="25" height="25" class="inline-block mb-1"
                              src="../assets/images/heart.png">
                          <span class="block text-xs">Donasi Saya</span>
                      </a>
                  </div>
  
                  <div>
                      <a href="#"
                          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                          <img width="25" height="25" class="inline-block mb-1"
                              src="../assets/images/flag.png">
                          <span class="tab tab-kategori block text-xs">Campaign</span>
                      </a>
                  </div>
  
                  <div>
                      <router-link :to="{ name: 'login'}"
                          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                          <img width="25" height="25" class="inline-block mb-1"
                              src="../assets/images/user.png">
                          <span class="block text-xs">Akun</span>
                      </router-link>
                  </div>
  
              </div>
          </div>
  
      </div>
  </template>
  
  <script>
  export default {
      name: 'FooterComponent'
  }
  </script>
  
  <style>
  
  </style>
