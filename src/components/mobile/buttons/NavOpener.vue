<template>
  <div class="container">
    <button
      @click="toggleNav"
      :class="[
        'nav-opener-button',
        store.state.navOpen || store.state.contactOpen ? 'white-toggle' : ''
      ]"
    >
      <svg
        id="Capa_2"
        data-name="Capa 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54.51 25.15"
        class="nav-opener-icon"
        alt="Botón para abrir el navegador de secciones"
      >
        <g id="menu">
          <polygon class="cls-1" points="0 6.51 54.51 0 54.51 8.55 1.66 9.32 0 6.51" />
          <polygon class="cls-1" points="1.66 12 54.51 12.51 54.51 15.06 1.66 17.74 1.66 12" />
          <polyline class="cls-1" points="1.66 20.17 54.51 21.45 53.87 25.15 2.3 25.15" />
        </g>
      </svg>
    </button>
  </div>
  <div :class="['overlay', store.state.navOpen ? 'overlayOn' : 'overlayOff']" @click="closeNav">
    <div class="nav-menu"><NavMenu /></div>
  </div>
</template>

<script>
import { useStore } from '@/stores/store'
import NavMenu from '@/components/buttons/nav/NavMenu.vue'

export default {
  components: {
    NavMenu
  },
  setup() {
    const store = useStore()

    return {
      store,
      toggleNav: store.toggleNav,
      closeNav: store.closeNav
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
.nav-opener-button {
  position: fixed;
  top: 0;
  right: 0;
  right: 5.17vw;
  top: 2.81vh;
  z-index: 3;
  transform-origin: top right;
}
.white-toggle .cls-1 {
  fill: white;
}
.nav-opener-icon {
  width: 6.5vh;
  transition: transform 0.3s ease;
  transform-origin: center;
}
.nav-opener-button:active .nav-opener-icon {
  transform: scale(1.1);
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
  z-index: 10;
}
.cls-1 {
  fill: #000;
  stroke-width: 0px;
}
@media only screen and (orientation: landscape) {
  .container {
    display: none;
  }
}
</style>
