<template>
  <div class="container">
    <div id="navigation">
      <div class="flex">
        <img src="~/assets/images/logo.png" alt="Stroup Styles logo" />
        <a href="" class="italic">About Me</a>
        <a href="" class="italic">See Styles</a>
        <a href="" class="italic">Get Connected</a>
      </div>
    </div>
    <div id="cta">
      <div id="cta-main">
        <h1>Simply beautiful</h1>
        <p>
          My name is Kathryn Stroup, and my passion is helping others see the
          beauty I see, making their dreams a reality, and being a part of the
          excitement in the small in-betweens. I'd love to get to know you and
          your story. If you have any questions just message me below:
        </p>
        <form action="submit">
          <input type="email" placeholder="Email" />
          <input type="textarea" placeholder="Tell me about yourself..." />
          <input type="submit" value="Get connected!" />
        </form>
      </div>
      <div id="cta-images"></div>
    </div>
    <div id="about">
      <h1>Behind the Chair</h1>
      <p>
        I have always found joy in caring for others; in the little daily
        things, making a meal for friends, or simply talking about life. Bridal
        hair has become a passion of mine because I love to care for and be a
        sense of calm for brides on one of the biggest days of their life. The
        quiet moments leading up to their wedding, hearing about their love
        story, and making them feel their most beautiful before marrying the
        love of their life is why I love what I do!
      </p>
    </div>
    <div id="testimonials">
      <div id="testimonials-images"></div>
      <div id="testimonials-main">
        <h2>brides</h2>
        <h1>Abigail Krause</h1>
        <p>
          "Thank <b class="uppercase">you</b> so much for everything you did to
          help make the day perfect!"
        </p>
        <a href="">See more styles →</a>
      </div>
    </div>
    <div id="contact">
      <h1>Let't Talk</h1>
      <form action="submit">
        <input type="email" placeholder="Email" />
        <input type="textarea" placeholder="Tell me about yourself ..." />
        <input type="submit" value="Get connected!" />
      </form>
    </div>
    <div id="instagram">
      <h1>Shop the Look</h1>
      <h2>on instagram</h2>
      <div id="instagram-feed"></div>
    </div>
    <div id="footer"><p>© StroupStyles 2020.</p></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
