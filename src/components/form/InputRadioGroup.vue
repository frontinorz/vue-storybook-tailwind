<template>
  <div>
    <InputRadio
      v-for="item in radioList"
      :key="item.id"
      :name="name"
      :model="model"
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
  },
  model: {
    prop: 'model',
    event: 'changeHandler',
  },
};
</script>

<style>
</style>