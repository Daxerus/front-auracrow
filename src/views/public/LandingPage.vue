<template>
  <div class="home" ref="home">
    <div class="header">
      <!--       <LanguageSwitch /> -->
      <NavOpener class="navOpener" />
    </div>
    <div class="background-character" ref="character">
      <img id="lilith" src="/src/assets/images/lilith_colors.png" alt="" />
    </div>
    <NavMenuPc class="navMenuPc" />
    <FooterBar class="footer" />
    <div class="socials">
      <div id="socialsBar">
        <div class="icons">
          <LandingSocials />
        </div>
        <SocialsBar />
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSwitch from '@/components/buttons/LanguageSwitch.vue'
import NavOpener from '@/components/mobile/buttons/NavOpener.vue'
import FooterBar from '@/components/mobile/buttons/FooterBar.vue'
import NavMenuPc from '@/components/buttons/nav/NavMenuPc.vue'
import SocialsBar from '@/components/buttons/nav/buttons/PC/SocialsBar.vue'
import LandingSocials from '@/components/buttons/nav/buttons/PC/landing/LandingSocials.vue'

export default {
  components: {
    LanguageSwitch,
    NavOpener,
    FooterBar,
    NavMenuPc,
    SocialsBar,
    LandingSocials
  }
}
</script>

<style scoped>
.home {
  position: relative;
  background-image: url(/src/assets/backgrounds/mobile/movil_home_fondo.png);
  background-size: cover;
  background-position: center;
  background-color: white;
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

.background-character {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-52%);
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  z-index: 0;
  width: 50vh;
}

#lilith {
  padding-top: 16vh;
  overflow: hidden;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.navMenu {
  display: none;
}
#socialsBar {
  display: none;
}
.navMenuPc {
  display: none;
}
@media only screen and (orientation: landscape) {
  .home {
    background-image: url('src/assets/backgrounds/pc/pc_home_fondo.jpg');
    width: 100vw;
  }
  .background-character {
    top: 0;
    left: 50%;
    transform: translateX(-54%);
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 0;
    width: 100vh;
  }
  #lilith {
    padding-top: 3vh;
    width: 88vh;
    overflow: hidden;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100%;
  }
  .navMenuPc {
    display: flex;
    position: relative;
    z-index: 1;
  }
  /*   .socials {
    transform: translateX(-10vh);
  } */
  #socialsBar {
    position: fixed;
    right: -21.6vh;
    bottom: 10vh;
    display: block;
    width: 53vh;
    z-index: 1;
  }
  .icons {
    z-index: 1;
    position: relative;
    height: 8vh;
    width: 24vh;
    transform: rotate(17.5deg) translateY(6.6vh) translateX(8.7vh);
    /*     opacity: 0.5;
    background-color: red; */
  }
}
</style>
