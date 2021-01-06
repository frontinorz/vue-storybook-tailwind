import Button from '../components/button/Button'
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Button',
  argTypes: {
    onClick: { action: 'clickHandler' },
    status: {
      control: {
        type: 'select',
        options: ['primary', 'error', 'disabled']
      }
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
  title: 'Primary',
  status: 'primary'
}

export const Error = Template.bind({})

Error.args = {
  title: 'Error',
  status: 'error'
}

export const Disabled = Template.bind({})

Disabled.args = {
  title: 'Disabled',
  status: 'disabled'
}