import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ActionButton from '@/components/ActionButton.vue'

describe('ActionButton.vue', () => {
  it('renders the button with default style', () => {
    const wrapper = mount(ActionButton, {
      props: { text: 'Click Me' },
    })
    expect(wrapper.text()).toBe('Click Me')
    expect(wrapper.classes()).toContain('bg-gray-500')
    expect(wrapper.classes()).toContain('hover:bg-gray-700')
  })

  it('renders the button with accent style', () => {
    const wrapper = mount(ActionButton, {
      props: { text: 'Accent Button', buttonStyle: 'accent' },
    })
    expect(wrapper.classes()).toContain('bg-blue-500')
    expect(wrapper.classes()).toContain('hover:bg-blue-700')
  })

  it('renders the button with positive style', () => {
    const wrapper = mount(ActionButton, {
      props: { text: 'Positive Button', buttonStyle: 'positive' },
    })
    expect(wrapper.classes()).toContain('bg-green-500')
    expect(wrapper.classes()).toContain('hover:bg-green-700')
  })

  it('renders the button with negative style', () => {
    const wrapper = mount(ActionButton, {
      props: { text: 'Negative Button', buttonStyle: 'negative' },
    })
    expect(wrapper.classes()).toContain('bg-red-500')
    expect(wrapper.classes()).toContain('hover:bg-red-700')
  })
})
