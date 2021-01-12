<template>
  <div class="mb-1 last:mb-0">
    <label
      :for="id"
      class="flex items-center"
      :class="classes"
    >
      <input
        type="radio"
        :name="name"
        :id="id"
        :value="value"
        :disabled="disabled"
        :checked="isChecked"
        @change="changeHandler"
        class="appearance-none w-4 h-4 m-0 border 
        border-gray-400 
        checked:bg-blue-400 
        checked:border-blue-400
        disabled:border-gray-300
        rounded-full 
        focus:outline-none transition-colors
        "
      >
      <span class="text-base ml-2">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script>
import vuid from '@/core/utils/Vuid';

export default {
  name: 'V-Radio',
  props: {
    label: {
      type: String,
    },
    // 產生隨機 id
    id: {
      type: String,
      default: () => 'v-radio-' + vuid(),
    },
    name: {
      type: [String, Number],
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: 'on',
    },
    model: [String, Number, Boolean, Object],
    disabled: Boolean,
  },
  model: {
    prop: 'model',
    event: 'changeHandler',
  },
  computed: {
    classes() {
      return {
        'text-gray-600 cursor-pointer': !this.disabled,
        'text-gray-300 cursor-default': this.disabled,
      };
    },
    isChecked() {
      return this.value === this.model;
    },
  },
  methods: {
    changeHandler() {
      if (!this.disabled) {
        this.$emit('changeHandler', this.value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input[type='radio'] {
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='4'/%3e%3c/svg%3e");
  }
}
</style>