<template>
  <div id="cta" class="xl:max-w-6xl xl:py-0 container px-4 py-8 mx-auto">
    <div id="cta-main" class="xl:mb-40 xl:ml-24 max-w-sm mx-auto">
      <h1
        class="text-secondary xl:text-left font-display mb-8 text-5xl text-center"
      >
        Simply beautiful
      </h1>
      <p class="text-body xl:text-left mb-8 text-center">
        My name is Kathryn Stroup, and my passion is helping others see the
        beauty I see, making their dreams a reality, and being a part of the
        excitement in the small in-betweens. I'd love to get to know you and
        your story. If you have any questions just message me below:
      </p>
      <form
        name="contact"
        method="POST"
        action="/success"
        netlify-honeypot="name"
        data-netlify="true"
      >
        <input
          type="text"
          name="name"
          class="hidden"
          aria-label="This field is for spam filtering and should be left empty."
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          aria-label="Email"
          class="border-light text-body placeholder-light hover:border-primary focus:border-primary focus:outline-none w-full px-3 py-1 mb-1 italic transition duration-200 ease-in-out border-2 rounded"
        />
        <textarea
          name="message"
          required
          placeholder="Tell me about yourself..."
          aria-label="Message"
          class="border-light text-body placeholder-light hover:border-primary focus:border-primary focus:outline-none w-full px-3 py-1 mb-6 italic transition duration-200 ease-in-out border-2 rounded resize-none"
          rows="2"
        />
        <div class="xl:grid xl:grid-flow-col">
          <button
            type="submit"
            class="bg-primary xl:mb-0 hover:bg-primary-hover focus:outline-none w-full px-6 py-2 mb-2 italic text-white transition duration-200 ease-in-out rounded"
          >
            Get connected!
          </button>

          <a
            class="focus:outline-none hover:text-primary text-accent flex items-center justify-center w-full px-6 py-2 italic transition duration-200 ease-in-out"
            href="#instagram"
          >
            <span class="mr-2"> See more styles</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.054"
              height="15.675"
              viewBox="0 0 15.054 15.675"
              class="stroke-current"
            >
              <g transform="translate(0.75 1.061)">
                <path
                  class="svg-arrow-line"
                  d="M7.5,18H21.054"
                  transform="translate(-7.5 -11.223)"
                />
                <path
                  class="svg-arrow-head"
                  d="M18,7.5l6.777,6.777L18,21.054"
                  transform="translate(-11.223 -7.5)"
                />
              </g>
            </svg>
          </a>
        </div>
      </form>
    </div>
    <div
      id="cta-images"
      class="xl:block xl:absolute xl:top-0 xl:right-0 xl:mr-12 hidden"
    >
      <img
        src="~/assets/images/cta.webp"
        width="599"
        height="770"
        alt="Stylized photo of hair design with logo"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.svg-arrow-head,
.svg-arrow-line {
  fill: none !important;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5px;
}
</style>
