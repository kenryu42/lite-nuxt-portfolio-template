<template>
  <div class="px-6 py-8">
    <h1 class="text-2xl font-bold text-center my-12 dark:text-gray-300">
      SKILLSET
    </h1>
    <div>
      <div class="flex flex-col md:flex-row justify-center">
        <!-- Coding Skillset -->
        <div class="mx-auto my-4 md:m-16" data-aos="fade-up">
          <div class="flex my-4">
            <CodeIcon />
            <h1
              class="ml-4 font-bold text-2xl text-gray-900 dark:text-gray-500"
            >
              Coding
            </h1>
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">C</h2>
            <Skill3 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">C++</h2>
            <Skill2 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Python</h2>
            <Skill2 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Javascript</h2>
            <Skill1 />
          </div>
        </div>
        <!-- Frontend Skillset -->
        <div class="mx-auto my-4 md:m-16" data-aos="fade-up">
          <div class="flex my-4">
            <LaptopIcon />
            <h1
              class="ml-4 font-bold text-2xl text-gray-900 dark:text-gray-500"
            >
              Frontend
            </h1>
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Vue.js</h2>
            <Skill3 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Nuxt.js</h2>
            <Skill3 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Tailwindcss</h2>
            <Skill3 />
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center">
        <!-- Backend Skillset -->
        <div class="mx-auto my-4 md:m-16" data-aos="fade-up">
          <div class="flex my-4">
            <LaptopIcon />
            <h1
              class="ml-4 font-bold text-2xl text-gray-900 dark:text-gray-500"
            >
              Backend
            </h1>
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">GCP</h2>
            <Skill2 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Flask</h2>
            <Skill2 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Firebase</h2>
            <Skill2 />
          </div>
        </div>
        <!-- Dev Tools Skillset -->
        <div class="mx-auto my-4 md:m-16" data-aos="fade-up">
          <div class="flex my-4">
            <DevIcon />
            <h1
              class="ml-4 font-bold text-2xl text-gray-900 dark:text-gray-500"
            >
              Dev Tools
            </h1>
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Git</h2>
            <Skill3 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Vim</h2>
            <Skill3 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">iTerm</h2>
            <Skill3 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">Jupyter</h2>
            <Skill2 />
          </div>
          <div class="flex my-4">
            <h2 class="text-xl text-gray-500 font-semibold">VS Code</h2>
            <Skill2 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Title {
  title: string
}
export default Vue.extend({
  head(): Title {
    return {
      title: 'Skill - Your_Name',
    }
  },
})
</script>

<style></style>
