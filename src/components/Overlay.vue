<template>
  <transition name="fade">
    <div
      v-if="value"
      class="
      fixed left-0 top-0
      w-screen h-screen 
      bg-gray-800 bg-opacity-40
      z-40"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'v-overlay',
  props: {
    value: Boolean,
  },
};
</script>
