<template>
    <section id="projects" class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h3 class="text-3xl font-bold text-gray-800 mb-8">Projects</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.name" class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">{{ project.name }} Preview</span>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold text-gray-800 mb-2">{{ project.name }}</h4>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex space-x-4">
                <a :href="project.demo" target="_blank" class="text-blue-600 hover:text-blue-700">View Demo</a>
                <a :href="project.github" target="_blank" class="text-blue-600 hover:text-blue-700">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjectsSection',
    data() {
      return {
        projects: [
          {
            name: 'E-commerce Platform',
            description: 'A full-featured online shopping platform built with Vue.js and Node.js',
            demo: 'https://example.com/demo1',
            github: 'https://github.com/yourusername/project1'
          },
          {
            name: 'Task Management App',
            description: 'Real-time task management application with team collaboration features',
            demo: 'https://example.com/demo2',
            github: 'https://github.com/yourusername/project2'
          },
          {
            name: 'Portfolio Website',
            description: 'Personal portfolio website built with Vue.js and Tailwind CSS',
            demo: 'https://example.com/demo3',
            github: 'https://github.com/yourusername/project3'
          }
        ]
      }
    }
  }
  </script>