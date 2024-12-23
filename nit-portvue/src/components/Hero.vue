<template>
<section class="w-full bg-white">
  <div class="container w-full mx-auto py-16">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-blue-500 mb-4">Nitin Vashisht</h1>
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Professional Portfolio</h2>
          <p class="text-xl text-gray-600 mb-8">Frontend Developer</p>
          <img 
    src="../components/nit2.png" 
    alt="Profile Picture" 
    class="w-48 h-48 rounded-full object-cover border-4 border-blue-500 m-auto mb-3.5 mt-2.5"
  />
          <div class="flex justify-center space-x-4">
            <a :href="'mailto:' + contactEmail" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Contact Me
            </a>
            <a href="#projects" class="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Hero',
    data() {
      return {
        contactEmail: 'nitinsharma8224@gmail.com'
      }
    }
  }
  </script>