import InputText from '../components/form/InputText'
import InputTextValidate from '../components/form/vee-validate/InputText'

export default {
  title: 'Form/Input'
}

const Template = (args, { argTypes }) => ({
  components: { InputText },
  props: Object.keys(argTypes),
  template: '<InputText v-bind="$props" />'
})

export const Text = Template.bind({})

Text.args = {
  label: '帳號',
  id: 'account'
}

const TemplateDisabled = (args, { argTypes }) => ({
  components: { InputText },
  props: Object.keys(argTypes),
  template: '<InputText v-bind="$props" disabled/>'
})

export const Disabled = TemplateDisabled.bind({})

Disabled.args = {
  label: '帳號',
}

export const TextInvalid = Template.bind({})
TextInvalid.args = {
  label: '帳號',
  placeholder: '請輸入帳號',
  id: 'account',
  errors: ['Error message 1', 'Error message 2']
}

const TemplateValidate = (args, { argTypes }) => ({
  components: { InputTextValidate },
  props: Object.keys(argTypes),
  template: '<InputTextValidate v-bind="$props" />'
})

export const TextValidate = TemplateValidate.bind({})

TextValidate.args = {
  rules: 'required',
  label: '帳號',
  placeholder: '請輸入帳號',
  id: 'account'
}