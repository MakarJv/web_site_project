<template>
  <div class="app">
    <TheLoader/>
    <NavBar/>
    <DarkMode/>
    <RouterView/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import DarkMode from './components/DarkMode'

export default {
  name: 'App',
  data: () => ({}),
  mounted() {
    window.onload = function () {
      document.body.classList.add('preloader')
      window.setTimeout(function () {
        document.body.classList.add('preloader')
        document.body.classList.remove('preloader')
      }, 500)
    }
  },
  components: {
    NavBar, DarkMode
  }
}
</script>

<style>
@import "assets/style.css";
</style>
