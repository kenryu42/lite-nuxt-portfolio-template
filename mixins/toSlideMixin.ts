import Vue from 'vue'

export const toSlideMixin = Vue.extend({
  methods: {
    toSlide(index: number): void {
      this.$store.commit('slide/goto', index)
    },
  },
})
