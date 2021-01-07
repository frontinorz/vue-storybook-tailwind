<template>
  <div class="text-black text-lg p-5 w-6/12 flex flex-col place-items-center m-auto">
    <h1>
      <!-- <font-awesome-icon icon="shopping-cart" /> -->
    </h1>
    <InputText
      v-model="value"
      v-bind="input"
      @focus.native="focusHandler"
    />
    <div>value:{{ value }}</div>
    <ValidateInputText
      v-model="valueVal"
      v-bind="inputVal"
    />
    <div>valueVal:{{ valueVal }}</div>
    <InputRadio
      v-bind="radio"
      :value="1"
      v-model="radioValue"
      class="mt-4"
    />
    <InputRadio
      v-bind="radio"
      :value="2"
      v-model="radioValue"
    />
    <InputRadio
      v-bind="radio"
      :value="3"
      v-model="radioValue"
    />
    <InputRadioGroup
      :radioList="radioList.data"
      v-model="modelValue"
      class="mt-4"
    />
  </div>
</template>

<script>
import InputText from '@/components/form/InputText';
import ValidateInputText from '@/components/form/vee-validate/InputText';
import InputRadio from '@/components/form/InputRadio';
import InputRadioGroup from '@/components/form/InputRadioGroup';

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
      radio: {
        label: 'Radio',
        name: 'radio2',
      },
      radioValue: 1,
      modelValue: 1,
      radioList: {
        name: 'radio',
        data: [
          {
            label: 'Radio 1',
            value: 1,
          },
          {
            label: 'Radio 2',
            value: 2,
          },
          {
            label: 'Radio 3',
            value: 3,
          },
        ],
      },
    };
  },
  components: {
    InputText,
    ValidateInputText,
    InputRadio,
    InputRadioGroup,
  },
  methods: {
    focusHandler() {
      console.log('Focus!');
    },
  },
};
</script>