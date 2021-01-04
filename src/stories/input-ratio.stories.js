import InputRatio from '../components/form/InputRatio'

export default {
  title: 'components/Form/Radio'
}

const Template = (args, { argTypes }) => ({
  components: { InputRatio },
  props: Object.keys(argTypes),
  template: '<InputRatio v-bind="$props" />'
})

export const Ratio = Template.bind({})

Ratio.args = {
  label: 'This is a ratio',
  id: 'ratio 1',
  name: 'ratio'
}