import InputRatio from '../components/form/InputRatio'

export default {
  title: 'components/Form/Radio'
}

const Template = (args, { argTypes }) => ({
  components: { InputRatio },
  props: Object.keys(argTypes),
  template: '<InputRatio v-bind="$props" />'
})

export const Radio = Template.bind({})

Radio.args = {
  label: 'This is a radio',
  id: 'radio 1',
  name: 'radio'
}