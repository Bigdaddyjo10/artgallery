<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { artGalleryService } from '../services/ArtGalleryService.js';

const route = useRoute()
const activeArt = computed(() => AppState.activeArt)

onMounted(() => {
  getArtDetails()
})

async function getArtDetails(){
try {
  const artId = route.params.artId
  await artGalleryService.getArtById(artId)
} catch (error) {
  console.log(error);
}
}


</script>


<template>
<div v-if="activeArt">
<section>{{ activeArt.description }}</section>
<section><img :src="activeArt.imgUrls" alt=""></section>
</div>
</template>


<style lang="scss" scoped>

</style>
