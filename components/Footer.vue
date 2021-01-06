<template>
  <div id="footer" class="container max-w-5xl px-4 mx-auto mb-12">
    <div class="flex justify-center mb-4">
      <a href="https://www.instagram.com/stroupstyles/" target="_none">
        <img
          src="~/assets/images/instagram.webp"
          alt="Instagram logo"
          height="48"
          width="48"
        />
      </a>
    </div>

    <p class="text-body text-center">© StroupStyles {{ currentYear }}.</p>
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
