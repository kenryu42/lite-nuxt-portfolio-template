<template>
  <nav
    class="sticky top-0 z-20 border-b-8 border-gray-900 bg-gradient-to-r from-green-400 to-blue-500"
  >
    <div
      class="max-w-xl px-4 py-2 mx-auto lg:py-3 md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <h1 class="ml-2 text-xl font-bold tracking-widest text-gray-900">
          <a class="hover:text-gray-700" title="Your_Name" href="/"
            >YOUR_NAME</a
          >
        </h1>
        <button
          class="lg:hidden"
          aria-label="Dark mode"
          title="Dark mode"
          @click="switchToggle"
        >
          <On v-show="dark" />
          <Off v-show="!dark" />
        </button>

        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <button
              aria-label="Dark mode"
              title="Dark mode"
              @click="switchToggle"
            >
              <On v-show="dark" />
              <Off v-show="!dark" />
            </button>
          </li>
          <li>
            <nuxt-link
              to="/"
              aria-label="Home"
              title="Home"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/about"
              aria-label="About"
              title="About"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >About</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/timeline"
              aria-label="Timeline"
              title="Timeline"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >Timeline</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/skill"
              aria-label="Skill"
              title="Skill"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >Skill</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/project"
              aria-label="Project"
              title="Project"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              @click.native="gotoSlide(1)"
              >Project</nuxt-link
            >
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            :class="
              isMenuOpen
                ? 'hamburger hamburger--minus is-active'
                : 'hamburger hamburger--minus'
            "
			aria-label="Menu"
			title="Menu"
            type="button"
            @click="activeHamburger"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div
        v-show="isMenuOpen"
        class="animate__animated animate__flipInY h-screen"
      >
        <ul class="lg:hidden text-center text-lg">
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              to="/"
              aria-label="Home"
              title="Home"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >Home</nuxt-link
            >
          </li>
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              to="/about"
              aria-label="About"
              title="About"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >About</nuxt-link
            >
          </li>
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              to="/timeline"
              aria-label="Timeline"
              title="Timeline"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >Timeline</nuxt-link
            >
          </li>
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              to="/skill"
              aria-label="Skill"
              title="Skill"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              >Skill</nuxt-link
            >
          </li>
          <li class="m-12" @click="activeHamburger">
            <nuxt-link
              to="/project"
              aria-label="Project"
              title="Project"
              class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-700"
              @click.native="gotoSlide(1)"
              >Project</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  isMenuOpen: boolean
  dark: boolean
}

export default Vue.extend({
  data(): Data {
    return {
      isMenuOpen: false,
      dark: false,
    }
  },
  mounted() {
    this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    this.darkMode(this.dark)
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.dark = e.matches
        this.darkMode(this.dark)
      })
  },
  methods: {
    activeHamburger(): void {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        document.body.className = 'non-scroll top-0'
      } else {
        document.body.className = ''
      }
    },
    gotoSlide(index: number): void {
      this.$store.commit('slide/goto', index)
    },
    switchToggle(): void {
      this.dark = !this.dark
      this.darkMode(this.dark)
    },
    darkMode(dark: boolean): void {
      dark
        ? document.querySelector('html')!.classList.add('dark')
        : document.querySelector('html')!.classList.remove('dark')
    },
  },
})
</script>
<style>
button:focus {
  outline: none;
}
.non-scroll {
  overflow: hidden;
}
</style>
