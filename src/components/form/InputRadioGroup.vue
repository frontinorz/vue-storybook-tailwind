<template>
  <div :class="groupClasses">
    <InputRadio
      v-for="item in radioList"
      :key="item.id"
      :name="name"
      :model="model"
      :class="radioClasses"
      v-bind="item"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import InputRadio from '@/components/form/InputRadio';
import vuid from '@/core/utils/Vuid';

export default {
  components: {
    InputRadio,
  },
  props: {
    model: [String, Number, Boolean, Object],
    radioList: [Array],
    name: {
      type: [String, Number],
      default: () => 'v-radioName-' + vuid(),
    },
    column: {
      type: Boolean,
      default: true,
    },
    row: Boolean,
  },
  model: {
    prop: 'model',
    event: 'changeHandler',
  },
  computed: {
    groupClasses() {
      return {
        'flex items-center': this.row,
      };
    },
    radioClasses() {
      return {
        'mr-2 last:mr-0': this.row,
        'mb-1 last:mb-0': this.column && !this.row,
      };
    },
  },
};
</script>

<style>
</style>