import {
  createLocalVue,
  mount,
  shallowMount,
  ThisTypedMountOptions,
  VueClass,
  Wrapper,
} from '@vue/test-utils'
import Index from '@/index.vue'


describe('vue', function test() {
  it('should render', function test() {
    const wrapper = mount(Index)
    const dataText = wrapper.find('.text').text()
    expect(dataText).to.equal('foo')
  })
})
