import vue from '@/vue.vue'
import {mount} from '@vue/test-utils'

describe('vue', function test() {
  it('should render', function test() {
    const wrapper = mount(vue)
    const dataText = wrapper.find('.name').text()
    expect(dataText).to.equal(wrapper.vm.$data.name)
  })
})
