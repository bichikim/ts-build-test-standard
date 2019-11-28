import web from '@/web'

describe('browser/test', function test() {
  it('should be a foo', function test() {
    const result = web()
    expect(result.foo).to.equal('foo')
  })
})
