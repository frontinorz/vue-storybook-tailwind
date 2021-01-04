<template>
  <div>
    <label
      :for="id"
      class="flex items-center cursor-pointer"
    >
      <input
        type="radio"
        :name="name"
        :id="id"
        class="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-gray-300 focus:outline-none"
      >
      <span class="text-gray-300 text-base ml-2">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
// input {
//   &:checked {
//     background: #fff;
//   }
// }
</style>