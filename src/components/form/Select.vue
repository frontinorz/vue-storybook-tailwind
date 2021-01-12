<template>
  <div>
    <label
      :for="id"
      class="py-1 mr-2 text-sm text-gray-500"
    >{{ label }}</label>
    <div
      class="select
        relative inline-block
        pl-2 pr-2 py-1
        rounded
        transition-colors
        "
      :class="classes"
    >
      <div
        class="pr-5"
        @click="showSelect"
        v-click-outside="hideSelect"
      >
        {{ model }}
      </div>
      <transition name="fade-down">
        <ul
          class="absolute 
          left-0 top-full 
          transform -translate-y-0.5
          w-full 
          rounded-b
        bg-gray-200 
          overflow-hidden"
          v-show="isDropDown"
        >
          <li
            v-for="item in listTrimmer"
            :key="item"
            class="py-1 pl-2 pr-2 whitespace-nowrap hover:bg-gray-300"
            @click.prevent="changeHandler(item)"
          >{{ item }}</li>
        </ul>
      </transition>
    </div>
    <select
      :id="id"
      :name="name"
      :model="model"
      disabled
      class="sr-only"
    >
      <option
        v-for="item in items"
        :key="item"
        :value="item"
        :selected="item === model"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
import vuid from '@/core/utils/Vuid';
import ClickOutside from 'vue-click-outside';

export default {
  name: 'V-Select',
  props: {
    label: {
      type: String,
    },
    model: {
      type: [String, Number],
    },
    id: {
      type: String,
      default: () => 'v-select-' + vuid(),
    },
    name: {
      type: [String, Number],
    },
    items: {
      type: [Array],
      default: () => [],
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      isDropDown: false,
    };
  },
  model: {
    prop: 'model',
    event: 'changeHandler',
  },
  mounted() {
    this.popupItem = this.$el;
  },
  methods: {
    changeHandler(val) {
      this.isDropDown = false;
      if (!this.disabled) this.$emit('changeHandler', val);
    },
    showSelect() {
      if (!this.disabled) this.isDropDown = true;
    },
    hideSelect() {
      this.isDropDown = false;
    },
  },
  computed: {
    listTrimmer() {
      return this.items.filter((item) => item != this.model);
    },
    classes() {
      return {
        'bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300': !this
          .disabled,
        'bg-gray-400 text-gray-600 disabled': this.disabled,
      };
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss">
.select {
  &:after,
  &:before {
    content: '';
    width: 2px;
    height: 7px;
    background: #000;
    position: absolute;
    top: 50%;
  }
  &:before {
    right: 7px;
    transform: rotate(40deg) translateY(-50%);
  }
  &:after {
    right: 7px;
    transform: rotate(-40deg) translateY(-50%);
  }

  &.disabled {
    &:after,
    &:before {
      background: #555;
    }
  }
}
</style>