// import { defineComponent, h } from 'vue';

// export default defineComponent({
//   name: 'SButton',
//   render() {
//     return h('button', null, 'MyButton')
//   }
// })

import { defineComponent,PropType,toRefs} from 'vue'
import 'uno.css'

export type ISize = 'small' | 'medium' | 'large'
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
  },
  size: {
    type: String as PropType<ISize>,
    default: 'medium'
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  }
}
export default defineComponent({
  name: "SButton",
  props, // 注册属性
  setup(props, {slots}) {
    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm'
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base'
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg'
      }
    }

    // class={`
    //   py-3 
    //   px-4 
    //   font-semibold 
    //   rounded-lg 
    //   shadow-md 
    //   text-white 
    //   bg-${props.color}-500 
    //   hover:bg-${props.color}-700 
    //   border-none 
    //   cursor-pointer 
    //   `}
    //   >

    return () => <button 
      class={`
      py-${ size[props.size].y } 
      px-${ size[props.size].x } 
      ${ props.round ? 'round-full' : 'round-lg' } 
      bg-${props.color}-${ props.plain ? '100' : '500' } 
      hover:bg-${ props.color }-400
      border-${ props.color }-${ props.plain ? '500' : '500' } 
      cursor-pointer 
      border-solid 
      text-${ props.plain ? props.color + '-500' : 'white' } 
      text-${ size[props.size].text } 
      hover:text-white 
      transition duration-300 ease-in-out transform hover:scale-105 
      mx-1
      `}
      >
      { props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : '' }
      { slots.default ? slots.default() : '' }
     </button>
  }
})
