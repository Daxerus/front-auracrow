<template>
  <div class="main-container">
    <img :src="topLImageSrc" alt="" class="background-asset" id="asset-topl" />
    <img
      src="@/assets/images/about/pc/pc_sobremi_fondo_topR.png"
      alt=""
      class="background-asset"
      id="asset-topr"
    />
    <div class="content">
      <div class="text-container">
        <h1>SOBRE MÍ</h1>
        <p id="about-me-p1">
          Verónica Val, ilustradora, animadora y diseñadora de personajes que reside en España.
        </p>
        <p id="about-me-p2">
          Soy una persona polifacética dentro de la industria audiovisual, soy capaz de diseñar
          personajes, animar tanto en 2D como 3D, crear motion graphics, realizar ilustraciones ya
          sea para cómics, carteles, libros...también me gusta mucho participar en la parte creativa
          de los proyectos y aportar ideas.
        </p>
        <p id="about-me-p3">
          Imaginando personajes desde pequeña, creando escenas y escribiendo películas imaginarias,
          así comencé en el mundo artístico. Crecí entre películas de Disney, series de anime y
          juegos de Pokémon que hicieron que me desarrollase hasta llegar a donde estoy ahora.
          Graduada en la carrera de animación en la universidad U-Tad, sigo buscando experiencias
          que me ayuden a crecer artísticamente y desarrollarme en un entorno profesional.
        </p>
      </div>
      <div class="img-container">
        <img
          src="/src/assets/images/about/about_self.png"
          alt="Autoretrato de la ilustradora Verónica Val"
        />
      </div>
    </div>

    <img :src="botLImageSrc" alt="" class="background-asset" id="asset-botl" />
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      topLImageSrc: '/src/assets/images/about/movil_sobremi_fondo_morado_topL.png',
      botLImageSrc: '/src/assets/images/about/movil_sobremi_fondo_morado_botL.png'
    }
  },
  mounted() {
    this.updateImageSrc()
    window.addEventListener('resize', this.updateImageSrc)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateImageSrc)
  },
  methods: {
    updateImageSrc() {
      if (window.innerWidth > window.innerHeight) {
        this.topLImageSrc = '/src/assets/images/about/pc/pc_sobremi_fondo_topL.png'
        this.botLImageSrc = '/src/assets/images/about/pc/pc_sobremi_fondo_botL.png'
      } else {
        this.topLImageSrc = '/src/assets/images/about/movil_sobremi_fondo_morado_topL.png'
        this.botLImageSrc = '/src/assets/images/about/movil_sobremi_fondo_morado_botL.png'
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  position: relative;
  background-color: var(--color-purple);
  padding: 13vh 6vw 0 6vw;
  width: 100vw;
  overflow: scroll;
  clip-path: polygon(0 2%, 100% 0, 100% 97%, 0% 100%);
}
h1 {
  font-size: 13vw;
  font-family: 'Anton';
  letter-spacing: 0.2vw;
  transform: scaleY(0.8);
}
p {
  font-family: 'Architects Daughter';
  font-size: 5vw;
  margin-bottom: 4vw;
  line-height: 1.25;
}
.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(5vw + 5vh);
}
img {
  width: 75vw;
}
h1,
p,
.img-container {
  position: relative;
  z-index: 2;
}
.background-asset {
  position: absolute;
  z-index: 1;
}
#asset-botl {
  width: 100vw;
  bottom: 0;
  left: 0;
}
#asset-topl {
  width: 70vw;
  top: 10vh;
  left: 0;
}
#asset-topr {
  display: none;
}
@media only screen and (orientation: landscape) {
  .main-container {
    padding: 2.5vw 0 6vmin 24vmin;
    clip-path: polygon(0 0%, 100% 0, 100% 90%, 0% 100%);
    width: 100vw;
    overflow: hidden;
    margin-bottom: 2.5vh;
  }
  h1 {
    padding-left: 3vw;
    font-size: 4.5vw;
  }
  .content {
    display: flex;
    flex-direction: row;
    gap: 2vw;
  }
  .text-container {
    flex: 1;
    padding: 0 2vw;
    height: 100%;
  }
  p {
    font-size: 1.4vw;
    margin-bottom: 2vw;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
  }
  .img-container img {
    width: 100%;
    max-width: 28vw;
  }
  #asset-topl {
    width: 40vw;
    top: 0;
    left: 7vh;
  }
  #asset-topr {
    display: block;
    position: absolute;
    width: 30vw;
    top: 0;
    right: 0;
  }
  #asset-botl {
    overflow: hidden;
    display: absolute;
    width: 47vw;
    bottom: 0;
    left: 0;
  }
}
</style>
