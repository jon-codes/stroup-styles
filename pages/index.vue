<template>
  <div>
    <Navigation />
    <CallToAction />
    <About />
    <Testimonials />
    <Contact />
    <Instagram />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.lightwidget.com/widgets/lightwidget.js",
        },
      ],
    };
  },
};
</script>

<style>
html {
  @apply font-body;
  scroll-behavior: smooth;
}
</style>
