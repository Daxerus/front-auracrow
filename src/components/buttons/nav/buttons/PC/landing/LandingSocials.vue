<template>
  <div class="main-container">
    <a href="https://www.linkedin.com/in/veronica-val/" target="_blank" class="social-button">
      <img src="/src/assets/images/contact/icons/pc_botones_redes_linkedinR.svg" alt="LinkedIn" />
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
</template>
<script></script>
<style scoped>
.main-container {
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  gap: 1vh;
}
img {
  width: 100%;
}
a {
  transition: transform 0.3s ease;
}
a:hover {
  transform: scale(1.2) translateY(-20%) rotate(-10deg);
}
</style>
