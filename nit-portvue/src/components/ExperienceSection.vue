<template>
    <section id="experience" class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h3 class="text-3xl font-bold text-gray-800 mb-8">Experience</h3>
        <div class="space-y-8">
          <div v-for="job in experience" :key="job.title" class="bg-gray-50 p-6 rounded-lg">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h4 class="text-xl font-bold text-gray-800">{{ job.title }}</h4>
                <p class="text-gray-600">{{ job.company }}</p>
              </div>
              <span class="text-gray-500">{{ job.period }}</span>
            </div>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li v-for="(achievement, index) in job.achievements" :key="index">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ExperienceSection',
    data() {
      return {
        experience: [
          {
            title: 'Frontend Developer',
            company: 'Freelancer'
          },
        
        ]
      }
    }
  }
  </script>