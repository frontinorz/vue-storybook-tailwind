import InputText from '../components/form/InputText'

export default {
  title: 'components/Form'
}

const Template = (args, { argTypes }) => ({
  components: { InputText },
  props: Object.keys(argTypes),
  template: '<InputText v-bind="$props" />'
})

export const Text = Template.bind({})

Text.args = {
  label: '帳號',
  placeholder: '請輸入帳號',
  id: 'account'
}