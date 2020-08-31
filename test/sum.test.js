
/**
 * 组件测试案例
 */

const sum = require('./sum');

test('sum 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
