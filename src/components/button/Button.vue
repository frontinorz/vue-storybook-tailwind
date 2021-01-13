<template>
  <button
    type="button"
    class="py-1 px-3 
    font-bold 
    rounded 
    transition-colors 
    hover:bg-opacity-50
    focus:outline-none  
    disabled:cursor-default"
    :class="classes"
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
  computed: {
    classes() {
      return {
        'text-gray-500 hover:bg-gray-200 ':
          this.status != 'primary' && this.status != 'error' && !this.disabled,
        'text-blue-500 hover:bg-blue-100':
          this.status == 'primary' && !this.disabled,
        'text-red-500 hover:bg-red-100':
          this.status == 'error' && !this.disabled,
        'text-gray-300':
          this.status != 'primary' && this.status != 'error' && this.disabled,
        'text-blue-300': this.status == 'primary' && this.disabled,
        'text-red-300': this.status == 'error' && this.disabled,
      };
    },
  },
};
</script>