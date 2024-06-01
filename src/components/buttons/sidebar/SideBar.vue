<template>
  <div class="sidebar">
    <div class="sidebar-bar"></div>
    <div class="sidebar-buttons">
      <button class="sidebar-button" id="sidebar-home" @click="goToSection('LandingPage')">
        <SidebarHome />
      </button>
      <div class="sidebar-gallery">
        <GallerySelector />
      </div>
      <button class="sidebar-button purple-button" id="sidebar-contact" @click="toggleContact">
        <SidebarContact />
      </button>
      <button class="sidebar-button purple-button" id="sidebar-cv" @click="downloadCv">
        <SidebarCv />
      </button>
      <button
        class="sidebar-button purple-button"
        id="sidebar-about"
        @click="goToSection('AboutMe')"
      >
        <SidebarAbout />
      </button>
    </div>
  </div>
  <div
    :class="['overlay', store.state.contactOpen ? 'overlayOn' : 'overlayOff']"
    @click="store.closeContact"
  >
    <div class="contact-form" @click.stop><ContactForm /></div>
  </div>
</template>

<script>
import SidebarContact from '@/components/buttons/sidebar/links/SidebarContact.vue'
import SidebarCv from '@/components/buttons/sidebar/links/SidebarCv.vue'
import SidebarAbout from '@/components/buttons/sidebar/links/SidebarAbout.vue'
import ContactForm from '@/components//mobile/contact/ContactForm.vue'
import SidebarHome from '@/components/buttons/sidebar/links/SidebarHome.vue'
import GallerySelector from '@/components/buttons/sidebar/links/GallerySelector.vue'
import { useStore } from '@/stores/store'
import { useRouter } from 'vue-router'

export default {
  components: {
    SidebarContact,
    SidebarCv,
    SidebarAbout,
    ContactForm,
    SidebarHome,
    GallerySelector
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const goToSection = (section) => {
      router.push({ name: section })
    }
    const downloadCv = () => {
      const filePath = "assets/docs/CV_VeronicaVal.pdf"
      const link = document.createElement('a')
      link.href = filePath
      link.download = 'CV_VeronicaVal.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    return {
      store,
      goToSection,
      toggleContact: store.toggleContact,
      closeContact: store.closeContact,
      downloadCv
    }
  }
}
</script>

<style scoped>
.sidebar {
  height: 100vh;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 3;
  pointer-events: none;
}
.sidebar-bar {
  position: absolute;
  background-image: url('/src/assets/backgrounds/pc/pc_sidebar_fondo_paginas.svg');
  background-size: cover;
  background-position: center;
  width: 25vh;
  height: 100vh;
  overflow: hidden;
  bottom: 0;
}
.sidebar-buttons {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 90vh;
  padding-right: 1.5rem;
}
.sidebar-button {
  width: 15.5vh;
  height: auto;
  pointer-events: auto;
  transition: transform 0.2s ease;
}
#sidebar-home {
  top: 2vh;
  left: 2.8vh;
  position: relative;
}
.sidebar-gallery {
  margin-top: 4.2vh;
  margin-bottom: 7vh;
  width: 30vh;
  pointer-events: auto;
}
.sidebar-button:hover {
  transform: scale(1.1);
}
.purple-button:hover {
  transform: scale(1.1) translateX(1.35vh);
}

#sidebar-contact {
  position: relative;
  left: -0.6vh;
  width: 17.5vh;
}
#sidebar-cv {
  position: relative;
  left: -0.7vh;
  top: -2.5vh;
  width: 16vh;
}
#sidebar-about {
  position: relative;
  left: -0.7vh;
  top: -6.2vh;
  width: 15.5vh;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-purple-alpha);
  z-index: 2;
  opacity: 1;
  transition: opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.overlayOn {
  opacity: 1;
}
.overlayOff {
  opacity: 0;
  pointer-events: none;
}

.nav-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
