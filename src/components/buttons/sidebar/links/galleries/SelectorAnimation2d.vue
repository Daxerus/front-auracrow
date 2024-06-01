<template>
  <svg
    id="Capa_2"
    data-name="Capa 2"
    xmlns="http://www.w3.org/2000/svg"
    :class="{ 'active-route': isActiveRoute }"
    viewBox="0 0 315.66 100.14"
  >
    <g id="Capa_3" data-name="Capa 3">
      <polygon
        id="BLANCO"
        class="cls-2"
        points="74.72 4 304.71 22.13 315.66 100.14 110.69 60.02 107.68 73.02 4 45.66 74.71 30 74.72 4"
      />
      <polygon
        id="NEGRO"
        class="cls-3"
        points="70.72 0 300.71 18.13 311.66 96.14 106.69 56.02 103.68 69.02 0 41.66 70.71 26 70.72 0"
      />
      <text class="cls-1" transform="translate(88.86 30.17) rotate(5.86) scale(.97 1)">
        <tspan x="0" y="0">ANIMACION 2D Y MOTION</tspan>
        <tspan x="125.87" y="27.35">GRAPHICS</tspan>
      </text>
    </g>
  </svg>
</template>
<script>
export default {
  computed: {
    isActiveRoute() {
      return this.$route.path === '/gallery/animacion2d'
    }
  }
}
</script>
<style scoped>
.cls-1 {
  font-family: Anton-Regular, Anton;
  font-size: 22.79px;
}

.cls-1,
.cls-2 {
  fill: #fff;
}

svg:hover .cls-1,
svg:hover .cls-2,
.active-route .cls-1,
.active-route .cls-2 {
  fill: black;
}

.cls-3 {
  fill: #000;
}

svg:hover .cls-3,
.active-route .cls-3 {
  fill: white;
}

.cls-3,
.cls-2 {
  stroke-width: 0px;
}
</style>
