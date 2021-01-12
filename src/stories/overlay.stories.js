import Overlay from '../components/Overlay'
import Button from '../components/button/Button'

export default {
  title: 'Basic/Overlay',
}

const Template = (args, { argTypes }) => ({
  components: { Overlay, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      overlay: false
    }
  },
  methods: {
    toggleHandeler() {
      this.overlay = !this.overlay
    },
    closeHandelr() {
      this.overlay = false
    }
  },
  template: `
  <div>
    <Button @clickHandler="toggleHandeler" :status="'primary'"> Show overlay </Button>
    <Overlay :value="overlay" class="flex flex-col content-center items-center">
      <p class="text-white mx-auto"> Slot content in overlay component. </p>
      <Button @clickHandler="closeHandelr"> Close overlay </Button>
    </Overlay>
  </div>
  `
})

export const Default = Template.bind({})