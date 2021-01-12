<template>
  <button
    type="button"
    class="py-1 px-3 text-gray-500 font-bold rounded transition-colors 
    hover:bg-gray-200 
    focus:outline-none 
    disabled:text-gray-200 
    disabled:bg-transparent 
    disabled:cursor-default"
    :class="{
      'text-blue-500  hover:bg-blue-100' : status == 'primary',
      'text-red-500 hover:bg-red-100' : status == 'error',
      'text-gray-400 hover:bg-transparent cursor-default' : status == 'disabled'
    }"
    :disabled="status == 'disabled'"
    @click="$emit('clickHandler')"
  >
    <slot />
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    status: {
      type: String,
    },
  },
};
</script>

<style>
</style>