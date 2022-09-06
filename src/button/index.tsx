// import { defineComponent, h } from 'vue';

// export default defineComponent({
//   name: 'SButton',
//   render() {
//     return h('button', null, 'MyButton')
//   }
// })

import { defineComponent,PropType,toRefs} from 'vue'
import 'uno.css'

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type IICon = '' | 'search' | 'edit' | 'check' | 'message' | 'star-off' | 'delete' | 'add' | 'share'
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue' // 设定默认颜色
  },
  icon: {
    type: String as PropType<IICon>,
    default: ''
  }
}
export default defineComponent({
  name: "SButton",
  props, // 注册属性
  setup(props, {slots}) {
    return () => <button 
      class={`
      py-3 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer 
      `}
        >
        { props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : '' }
        { slots.default ? slots.default() : '' }
     </button>
  }
})
