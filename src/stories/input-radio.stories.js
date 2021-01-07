import { action } from '@storybook/addon-actions';
import InputRadio from '../components/form/InputRadio'

export default {
  title: 'components/Form/Radio',
  argTypes: {
    onSelect: { action: 'changeHandler' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { InputRadio },
  props: Object.keys(argTypes),
  template: '<InputRadio v-bind="$props" @changeHandler="onSelect"/>'
})

export const Radio = Template.bind({})

Radio.args = {
  label: 'This is a radio',
  name: 'radio',
  value: 'radio1'
}

// const GroupTemplate = (args, { argTypes }) => ({
//   components: { InputRadio },
//   props: Object.keys(argTypes),
//   template: `
//   <div>
//     <InputRadio v-for="n in 5" 
//     :key="n" 
//     :label="'radio' + n"
//     :value="n"
//     :name="'radio'"
//     :disabled="n == 5"
//     @changeHandler="onSelect"/>
//   </div>`
// })

// export const Group = GroupTemplate.bind({})

