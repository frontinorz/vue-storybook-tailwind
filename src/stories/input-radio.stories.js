import { action } from '@storybook/addon-actions';
import InputRadio from '../components/form/InputRadio'
import InputRadioGroup from '../components/form/InputRadioGroup'

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

const TemplateGroup = (args, { argTypes }) => ({
  components: { InputRadioGroup },
  props: Object.keys(argTypes),
  data() {
    return {
      model: 2
    }
  },
  template: `
    <InputRadioGroup
      v-bind="$props"
      :radioList="radioList.data"
      @changeHandeler="onSelect"
      v-model="model"
    />
  `
})

const radioList = {
  name: 'radio',
  data: [
    {
      label: 'Radio 1',
      value: 1
    },
    {
      label: 'Radio 2',
      value: 2
    },
    {
      label: 'Radio 3',
      value: 3
    },
    {
      label: 'Radio 4',
      value: 4,
      disabled: true
    }
  ]
}

export const Group = TemplateGroup.bind({})
Group.args = {
  radioList: radioList,
}

export const GroupAlignRow = TemplateGroup.bind({})
GroupAlignRow.args = {
  radioList: radioList,
  row: true
}