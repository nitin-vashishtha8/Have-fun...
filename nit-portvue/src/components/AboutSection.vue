<template>
    <section id="about" class="w-full bg-white">
      <div class="container w-full mx-auto py-16">
        <h3 class="text-3xl font-bold text-gray-800 mb-8">About Me</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="text-gray-600 leading-relaxed">{{ aboutMe }}</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold text-gray-800 mb-4">Skills</h4>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="skill in skills" :key="skill" class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection',
    data() {
      return {
        aboutMe: 'I am a passionate Frontend Developer with expertise in Vue.js and modern web technologies. I focus on creating efficient and user-friendly solutions.',
        skills: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git', 'Angular.js', 'React.js', 'HTML', 'CSS']
      }
    }
  }
  </script>