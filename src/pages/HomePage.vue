<script setup>
import { computed, onMounted } from 'vue';
import { artGalleryService } from '../services/ArtGalleryService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';



const artWorks = computed(() => AppState.artWorks)

onMounted(() => {
  console.log('do i run');
  getPaintings()
}
)


async function getPaintings() {
  try {
    await artGalleryService.getPaintings()
    Pop.success('✅😀')
  } catch (error) {
    console.error(error)
    Pop.toast('❌☹️')
  }
}

</script>

<template  >
  <header>

  </header>
  <main >
    <section>
      <div class="row">
        <div v-for="art in artWorks" :key="art.id" class="col-md-3 p-md-1 p-5">
            <div class="card border-5 border-dark rounded-4 m-md-3 m-1 ">
              <img role="button" class="card-img img-fluid" :src="art.imgUrls"  alt="">
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
  </footer>
</template>

<style scoped lang="scss">

</style>
