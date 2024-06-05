<template>
  <div class="main-container">
    <img :src="topLImageSrc" alt="" class="background-asset" id="asset-topl" />
    <img
      src="/src/assets/images/about/pc/pc_experiencia_fondo_topR.png"
      alt=""
      class="background-asset"
      id="asset-topr"
    />
    <div class="content">
      <div class="text-container">
        <h1>EXPERIENCIA</h1>
        <p id="experience-p1">
          Cuento con un gran manejo de programas del paquete de Adobe como
          <b>Photoshop, After Effects, Illustratos, Premiere</b> o <b>In Design</b>
        </p>
        <p id="experience-p2">
          Dentro de la categoría de programas artísticos, <b>Clip Studio Paint</b> es el que utilizo
          de forma más habitual en mis proyectos, ya sean ed ilustración o animación 2D. En el campo
          de la animación 2D cuento con nociones básicas de <b>Toon Boom Harmony</b> que combino con
          otros programas como <b>Clip Studio Paint, After Effects</b> o <b>Photoshop</b>
        </p>
        <p id="experience-p3">
          Respecto a programas 3D cuento con una amplia experiencia del manejo de
          <b>Autodesk Maya</b>, poseo el conocimiento necesario para el modelado, animación e
          iluminación dentro del mismo programa, también tengo nociones básicas de rigging,
          renderizado y VFX.
        </p>
      </div>
      <div class="img-container">
        <img
          src="/src/assets/images/about/about_experience_bars.png"
          alt="Imagen ilustrativa mediante deslizadores de la experiencia de la ilustradora con diferentes programas"
        />
      </div>
    </div>
    <img
      src="/src/assets/images/about/pc/pc_experiencia_fondo_botL.png"
      alt=""
      class="background-asset"
      id="asset-botl"
    />
    <img :src="botRImageSrc" alt="" class="background-asset" id="asset-botr" />
  </div>
</template>
<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      topLImageSrc: '/src/assets/images/about/movil_sobremi_fondo_morado_topL.png',
      botRImageSrc: '/src/assets/images/about/movil_sobremi_fondo_morado_botL.png'
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
        this.topLImageSrc = 'src/assets/images/about/pc/pc_experiencia_fondo_topL.png'
        this.botRImageSrc = 'src/assets/images/about/pc/pc_experiencia_fondo_botR.png'
      } else {
        this.topLImageSrc = 'src/assets/images/about/movil_sobremi_fondo_blanco_topL.png'
        this.botRImageSrc = 'src/assets/images/about/movil_sobremi_fondo_blanco_botR.png'
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  position: relative;
  margin-top: -4vw;
  background-color: white;
  padding: 5vh 6vw 0 6vw;
  width: 100vw;
  overflow-y: auto;
  clip-path: polygon(0 2%, 100% 0, 100% 100%, 0% 100%);
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
  padding-bottom: calc(12vw + 12vh);
}

img {
  position: relative;
  z-index: 2;
  width: 75vw;
  margin-left: 5vw;
}

h1,
p {
  text-align: right;
  color: black;
  position: relative;
  z-index: 3;
}

.background-asset {
  position: absolute;
  z-index: 1;
  margin: 0;
  padding: 0;
}

#asset-botl,
#asset-topr {
  display: none;
}

#asset-topl {
  width: 50vw;
  left: 0;
  top: 0;
}
#asset-botr {
  width: 75vw;
  right: 0;
  bottom: 0;
}

@media only screen and (orientation: landscape) {
  .main-container {
    padding: 4vw 9vw 15vmin 17vh;
    width: 100vw;
    overflow: scroll;
    clip-path: polygon(0 6%, 100% 0, 100% 100%, 0% 100%);
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .main-container::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
  }
  h1 {
    padding-right: 3vw;
    font-size: 4.5vw;
  }
  .content {
    display: flex;
    flex-direction: row-reverse;
    gap: 8vw;
  }
  .text-container {
    flex: 2;
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
    padding-bottom: 0;
  }
  .img-container img {
    width: 100%;
    max-width: 30vw;
  }
  #asset-topl {
    width: 25vw;
  }
  #asset-topr {
    display: block;
    width: 31vw;
    top: 0;
    right: 9vw;
  }
  #asset-botl {
    display: block;
    overflow: hidden;
    position: absolute;
    width: 28vw;
    bottom: 0;
    left: 0;
  }
  #asset-botr {
    overflow: hidden;
    width: 50vw;
  }
}
</style>
