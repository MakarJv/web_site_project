<template>
  <div class="actionsMenu">
    <div class="dark">
      <ion-icon name="moon-sharp"></ion-icon>
    </div>
    <div class="white">
      <ion-icon name="sunny-outline"></ion-icon>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let dark = document.querySelector('.dark')
    let body = document.querySelector('body')
    let white = document.querySelector('.white')

    dark.onclick = function () {
      body.classList.add('darkMode')
      body.classList.remove('lightTheme')
    }
    white.onclick = function () {
      body.classList.remove('darkMode')
      body.classList.add('lightTheme')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/darkmode';
</style>