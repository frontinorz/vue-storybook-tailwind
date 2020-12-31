<template>
  <ValidationProvider
    :rules="rules"
    v-slot="{ errors }"
  >
    <PureInputText
      :id="id"
      :label="label"
      :placeholder="placeholder"
      :errors="errors"
      v-model="value"
    />
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import PureInputText from '@/components/form/InputText';
export default {
  name: 'ValidateInput',
  components: {
    ValidationProvider,
    PureInputText,
  },
  props: {
    rules: {
      required: true,
    },
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
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    inputHandler(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>