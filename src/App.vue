<script setup>
import HomePage from './pages/HomePage.vue'
import NextButton from './components/NextButton.vue';

</script>

<template>
  <header>
       <NextButton />
  </header>
  <main>
    <HomePage />
  </main>
  <footer>

  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
