<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const showMobileNav = ref(false);
const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(navbarMenuRef, () => {
  showMobileNav.value = false
}, {
  ignore: [navbarBurgerRef]
})
</script>

<template>
  <nav class="navbar p-2" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </RouterLink>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active' : showMobileNav }"
        @click="showMobileNav = !showMobileNav"
        ref="navbarMenuRef"
      >
        <div class="navbar-end right-nav">
          <RouterLink to="/notes" class="navbar-item"> Notes</RouterLink>
          <RouterLink to="/stats" class="navbar-item"> Stats</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

.router-link-active,
.router-link-exact-active {
  color: #485fc7 !important;
}

a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover {
  background-color: transparent;
}

.right-nav {
  font-size: larger;
  font-weight: bold;
}

.navbar-burger:hover{
  background-color: transparent;
}
</style>
