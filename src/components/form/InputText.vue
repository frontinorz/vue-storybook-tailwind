<template>
  <div :class="alingClasses">
    <label
      :for="id"
      class="py-1 mr-2 text-sm text-gray-500"
    >{{ label }}</label>
    <div>
      <input
        type="text"
        :name="id"
        :id="id"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="inputHandler"
        class="px-2 py-1 text-base text-gray-800 rounded border border-transparent 
        transition-colors focus:outline-none"
        :class="inputClasses"
      >
      <transition name="fade-down">
        <ul
          v-if="errors.length"
          class="text-red-500 text-sm mt-1"
        >
          <li
            v-for="error in errors"
            :key="error"
          > {{ error }} </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import vuid from '@/core/utils/Vuid';

export default {
  name: 'PureInputText',
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    id: {
      type: String,
      default: () => 'v-text-' + vuid(),
    },
    errors: {
      type: Array,
      required: false,
      default: () => [],
    },
    horizontal: {
      type: Boolean,
    },
    vertical: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    inputHandler(e) {
      this.$emit('input', e.target.value);
    },
  },
  computed: {
    inputClasses() {
      return {
        'bg-gray-200 focus:bg-gray-300': !this.errors.length,
        'bg-red-200 focus:bg-gray-300 border-red-400': this.errors.length,
        'bg-gray-400': this.disabled,
      };
    },
    alingClasses() {
      return {
        'flex items-start': this.horizontal,
        'flex flex-row': this.vertical,
      };
    },
  },
};
</script>
