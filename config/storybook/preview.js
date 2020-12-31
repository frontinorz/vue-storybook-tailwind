import { themes } from '@storybook/theming';

import '../../src/assets/tailwind.css'
import '../../src/scss/base/base.scss'

import '../../src/utils/vee-validate.js';

export const parameters = {
  // 設定 Parameter action 的排列方式
  actions: { argTypesRegex: "^on[A-Z].*" },
  // 設定 Docs 視覺主題
  docs: {
    theme: themes.dark,
  },
  canvas: {
    theme: themes.light,
  }
}
