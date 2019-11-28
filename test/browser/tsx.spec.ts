import tsx from '@/tsx'
import {mount} from '@vue/test-utils'

describe('tsx', function test() {
  it('should render', function test() {
    const wrapper = mount(tsx)
    const dataText = wrapper.find('.name').text()
    expect(dataText).to.equal('Jane Doe')
  })
})
