import { reactive } from 'vue'

const state = reactive({
  contactOpen: false,
  navOpen: false
})

export function useStore() {
  const toggleContact = () => {
    state.contactOpen = !state.contactOpen
    if (state.contactOpen) {
      state.navOpen = false
    }
  }

  const closeContact = () => {
    state.contactOpen = false
  }

  const toggleNav = () => {
    state.navOpen = !state.navOpen
    if (state.navOpen) {
      state.contactOpen = false
    }
  }

  const closeNav = () => {
    state.navOpen = false
  }

  return {
    state,
    toggleContact,
    closeContact,
    toggleNav,
    closeNav
  }
}
