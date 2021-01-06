<template>
  <div id="testimonials" class="container max-w-5xl px-4 mx-auto mb-32">
    <div
      id="testimonials-main"
      class="grid grid-flow-col grid-cols-12 col-gap-10"
    >
      <div
        id="testimonials-arrow-left"
        class="text-accent hover:text-primary self-center col-span-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.503"
          height="23.619"
          viewBox="0 0 13.503 23.619"
          class="transition duration-200 ease-in-out cursor-pointer fill-current"
        >
          <path
            d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
            transform="translate(-11.251 -6.194)"
          />
        </svg>
      </div>
      <div id="testimonials-main-left" class="col-span-6">
        <img src="~/assets/images/bride-1.png" height="380" width="380" />
      </div>
      <div id="testimonials-main-right" class="self-center col-span-5">
        <h2 class="font-display -mb-7 ml-20 text-3xl">brides</h2>
        <div class="bg-accent w-32 h-6 mb-4 ml-10"></div>
        <h1 class="text-secondary text-5xl">Abigail Krause</h1>
        <p>
          "Thank <b class="text-body italic uppercase">you</b> so much for
          everything you did to help make the day perfect!"
        </p>
        <a
          class="focus:outline-none hover:text-primary text-accent flex items-center justify-center float-right px-6 py-2 italic transition duration-200 ease-in-out"
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
      <div
        id="testimonials-arrow-right"
        class="text-accent hover:text-primary self-center col-span-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.503"
          height="23.616"
          viewBox="0 0 13.503 23.616"
          class="transition duration-200 ease-in-out cursor-pointer fill-current"
        >
          <path
            d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
            transform="translate(-11.246 -6.196)"
          />
        </svg>
      </div>
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
