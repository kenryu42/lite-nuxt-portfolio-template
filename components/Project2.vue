<template>
  <section class="bg-gray-100">
    <div class="bg-white dark:bg-darkmode">
      <div class="">
        <div
          class="mx-5 md:mx-20 h-64 md:h-128 bg-cover bg-center"
          style="background-image: url('/project2.jpg')"
        ></div>
      </div>

      <div class="py-12 px-6 max-w-xl mx-auto">
        <h2
          class="text-2xl text-gray-900 dark:text-gray-300 font-bold md:text-3xl"
        >
          LOREM
          <span class="text-green-400">IPSUM</span>
        </h2>
        <p class="mt-4 text-gray-900 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          tincidunt arcu. Suspendisse sed luctus. <br /><br />
          Frontend: Nuxt.js, Tailwindcss <br />
          Backend: Flask API, Google Cloud Platform
        </p>

        <div class="flex mt-8 justify-around">
          <a
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            class="flex bg-gray-900 dark:bg-gray-800 text-gray-100 px-5 py-3 font-semibold rounded hover:bg-gray-800 dark:hover:bg-gray-700"
            >Demo<ExternalLink class="ml-1 mt-1"
          /></a>
          <a href="/" rel="noopener norferrer" target="_blank"
            ><GithubLogo
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
