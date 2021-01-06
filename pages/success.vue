<template>
  <div class="flex flex-col justify-between h-screen">
    <div id="content" class="mb-auto">
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

      <div
        id="message"
        class="container grid max-w-3xl grid-flow-col col-gap-20 px-4 mx-auto"
      >
        <div id="cta-main" class="max-w-sm">
          <h1 class="text-secondary font-display mb-8 text-5xl">
            Message sent!
          </h1>
          <p class="text-body mb-8">
            Great to hear from you! Your message was delivered to me and I will
            be in touch shortly.
          </p>
          <nuxt-link
            to="/"
            class="bg-primary hover:bg-primary-hover focus:outline-none px-6 py-3 italic text-white transition duration-200 ease-in-out rounded"
          >
            Back to home
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id="footer" class="container max-w-5xl px-4 mx-auto mb-12">
      <div class="flex justify-center mb-4">
        <a href="https://www.instagram.com/stroupstyles/" target="_none">
          <img
            src="~/assets/images/instagram.png"
            alt=""
            height="48"
            width="48"
          />
        </a>
      </div>

      <p class="text-body text-center">© StroupStyles {{ currentYear }}.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
