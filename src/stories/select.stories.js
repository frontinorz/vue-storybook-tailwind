import { action } from '@storybook/addon-actions';
import Select from '../components/form/Select'

export default {
  title: 'Form/Select',
  argTypes: {
    onChange: { action: 'changeHandler' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Select },
  props: Object.keys(argTypes),
  data() {
    return {
      model: 'option 1'
    }
  },
  template: `<Select v-bind="$props" @changeHandler="onChange" v-model="model"/>`
})

export const Basic = Template.bind({})

Basic.args = {
  label: 'Select',
  items: ['select', 'option 1', 'option 2']
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'Select',
  items: ['select', 'option 1', 'option 2'],
  disabled: true
}