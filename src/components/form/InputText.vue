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
      class="px-2 py-1 bg-gray-200 text-gray-900 rounded focus:bg-gray-300 outline-none transition-colors"
    >
  </div>
</template>

<script>
/* 
  Vee-validate 是否要納在 component 裡面?
  或是要再建一個專門做驗證的 component ?
*/
export default {
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>