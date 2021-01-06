<template>
  <div
    id="cta"
    class="container grid max-w-3xl grid-flow-col col-gap-20 px-4 mx-auto"
  >
    <div id="cta-main" class="max-w-sm">
      <h1 class="text-secondary font-display mb-8 text-5xl">
        Simply beautiful
      </h1>
      <p class="text-body mb-8">
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
        <input type="text" name="name" class="hidden" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="border-light text-body placeholder-light hover:border-primary focus:border-primary focus:outline-none w-full px-3 py-1 mb-1 italic transition duration-200 ease-in-out border-2 rounded"
        />
        <textarea
          placeholder="Tell me about yourself..."
          name="message"
          class="border-light text-body placeholder-light hover:border-primary focus:border-primary focus:outline-none w-full px-3 py-1 mb-6 italic transition duration-200 ease-in-out border-2 rounded resize-none"
          rows="2"
        />
        <div class="grid grid-flow-col">
          <button
            type="submit"
            class="bg-primary hover:bg-primary-hover focus:outline-none px-6 py-2 italic text-white transition duration-200 ease-in-out rounded"
          >
            Get connected!
          </button>

          <a
            class="focus:outline-none hover:text-primary text-accent flex items-center justify-center px-6 py-2 italic transition duration-200 ease-in-out"
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
    <!-- <div id="cta-images" class="absolute top-0 right-0 flex">
        <img src="~/assets/images/cta-1.png" alt="" height="768" width="276" />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="268.102"
            height="255.527"
            viewBox="0 0 268.102 255.527"
          >
            <defs>
              <style>
                .a {
                  fill: none;
                  stroke: #fff;
                  stroke-width: 10px;
                }
              </style>
            </defs>
            <path
              class="a"
              d="M-2131.992,275.105c-7.77,0-14.768-.045-20.8-.132-41.3-.6-53.692-3.258-55.756-3.783a86.632,86.632,0,0,1-20.935-6.625,85.061,85.061,0,0,1-43.443-45.644,84.118,84.118,0,0,1-.216-62.438c.174.333.353.673.508.961a85.787,85.787,0,0,0,75.815,45.163,86.482,86.482,0,0,0,40.2-9.979,86.118,86.118,0,0,0,18.071-12.718c2.156-1.266,10.469-6.912,27.061-26.461,36.414,46.023,81.968,117.152,83.889,120.157-.047.014-.468.024-1.222.042C-2047.436,274.086-2094.747,275.105-2131.992,275.105Zm-141.152-118.622-.006-.012a83.971,83.971,0,0,1-5.627-64.339,84.751,84.751,0,0,1,41.612-49.775,86.723,86.723,0,0,1,17.436-6.907,109.885,109.885,0,0,1,28.2-5.316c7.2-.369,15.364-.556,24.257-.556,59.815,0,138.643,8.468,139.431,8.554-.015.04-.133.211-.339.515-7.659,11.274-47.127,69.125-72.08,100.987-3.88,4.957-7.659,9.605-11.233,13.815-3.027-3.826-6-7.491-8.851-10.894a85.192,85.192,0,0,0-36.637-32.241,85.622,85.622,0,0,0-36.193-7.991,86.469,86.469,0,0,0-45.559,12.965,85.007,85.007,0,0,0-32.247,36.186c-.761,1.621-1.488,3.3-2.159,5Z"
              transform="translate(2287.93 -24.578)"
            />
          </svg>
          <img
            src="~/assets/images/cta-2.png"
            width="307"
            height="768"
            alt=""
          />
        </div>
      </div> -->
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
