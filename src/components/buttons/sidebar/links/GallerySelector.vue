<template>
  <div class="main-container">
    <div
      :class="{ 'active-route': isActiveRoute }"
      class="section point-left"
      @click="goToSection('/gallery/personajes')"
    >
      <SelectorCharacters />
    </div>
    <div class="section point-right" @click="goToSection('/gallery/comic')">
      <SelectorComic />
    </div>
    <div class="section point-left" @click="goToSection('/gallery/animacion2d')">
      <SelectorAnimation2d />
    </div>
    <div class="section point-right" @click="goToSection('/gallery/animacion3d')">
      <SelectorAnimation3d />
    </div>
    <div class="section point-left" @click="goToSection('/gallery/concept')">
      <SelectorConcept />
    </div>
    <div class="section point-right" @click="goToSection('/gallery/diseño')">
      <SelectorDesign />
    </div>
  </div>
</template>

<script>
import SelectorAnimation2d from '@/components/buttons/sidebar/links/galleries/SelectorAnimation2d.vue'
import SelectorAnimation3d from '@/components/buttons/sidebar/links/galleries/SelectorAnimation3d.vue'
import SelectorCharacters from '@/components/buttons/sidebar/links/galleries/SelectorCharacters.vue'
import SelectorComic from '@/components/buttons/sidebar/links/galleries/SelectorComic.vue'
import SelectorConcept from '@/components/buttons/sidebar/links/galleries/SelectorConcept.vue'
import SelectorDesign from '@/components/buttons/sidebar/links/galleries/SelectorDesign.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    SelectorAnimation2d,
    SelectorAnimation3d,
    SelectorCharacters,
    SelectorComic,
    SelectorConcept,
    SelectorDesign
  },
  setup() {
    const router = useRouter()

    const goToSection = (path) => {
      router.push({ path: path })
    }

    return {
      goToSection
    }
  }
}
</script>

<style scoped>
.section {
  margin-bottom: -1.4vh;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.section:hover {
  transform: scale(1.1) translateX(1vh);
}
.active-route {
  transform: scale(1.1) translateX(1vh);
}

.point-left {
  position: relative;
  left: -7vh;
  margin-bottom: -3vh;
}
.point-right {
  position: relative;
  left: -4vh;
}
</style>
