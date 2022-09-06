test('测试jest.fn()调用', () => {
  let mockFn = jest.fn()
  let result = mockFn(1, 2, 3)

  // 断言 mockFn 的执行后返回 undefined
  expect(result).toBeUndefined()
  // 断言 mockFn 被调用
  expect(mockFn).toBeCalled()
  // 断言 mockFn 被调用了一次
  expect(mockFn).toBeCalledOnce()
  // 断言 mockFn 传入的参数为 1,2,3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3)
})
