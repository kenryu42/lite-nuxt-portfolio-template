<template>
  <nuxt-link
    to="/project"
    aria-label="Project 2"
    title="Project 2"
    @click.native="toSlide(2)"
  >
    <div
      class="bg-cover bg-center h-96 max-w-6xl md:h-128 mx-5 my-5 md:mx-20 lg:mx-auto"
      data-aos="fade-up"
      style="background-image: url(/project2.jpg)"
    >
      <div class="absolute bg-white opacity-90 p-2 mt-8">
        <span class="font-bold md:text-2xl">Project 2 </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { toSlideMixin } from '~/mixins/toSlideMixin'

export default {
  mixins: [toSlideMixin],
}
</script

<style></style>
