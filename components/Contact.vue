<template>
  <div id="contact" class="bg-primary container max-w-full px-4 py-24">
    <h1 class="font-display mb-8 text-5xl text-center text-white">
      Let's Talk
    </h1>

    <form
      name="contact-2"
      method="POST"
      action="/success"
      netlify-honeypot="name"
      data-netlify="true"
      class="max-w-lg mx-auto text-center"
    >
      <input type="text" name="name" class="hidden" />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        class="hover:border-light bg-primary focus:border-light focus:outline-none w-full px-3 py-1 mb-1 text-lg italic text-white placeholder-white transition duration-200 ease-in-out border-2 border-white rounded"
      />
      <textarea
        placeholder="Tell me about yourself..."
        name="message"
        class="hover:border-light bg-primary focus:border-light focus:outline-none w-full px-3 py-1 mb-6 text-lg italic text-white placeholder-white transition duration-200 ease-in-out border-2 border-white rounded resize-none"
        rows="2"
        required
      />
      <button
        type="submit"
        class="bg-accent hover:bg-accent-hover focus:outline-none px-6 py-2 italic text-white transition duration-200 ease-in-out rounded"
      >
        Get connected!
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
