import InputRadioGroup from '../components/form/InputRadioGroup'

export default {
  title: 'components/Form/Radio',
  argTypes: {
    onSelect: { action: 'changeHandler' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { InputRadioGroup },
  props: Object.keys(argTypes),
  data() {
    return {
      model: 1
    }
  },
  template: `
  <InputRadioGroup 
    :radioList="radioList.data"
    @changeHandler="onSelect" 
    v-model="model"
  />`
})

export const Group = Template.bind({})

Group.args = {
  radioList: {
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
}
