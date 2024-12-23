<template>
<section id="contact" class="w-full bg-white">
  <div class="container w-full mx-auto py-16">
        <h3 class="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="text-gray-600 mb-6">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div class="space-y-4">
              <div v-for="(item, index) in contactInfo" :key="index" class="flex items-center space-x-4">
                <div class="w-6 h-6 text-gray-600">
                  <component :is="item.icon" />
                </div>
                <a v-if="item.link" :href="item.link" class="text-gray-600 hover:text-gray-900">
                  {{ item.text }}
                </a>
                <span v-else class="text-gray-600">{{ item.text }}</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div v-for="field in formFields" :key="field.id">
                <label :for="field.id" class="block text-gray-700 mb-2">{{ field.label }}</label>
                <component
                  :is="field.type === 'textarea' ? 'textarea' : 'input'"
                  :id="field.id"
                  :type="field.inputType"
                  v-model="formData[field.id]"
                  :rows="field.rows"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        contactInfo: [
          {
            icon: 'EmailIcon',
            text: 'nitinsharma8224@gmail.com',
            link: 'mailto:nitinsharma8224@gmail.com'
          },
          {
            icon: 'PhoneIcon',
            text: '+91-7878227383'
          },
          {
            icon: 'LinkedInIcon',
            text: 'LinkedIn Profile',
            link: 'https://www.linkedin.com/in/nitvashishth/'
          }
        ],
        formData: {
          name: '',
          email: '',
          message: ''
        },
        formFields: [
          { id: 'name', label: 'Name', type: 'input', inputType: 'text' },
          { id: 'email', label: 'Email', type: 'input', inputType: 'email' },
          { id: 'message', label: 'Message', type: 'textarea', rows: 4 }
        ]
      }
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted:', this.formData)
        // Add your form submission logic here
      }
    }
  }
  </script>