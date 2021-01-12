import { action } from '@storybook/addon-actions';
import InputRadio from '../components/form/InputRadio'

export default {
  title: 'Form/Radio',
  argTypes: {
    onSelect: { action: 'changeHandler' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { InputRadio },
  props: Object.keys(argTypes),
  template: '<InputRadio v-bind="$props" @changeHandler="onSelect"/>'
})

export const Basic = Template.bind({})

Basic.args = {
  label: 'This is a radio',
  name: 'radio',
  value: 'radio1'
}

export const Checked = Template.bind({})

Checked.args = {
  label: 'This is a radio',
  value: 'selected',
  model: 'selected'
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'This is a radio',
  value: 'radio disabled',
  disabled: true
}

// https://vuetifyjs.com/en/components/selects/#custom-text-and-value

// https://vuematerial.io/components/select

// https://github.com/vuematerial/vue-material/blob/dev/src/components/MdField/MdSelect/MdSelect.vue

// https://rogden.github.io/tailwind-config-viewer/#Shadows

// https://next--storybookjs.netlify.app/official-storybook/?path=/story/@storybook/design-system_forms-select--basic