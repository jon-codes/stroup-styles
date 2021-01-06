<template>
  <div id="navigation" class="container max-w-5xl px-4 mx-auto">
    <div class="flex items-center mt-10 mb-32">
      <nuxt-link to="/">
        <img
          src="~/assets/images/logo.png"
          alt="Stroup Styles logo"
          class="mr-5"
        />
      </nuxt-link>
      <nuxt-link
        to="/#about"
        class="text-primary hover:text-primary-hover mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
        >About Me</nuxt-link
      >
      <nuxt-link
        to="/#instagram"
        class="text-primary hover:text-primary-hover mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
        >See Styles</nuxt-link
      >
      <nuxt-link
        to="/#contact"
        class="text-primary hover:text-primary-hover mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
        >Get Connected</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
