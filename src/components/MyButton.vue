<template>
  <button
    class="px-2 py-3 m-3 text-white font-bold  bg-green-800 rounded  cursor-pointer hover:bg-green-700"
    @click="onClick"
  >
    <!-- @slot default inner button content -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

