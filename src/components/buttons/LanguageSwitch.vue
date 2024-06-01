<template>
  <div class="container">
    <button class="language-button">
      <img :src="arrow" class="arrow-icon" />
      <svg
        id="Capa_2"
        data-name="Capa 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 148.24 33.44"
        class="language-switch-icon"
        alt="Botón para cambiar de idioma"
      >
        <g id="Capa_2-2" data-name="Capa 2">
          <g id="negro">
            <polygon class="cls-1" points="1 6.39 140.64 1.03 147.02 32.43 1 31.67 1 6.39" />
          </g>
          <g id="blanco">
            <g>
              <path
                class="cls-3"
                d="M130.29,23.28c-2.05-.71-4.47-1.72-6.53-3.04-.71-.45-1.35-1-1.92-1.59-.37,2.94.06,5.98.28,7.22.82.46,1.7.82,2.64,1.06,1.45-.53,3.73-1.62,5.54-3.65h0Z"
              />
              <path
                class="cls-3"
                d="M131.44,7.91c1.67,2,3.85,5.12,3.4,9.51-.2,1.97-1.4,3.72-2.29,5.07,1.53.41,2.76.65,3.32.74,1.48-1.85,2.37-4.19,2.37-6.74,0-3.9-2.07-7.3-5.16-9.2-.16.05-.77.26-1.64.63h0Z"
              />
              <path
                class="cls-3"
                d="M130.24,8.47c-2.31,1.16-5.44,3.17-7.22,6.25-.38.65-.65,1.39-.85,2.17.56.65,1.2,1.29,1.97,1.85,2.11,1.56,4.78,2.64,7.08,3.35.92-1.37,2.11-3.2,2.29-5.32.34-3.95-1.61-6.53-3.27-8.3h0Z"
              />
              <path
                class="cls-3"
                d="M131.63,23.73c-1.68,1.96-3.65,3.08-4.58,3.54.13,0,.26.02.39.02,2.75,0,5.26-1.04,7.16-2.73-.47-.11-1.57-.39-2.97-.83Z"
              />
              <path
                class="cls-3"
                d="M129.14,5.82c.4.25.95.67,1.54,1.25.6-.23,1.04-.37,1.23-.42-.87-.4-1.8-.68-2.77-.83h0Z"
              />
              <path
                class="cls-3"
                d="M120.64,17.27c-1.51-2-2.44-4.19-2.91-5.52-.7,1.43-1.1,3.03-1.1,4.72,0,3.34,1.51,6.32,3.89,8.3-.28-1.65-.56-4.52.12-7.5Z"
              />
              <path
                class="cls-3"
                d="M121.16,15.53c.2-.55.43-1.1.72-1.64,1.71-3.21,5.1-5.2,7.49-6.27-1.21-1.05-2.39-1.65-2.95-1.9-3,.28-5.64,1.8-7.42,4.03.08.64.51,3.22,2.17,5.78h-.01Z"
              />
            </g>
          </g>
          <text class="cls-2" transform="translate(14.28 23.23) scale(1.72 1)">
            <tspan x="0" y="0">Español</tspan>
          </text>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
import arrow from '@/assets/buttons/common/idiomas_boton_flecha.svg'

export default {
  data() {
    return {
      arrow
    }
  }
}
</script>

<style scoped>
.container {
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  z-index: 3;
  left: -13.5vh;
}
.language-button {
  margin-top: 1.56vh;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  color: white;
  width: 20vh;
}
.language-button:hover {
  transform: translateX(13.2vh);
}
.language-switch-icon {
  width: 30vh;
}
.arrow-icon {
  position: absolute;
  width: 1.55vh;
  padding-top: 0.7vh;
  transform: translateX(12vh);
}
.cls-1 {
  fill: #000;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}

.cls-2 {
  font-family: 'Anton';
  font-size: 13px;
}

.cls-2,
.cls-3 {
  fill: #fff;
}

.cls-3 {
  stroke-width: 0px;
}
@media only screen and (orientation: landscape) {
  .container {
    display: none;
  }
}
</style>
