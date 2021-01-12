<template>
  <button
    type="button"
    class="py-1 px-3 
    text-gray-500 font-bold 
    rounded 
    transition-colors 
    hover:bg-gray-200 
    focus:outline-none 
    disabled:text-gray-200 
    disabled:bg-transparent 
    disabled:cursor-default"
    :class="{
      'text-blue-500  hover:bg-blue-100' : status == 'primary' && !disabled,
      'text-red-500 hover:bg-red-100' : status == 'error' && !disabled,
      'text-blue-300' : status == 'primary' && disabled,
      'text-red-300' : status == 'error' && disabled
    }"
    :disabled="disabled"
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
    disabled: Boolean,
  },
};
</script>