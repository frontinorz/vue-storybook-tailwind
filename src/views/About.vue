<template>
  <div class="text-white bg-blue-500 text-lg p-5">
    <h1>This is an about page</h1>
    <InputText
      v-model="value"
      v-bind="input"
    />
    <div>value:{{ value }}</div>
    <ValidateInputText
      v-model="valueVal"
      v-bind="inputVal"
    />
    <div>valueVal:{{ valueVal }}</div>
  </div>
</template>

<script>
import InputText from '@/components/form/InputText';
import ValidateInputText from '@/components/form/vee-validate/InputText';

export default {
  data() {
    return {
      value: '',
      valueVal: '',
      input: {
        label: '帳號',
        placeholder: '請輸入帳號',
        id: 'account',
      },
      inputVal: {
        rules: 'required',
        label: '帳號驗證',
        placeholder: '請輸入帳號',
        id: 'accountVal',
      },
    };
  },
  components: {
    InputText,
    ValidateInputText,
  },
};
</script>