<template>
  <div class="main-container" @click="store.closeContact">
    <div class="form-box">
      <form action="" method="POST" @click.stop>
        <div class="form-field">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div class="form-field">
          <label for="email">Correo</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div class="form-field">
          <label for="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
        </div>

        <button type="submit" class="submit-container"><FormSubmit class="submit" /></button>
      </form>
      <div class="socials-box" @click.stop>
        <FormSocials class="socials" />
      </div>
    </div>
  </div>
</template>

<script>
import FormSubmit from '@/components/buttons/contact/FormSubmit.vue'
import FormSocials from '@/components/buttons/contact/FormSocials.vue'
import { useStore } from '@/stores/store'

export default {
  components: {
    FormSubmit,
    FormSocials
  },
  setup() {
    const store = useStore()

    return {
      store,
      toggleContact: store.toggleContact,
      closeContact: store.closeContact
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 8vh 5vw 0 5vw;
}

.form-box {
  background-image: url('@/assets/images/contact/movil_contacto_form.svg');
  background-size: contain;
  background-position: center;
  height: 58vh;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-field {
  font-size: min(3.5vw, 2.1vh);
}
form {
  width: 64.5vw;
  max-width: 40vh;
  height: 50vh;
  max-height: 81vw;
  margin: min(10vw, 7vh) 5vw 0 5vw;
  overflow: hidden;
}
label {
  font-family: 'Architects Daughter';
}
label,
input,
textarea {
  font-size: min(3.5vw, 2.1vh);
  padding: 2px 4px;
}
input[type='text'],
input[type='email'],
textarea {
  width: 100%;
  background-color: white;
  color: black;
}
.submit-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.submit {
  width: 55%;
}
.socials-box {
  position: absolute;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 9vw;
  margin-top: calc(min(115vw, 70vh));
}
</style>
