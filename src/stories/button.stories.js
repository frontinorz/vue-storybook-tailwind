import Button from '../components/button/Button'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Basic/Button',
  argTypes: {
    onClick: { action: 'clickHandler' },
    status: {
      control: {
        type: 'select',
        options: ['primary', 'error']
      },
    },
    disabled: {
      type: 'boolean'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" @clickHandler="onClick" />'
})

export const Default = Template.bind({})

Default.args = {
  title: 'Default'
}

export const Primary = Template.bind({})

Primary.args = {
  title: 123456,
  status: 'primary'
}

export const Error = Template.bind({})

Error.args = {
  title: 'Error',
  status: 'error'
}

// export const Error = (args, { argTypes }) => ({
//   components: { Button },
//   props: Object.keys(argTypes),
//   template: '<Button :status="error" @clickHandler="onClick"> Error </Button>'
// })


export const Disabled = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button disabled @clickHandler="onClick"> Disabled </Button>'
})