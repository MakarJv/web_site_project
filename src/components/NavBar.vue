<template>
  <nav>
    <div class="openMenu">
      <ion-icon name="menu-outline"></ion-icon>
    </div>
    <div class="group">
      <div class="closeMenu">
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <div class="menu">
        <ul>
          <li><a href="/">
            <ion-icon name="home-outline"></ion-icon>
            Home</a></li>
          <li><a href="#">
            <ion-icon name="camera-outline"></ion-icon>
            Photos</a></li>
          <li><a href="#">
            <ion-icon name="chatbubble-outline"></ion-icon>
            Messages</a></li>
          <li><a href="#">
            <ion-icon name="settings-outline"></ion-icon>
            Setting</a></li>
        </ul>
      </div>
    </div>
    <div class="dropdown">
      <ion-icon name="caret-down-outline"></ion-icon>
      <div class="dropdownMenu">
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </div>
    <div class="maskContent"></div>
    <div class="maskDropdown"></div>
  </nav>
</template>

<script>
export default {
  mounted() {
    let openMenu = document.querySelector('.openMenu')
    let group = document.querySelector('.group')
    let closeMenu = document.querySelector('.closeMenu')
    let maskContent = document.querySelector('.maskContent')
    let dropdown = document.querySelector('.dropdown')
    let maskDropdown = document.querySelector('.maskDropdown')

    openMenu.onclick = function () {
      group.classList.add('open')
      openMenu.classList.add('open')
      maskContent.classList.add('open')
    }
    closeMenu.onclick = function () {
      group.classList.remove('open')
      openMenu.classList.remove('open')
      maskContent.classList.remove('open')
    }
    maskContent.onclick = function () {
      group.classList.remove('open')
      openMenu.classList.remove('open')
      maskContent.classList.remove('open')
    }
    dropdown.onclick = function () {
      dropdown.classList.toggle('openDropdown')
      maskDropdown.classList.toggle('openDropdown')
    }
    maskDropdown.onclick = function () {
      dropdown.classList.remove('openDropdown')
      maskDropdown.classList.remove('openDropdown')
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/navbar";
</style>