<template>
  <div class="container">
    <ul>
      <div class="white-button">
        <button @click="goToSection('/gallery/comic')">
          <ButtonComic />
        </button>
      </div>
      <div class="black-button" href="">
        <button @click="goToSection('/gallery/animacion3d')">
          <ButtonAnimation3d />
        </button>
      </div>
      <div class="white-button">
        <button @click="goToSection('/gallery/concept')">
          <ButtonConcept />
        </button>
      </div>
      <div class="black-button">
        <button @click="goToSection('/gallery/personajes')">
          <ButtonCharacters />
        </button>
      </div>
      <div class="white-button">
        <button @click="goToSection('/gallery/diseño')">
          <ButtonDesign />
        </button>
      </div>
      <div class="black-button">
        <button @click="goToSection('/gallery/animacion2d')">
          <ButtonAnimation2d />
        </button>
      </div>
    </ul>
    <div class="home-button-container">
      <ButtonHome class="home-button" @click="goToSection('/')" />
    </div>
  </div>
</template>

<script>
import ButtonCharacters from '@/components/buttons/nav/buttons/mobile/ButtonCharacters.vue'
import ButtonComic from '@/components/buttons/nav/buttons/mobile/ButtonComic.vue'
import ButtonAnimation3d from '@/components/buttons/nav/buttons/mobile/ButtonAnimation3d.vue'
import ButtonConcept from '@/components/buttons/nav/buttons/mobile/ButtonConcept.vue'
import ButtonDesign from '@/components/buttons/nav/buttons/mobile/ButtonDesign.vue'
import ButtonAnimation2d from '@/components/buttons/nav/buttons/mobile/ButtonAnimation2d.vue'
import ButtonHome from '@/components/buttons/nav/buttons/mobile/ButtonHome.vue'

export default {
  components: {
    ButtonCharacters,
    ButtonComic,
    ButtonAnimation3d,
    ButtonConcept,
    ButtonDesign,
    ButtonAnimation2d,
    ButtonHome
  },
  methods: {
    goToSection(section) {
      this.$router.push(`${section}`)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

ul {
  display: flex;
  flex-direction: column;
  width: 32vh;
  height: auto;
  margin-bottom: 4vh;
}

button {
  width: 100%;
}

.white-button {
  transform: translateX(-4.5vh);
}

.black-button {
  transform: translateX(4.5vh);
}

.white-button,
.black-button {
  margin-bottom: 0.7vh;
}

.home-button-container {
  text-align: right;
  width: 100%;
  cursor: pointer;
}
.home-button {
  position: relative;
  width: 23vh;
  margin-bottom: 4vh;
  z-index: 3;
}
</style>
