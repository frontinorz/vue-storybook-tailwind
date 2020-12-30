<template>
  <div class="p-5 rounded bg-green-300 text-white text-center text-lg shadow-md">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>