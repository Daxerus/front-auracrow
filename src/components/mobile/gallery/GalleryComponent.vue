<template>
  <div class="gallery-container">
    <div class="row">
      <div class="column" v-for="(column, index) in columns" :key="index">
        <div v-for="entry in column" :key="entry.id" class="gallery-item">
          <img
            :src="entry.thumbnail_path"
            :alt="entry.name"
            class="thumbnail"
            @click="handleClick(entry)"
          />
        </div>
      </div>
    </div>

    <div v-if="selectedEntry" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="selectedEntry.path" :alt="selectedEntry.name" class="full-image" />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchEntries } from '@/services/dashboard'

export default {
  data() {
    return {
      entries: [],
      loading: true,
      selectedEntry: null,
      columns: [[], []]
    }
  },
  async created() {
    await this.loadEntries()
  },
  watch: {
    '$route.params.section': 'loadEntries'
  },
  methods: {
    async loadEntries() {
      this.entries = ''
      this.loading = true
      const response = await fetchEntries(this.$route.params.section)
      this.entries = response.data
      this.distributeEntries()
      this.loading = false
    },
    distributeEntries() {
      this.columns = [[], []]
      this.entries.forEach((entry, index) => {
        this.columns[index % 2].push(entry)
      })
    },
    handleClick(entry) {
      this.selectedEntry = entry
    },
    closeModal() {
      this.selectedEntry = null
    }
  }
}
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 30vw;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.gallery-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  width: 100%;
}

.column {
  flex: 50%;
  max-width: 50%;
  padding: 0 0.6vh;
}

.column img {
  margin-top: 0.6vh;
  vertical-align: middle;
  width: 100%;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
}

.full-image {
  position: relative;
  z-index: 2;
  max-width: 65vw;
  max-height: 90vh;
}

@media only screen and (orientation: portrait) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
  .full-image {
    position: relative;
    top: -2vh;
    max-width: 85vw;
    max-height: 85vh;
  }
}
</style>
