
<template>
  <div class="min-h-screen bg-red-500">
    <Hero />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    Hero,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection
  }
}
</script>







