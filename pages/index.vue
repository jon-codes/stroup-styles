<template>
  <div>
    <div id="navigation" class="container max-w-5xl px-4 mx-auto">
      <div class="flex items-center mt-10 mb-32">
        <img
          src="~/assets/images/logo.png"
          alt="Stroup Styles logo"
          class="mr-5"
        />
        <a
          href="#about"
          class="text-primary hover:text-primary-hover mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
          >About Me</a
        >
        <a
          href="#instagram"
          class="text-primary hover:text-primary-hover mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
          >See Styles</a
        >
        <a
          href="#contact"
          class="text-primary hover:text-primary-hover mr-5 italic font-semibold tracking-normal transition duration-200 ease-in-out"
          >Get Connected</a
        >
      </div>
    </div>

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
        <form name="contact" method="POST" data-netlify="true">
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
              type="sumbit"
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
                style="
                  fill: transparent;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 1.5px;
                "
              >
                <g transform="translate(0.75 1.061)">
                  <path
                    d="M7.5,18H21.054"
                    transform="translate(-7.5 -11.223)"
                  />
                  <path
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
    <div id="about" class="container max-w-lg px-4 mx-auto mt-20">
      <img
        src="~/assets/images/about.png"
        alt=""
        height="392px"
        width="489px"
        class="mx-auto mb-10"
      />
      <h1 class="text-secondary mb-1 text-5xl text-center">Behind the Chair</h1>
      <p class="text-body max-w-lg mx-auto mb-2 leading-tight text-center">
        I have always found joy in caring for others; in the little daily
        things, making a meal for friends, or simply talking about life. Bridal
        hair has become a passion of mine because I love to care for and be a
        sense of calm for brides on one of the biggest days of their life. The
        quiet moments leading up to their wedding, hearing about their love
        story, and making them feel their most beautiful before marrying the
        love of their life is why I love what I do!
      </p>
      <div class="flex flex-row-reverse mb-20">
        <Signature class="-mr-10" />
      </div>
    </div>
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
              style="
                fill: transparent;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 1.5px;
              "
            >
              <g transform="translate(0.75 1.061)">
                <path d="M7.5,18H21.054" transform="translate(-7.5 -11.223)" />
                <path
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
    <div id="contact" class="bg-primary container max-w-full px-4 py-24">
      <h1 class="font-display mb-8 text-5xl text-center text-white">
        Let's Talk
      </h1>

      <form class="max-w-lg mx-auto text-center">
        <input
          type="email"
          placeholder="Email"
          class="hover:border-light bg-primary focus:border-light focus:outline-none w-full px-3 py-1 mb-1 text-lg italic text-white placeholder-white transition duration-200 ease-in-out border-2 border-white rounded"
        />
        <textarea
          placeholder="Tell me about yourself..."
          class="hover:border-light bg-primary focus:border-light focus:outline-none w-full px-3 py-1 mb-6 text-lg italic text-white placeholder-white transition duration-200 ease-in-out border-2 border-white rounded resize-none"
          rows="2"
        />
        <button
          class="bg-accent hover:bg-accent-hover focus:outline-none px-6 py-2 italic text-white transition duration-200 ease-in-out rounded"
        >
          Get connected!
        </button>
      </form>
    </div>
    <div id="instagram" class="container px-4 mx-auto mt-20 mb-32">
      <h1 class="text-secondary text-5xl text-center">Shop the Look</h1>
      <h2 class="font-display -mb-7 -mt-3 text-3xl text-center">
        on instagram
      </h2>
      <div class="bg-light w-48 h-6 mx-auto mb-20"></div>
      <div id="instagram-feed">
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          src="//lightwidget.com/widgets/7b4c7b2982d25805af62b63cd73721b8.html"
          scrolling="no"
          allowtransparency="true"
          class="lightwidget-widget"
          style="width: 100%; border: 0; overflow: hidden"
        ></iframe>
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
export default {
  computed: {
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    },
  },
};
</script>

<style>
html {
  @apply font-body;
  scroll-behavior: smooth;
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
