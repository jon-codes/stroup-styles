<template>
  <div class="flex flex-col justify-between h-screen">
    <div id="content" class="mb-auto">
      <Navigation />
      <ErrorMessage :error="error" />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  props: { error: { type: Object, required: true } },
  layout: "error",
};
</script>
