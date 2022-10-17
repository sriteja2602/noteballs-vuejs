<script setup>
import Navbar from "./components/Layout/Navbar.vue";
import Footer from "./components/Layout/Footer.vue";
</script>

<template>
  <Navbar/>
  <main>
    <RouterView />
  </main>
  <Footer/>
</template>

<style>
@import 'bulma/css/bulma.min.css'

</style>
