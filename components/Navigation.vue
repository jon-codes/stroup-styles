<template>
  <div id="navigation" class="xl:max-w-6xl container px-4 mx-auto">
    <div class="xl:mt-20 xl:mb-32 xl:mx-0 flex items-center mx-auto mt-6 mb-12">
      <nuxt-link to="/">
        <img
          src="~/assets/images/logo.webp"
          alt="Stroup Styles logo"
          width="166"
          height="38"
          class="sm:mr-5"
        />
      </nuxt-link>

      <nuxt-link
        to="/#about"
        class="text-primary hover:text-primary-hover sm:block hidden mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
        >About Me</nuxt-link
      >
      <nuxt-link
        to="/#instagram"
        class="text-primary hover:text-primary-hover sm:block hidden mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
        >See Styles</nuxt-link
      >
      <nuxt-link
        to="/#contact"
        class="text-primary hover:text-primary-hover sm:block hidden mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
        >Get Connected</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>
