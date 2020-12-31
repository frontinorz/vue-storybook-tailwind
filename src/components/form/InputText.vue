<template>
  <div>
    <label
      :for="id"
      class="mr-2 text-gray-700"
    >{{ label }}</label>
    <input
      type="text"
      :name="id"
      :id="id"
      :placeholder="placeholder"
      @input="inputHandler"
      class="px-2 py-1 bg-gray-200 text-gray-900 rounded focus:bg-gray-300 outline-none transition-colors"
      :class="{'error': errors.length}"
    >
    <ul
      v-if="errors"
      class="text-red-500 text-sm"
    >
      <li
        v-for="error in errors"
        :key="error"
      > {{ error }} </li>
    </ul>
  </div>
</template>

<script>
/* 
  Vee-validate 是否要納在 component 裡面?
  或是要再建一個專門做驗證的 component ?
*/
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
      required: true,
    },
    errors: {
      type: Array,
      required: false,
      default: () => [],
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
};
</script>

<style lang="scss" scoped>
.error {
  @apply bg-red-200 #{!important};
}
</style>