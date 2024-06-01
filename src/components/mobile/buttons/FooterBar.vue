<template>
  <div class="footer">
    <div class="footer-bar"></div>
    <div class="footer-buttons">
      <button class="footer-button" id="footer-contact" @click="toggleContact">
        <FooterContact />
      </button>
      <button class="footer-button" id="footer-cv" @click="downloadCv">
        <FooterCV />
      </button>
      <button class="footer-button" id="footer-about" @click="goToSection('AboutMe')">
        <FooterAbout />
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
import { useStore } from '@/stores/store'
import FooterContact from '@/components/buttons/footer/FooterContact.vue'
import FooterCV from '@/components/buttons/footer/FooterCV.vue'
import FooterAbout from '@/components/buttons/footer/FooterAbout.vue'
import ContactForm from '@/components//mobile/contact/ContactForm.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    FooterContact,
    FooterCV,
    FooterAbout,
    ContactForm
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const goToSection = (section) => {
      router.push({ name: section })
    }
    const downloadCv = () => {
      const link = document.createElement('a')
      link.href = "/src/assets/docs/CV_VeronicaVal.pdf"
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
.footer {
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  pointer-events: none;
}
.footer-bar {
  position: absolute;
  background-image: url(/src/assets/backgrounds/mobile/mobile_footer.png);
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 20vh;
  overflow: hidden;
  bottom: 0;
}
.footer-buttons {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  padding-right: 1.5rem;
}
.footer-button {
  width: 13.5vh;
  height: auto;
  pointer-events: auto;
}
#footer-cv {
  width: 12vh;
}
#footer-about {
  width: 16vh;
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

@media only screen and (orientation: landscape) {
  .footer {
    left: -10vh;
    top: -5vh;
  }
  .footer-bar {
    position: absolute;
    background-image: url('@/assets/backgrounds/pc/pc_sidebar_fondo.svg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 30vh;
    z-index: 5;
  }
  .footer-buttons {
    transform: rotate(90deg);
    position: relative;
    z-index: 5;
    width: 90vh;
    top: 25vh;
    left: -23.9vh;
  }
  .footer-button {
    width: 16vh;
    transition: transform 0.2s ease;
  }
  #footer-cv {
    width: 16vh;
  }
  #footer-about {
    width: 22vh;
  }
  .footer-button:hover {
    transform: scale(1.1);
  }
}
</style>
