<template>
  <svg
    id="Capa_2"
    data-name="Capa 2"
    xmlns="http://www.w3.org/2000/svg"
    :class="{ 'active-route': isActiveRoute }"
    viewBox="0 0 320.18 94.84"
  >
    <g id="Capa_5" data-name="Capa 5">
      <polygon
        id="BLANCO"
        class="cls-2"
        points="259.69 34.21 30.98 4 4 78.01 212.84 81.5 213.07 94.84 320.18 89.7 254.29 59.65 259.69 34.21"
      />
      <polygon
        id="NEGRO"
        class="cls-3"
        points="255.69 30.21 26.98 0 0 74.01 208.84 77.5 209.07 90.84 316.18 85.7 250.29 55.65 255.69 30.21"
      />
      <text class="cls-1" transform="translate(54.87 50.59) rotate(4.61) scale(.97 1)">
        <tspan x="0" y="0">DISEÑO GRAFICO Y UI</tspan>
      </text>
    </g>
  </svg>
</template>
<script>
export default {
  computed: {
    isActiveRoute() {
      return this.$route.path === '/gallery/design'
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
