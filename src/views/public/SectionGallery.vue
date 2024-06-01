<template>
  <div class="main-container">
    <div class="header">
      <!--       <LanguageSwitch /> -->
      <NavOpener />
    </div>
    <div class="content">
      <div class="gallery-header">
        <component :is="currentGalleryHeader" v-if="!isLandscape" />
        <GalleryHeaderBlank v-if="isLandscape" />
      </div>
      <div class="gallery-container">
        <div class="gallery">
          <GalleryComponent />
        </div>
      </div>
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
import GalleryComponent from '@/components/mobile/gallery/GalleryComponent.vue'
import GalleryHeaderComic from '@/components/mobile/gallery/headers/GalleryHeaderComic.vue'
import GalleryHeaderAnimacion2d from '@/components/mobile/gallery/headers/GalleryHeaderAnimacion2d.vue'
import GalleryHeaderAnimacion3d from '@/components/mobile/gallery/headers/GalleryHeaderAnimacion3d.vue'
import GalleryHeaderConcept from '@/components/mobile/gallery/headers/GalleryHeaderConcept.vue'
import GalleryHeaderDiseño from '@/components/mobile/gallery/headers/GalleryHeaderDiseño.vue'
import GalleryHeaderPersonajes from '@/components/mobile/gallery/headers/GalleryHeaderPersonajes.vue'
import GalleryHeaderBlank from '@/components/mobile/gallery/headers/GalleryHeaderBlank.vue'
import FooterBar from '@/components/mobile/buttons/FooterBar.vue'
import SideBar from '@/components/buttons/sidebar/SideBar.vue'

export default {
  components: {
    LanguageSwitch,
    NavOpener,
    GalleryComponent,
    GalleryHeaderComic,
    GalleryHeaderAnimacion2d,
    GalleryHeaderAnimacion3d,
    GalleryHeaderConcept,
    GalleryHeaderDiseño,
    GalleryHeaderPersonajes,
    GalleryHeaderBlank,
    FooterBar,
    SideBar
  },
  computed: {
    currentGalleryHeader() {
      const routeMap = {
        animacion2d: 'GalleryHeaderAnimacion2d',
        animacion3d: 'GalleryHeaderAnimacion3d',
        comic: 'GalleryHeaderComic',
        concept: 'GalleryHeaderConcept',
        diseño: 'GalleryHeaderDiseño',
        personajes: 'GalleryHeaderPersonajes'
      }
      return routeMap[this.$route.params.section] || GalleryHeaderComic
    }
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
  position: relative;
  background-image: url('/src/assets/backgrounds/mobile/mobile_gallery_bg.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: relative;
  z-index: 1;
}
.gallery-header,
.gallery-container {
  position: fixed;
  width: 95%;
  z-index: 1;
}
.gallery-header {
  display: block;
  justify-content: flex-end;
  top: calc(11.2vw + 2vh);
}
.gallery-container {
  overflow-y: scroll;
  top: calc(21.2vw + 2vh);
  background-color: black;
  height: 85vh;
}
.footer {
  position: relative;
  z-index: 1;
}
@media only screen and (orientation: landscape) {
  .header {
    display: none;
  }
  .gallery-header {
    display: block;
    justify-content: flex-end;
    top: -0.1vh;
  }
  .gallery-container {
    overflow-y: scroll;
    top: -1.1vh;
    background-color: black;
    height: 100vh;
  }
  .gallery-header,
  .gallery-container {
    position: relative;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .gallery-header::-webkit-scrollbar,
  .gallery-container::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
  }
  .content {
    padding-left: 30vh;
    padding-right: 5vh;
    width: 100vw;
  }
  .gallery {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .gallery-container {
    padding-bottom: 15vh;
  }
}
</style>
