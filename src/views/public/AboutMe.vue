<template>
  <div class="main-container">
    <div class="header">
      <!--       <LanguageSwitch /> -->
      <NavOpener />
      <span class="nav-border"></span>
    </div>
    <div class="content">
      <AboutMe />
      <AboutExperience />
    </div>
    <div class="footer">
      <FooterBar v-if="!isLandscape" />
      <SideBar v-if="isLandscape" />
    </div>
  </div>
</template>

<script>
import LanguageSwitch from '@/components/buttons/LanguageSwitch.vue'
import NavOpener from '@/components/mobile/buttons/NavOpener.vue'
import FooterBar from '@/components/mobile/buttons/FooterBar.vue'
import AboutMe from '@/components/mobile/about/AboutMe.vue'
import AboutExperience from '@/components/mobile/about/AboutExperience.vue'
import SideBar from '@/components/buttons/sidebar/SideBar.vue'

export default {
  components: {
    LanguageSwitch,
    NavOpener,
    FooterBar,
    AboutMe,
    AboutExperience,
    SideBar
  },
  data() {
    return {
      isLandscape: window.innerWidth > window.innerHeight
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.isLandscape = window.innerWidth > window.innerHeight
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 18vh;
  z-index: 2;
  background-image: url(/src/assets/backgrounds/mobile/movil_header_cropBG_blanco.png);
  background-position: center;
  background-size: cover;
}
.content {
  width: 100%;
  max-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.content::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}
@media only screen and (orientation: landscape) {
  .header {
    display: none;
  }
  .content {
    width: 100vw;
  }
}
</style>
