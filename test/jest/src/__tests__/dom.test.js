const { generateDiv } = require('../dom')
require('../jsdom-config')
describe('Dom 测试', () => {

  test('测试 dom 操作', () => {
    generateDiv()
    expect(document.getElementsByClassName('c1').length).toBe(1)
  })
})
