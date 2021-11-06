const demo = require('core/demo/index');

describe('#Demo Testing', () => {
  describe('Add', () => {
    test('1 + 1 should eqaul 2', () => {
      const a = 1;
      const b = 1;
      expect(demo.add(a, b)).toBe(2);
    });
  });
});
