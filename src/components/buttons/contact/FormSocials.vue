<template>
  <div class="main-container">
    <div class="buttons-box">
      <a href="https://www.linkedin.com/in/veronica-val/" target="_blank" class="social-button">
        <img src="/src/assets/images/contact/icons/redes_boton_linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://www.artstation.com/aura_crow" target="_blank" class="social-button">
        <img src="/src/assets/images/contact/icons/redes_boton_artstation.svg" alt="ArtStation" />
      </a>
      <a href="https://www.instagram.com/aura_crow/" target="_blank" class="social-button">
        <img src="/src/assets/images/contact/icons/redes_boton_instagram.svg" alt="Instagram" />
      </a>
      <a href="https://x.com/Aura_Crow" target="_blank" class="social-button">
        <img src="/src/assets/images/contact/icons/redes_boton_twitter.svg" alt="Twitter" />
      </a>
      <a href="mailto:veronica.val.visiedo@gmail.com" class="social-button">
        <img src="/src/assets/images/contact/icons/redes_boton_gmail.svg" alt="Gmail" />
      </a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.main-container {
  position: relative;
  height: 12vh;
  background-image: url('/src/assets/images/contact/movil_contacto_redes.svg');
  background-position: center;
  background-size: contain;
}
.buttons-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 75%;
  max-width: 38vh;
}
.social-button {
  width: min(6vh, 10vw);
  margin: 0 min(2vw, 1vh);
  display: flex; /* To make the anchor element behave like a block element */
  align-items: center; /* Center the image vertically */
  justify-content: center; /* Center the image horizontally */
}
.social-button img {
  max-width: 100%;
  height: auto;
}
</style>
