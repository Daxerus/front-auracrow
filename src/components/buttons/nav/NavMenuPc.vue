<template>
  <div class="main-container">
    <div class="container">
      <div class="left-container">
        <div id="animation3d">
          <button @click="goToSection('/gallery/animacion3d')">
            <ButtonAnimation3dPc class="svg" />
          </button>
        </div>
        <div id="concept">
          <button @click="goToSection('/gallery/concept')">
            <ButtonConceptPc class="svg" />
          </button>
        </div>
        <div id="design">
          <button @click="goToSection('/gallery/diseño')">
            <ButtonDesignPc class="svg" />
          </button>
        </div>
      </div>
      <div class="right-container">
        <div id="characters">
          <button @click="goToSection('/gallery/personajes')">
            <ButtonCharactersPc class="svg" />
          </button>
        </div>
        <div id="comic">
          <button @click="goToSection('/gallery/comic')">
            <ButtonComicPc class="svg" />
          </button>
        </div>
        <div id="animation2d">
          <button @click="goToSection('/gallery/animacion2d')">
            <ButtonAnimation2dPc class="svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCharactersPc from '@/components/buttons/nav/buttons/PC/ButtonCharactersPc.vue'
import ButtonComicPc from '@/components/buttons/nav/buttons/PC/ButtonComicPc.vue'
import ButtonAnimation3dPc from '@/components/buttons/nav/buttons/PC/ButtonAnimation3dPc.vue'
import ButtonConceptPc from '@/components/buttons/nav/buttons/PC/ButtonConceptPc.vue'
import ButtonDesignPc from '@/components/buttons/nav/buttons/PC/ButtonDesignPc.vue'
import ButtonAnimation2dPc from '@/components/buttons/nav/buttons/PC/ButtonAnimation2dPc.vue'

export default {
  components: {
    ButtonCharactersPc,
    ButtonComicPc,
    ButtonAnimation3dPc,
    ButtonConceptPc,
    ButtonDesignPc,
    ButtonAnimation2dPc
  },
  methods: {
    goToSection(section) {
      this.$router.push(`${section}`)
    }
  }
}
</script>

<style scoped>
.main-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: rotate(-12deg) translateX(-2vh);
  padding-top: 13vh;
  gap: 45vh;
}

.left-container,
.right-container {
  flex: 1;
}

.left-container {
  padding-top: 7vh;
}

button {
  width: 47vh;
  transition: transform 0.2s ease;
  overflow: hidden;
  z-index: 1;
}

#animation3d {
  position: relative;
  transform: scale(0.9);
}

#concept {
  position: relative;
  margin: -6vh 0 0 -3.5vh;
  transform: rotate(-11deg);
}

#design {
  position: relative;
  margin: -6vh 0 0 4vh;
  transform: rotate(-17deg) scale(0.9);
}

#characters {
  position: relative;
  margin: 0 0 0 0;
}

#comic {
  position: relative;
  transform: rotate(7deg) scale(0.88);
  margin: -2.2vh 0 0 -4vh;
}

#animation2d {
  position: relative;
  transform: rotate(12deg) scale(0.9);
  margin: -3vh 0 0 -4vh;
}

button:hover {
  transform: scale(1.1);
}

#animation3d:hover,
#concept:hover,
#design:hover,
#characters:hover,
#comic:hover,
#animation2d:hover {
  z-index: 2;
}
</style>
