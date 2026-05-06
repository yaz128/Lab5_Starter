// sum.test.js

import { sum } from '../code-to-unit-test/sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(4);
});

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});