<template>
  <div
    id="message"
    class="container grid max-w-sm grid-flow-col col-gap-20 px-4 mx-auto mb-32 text-center"
  >
    <div id="cta-main" class="max-w-sm">
      <h1 class="text-secondary font-display mb-8 text-5xl">I'm sorry!</h1>
      <p class="text-body mb-8">{{ error.message }}.</p>
      <nuxt-link
        to="/"
        class="bg-primary hover:bg-primary-hover focus:outline-none px-6 py-3 italic text-white transition duration-200 ease-in-out rounded"
      >
        Back to home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: { error: { type: Object, required: true } },
};
</script>
