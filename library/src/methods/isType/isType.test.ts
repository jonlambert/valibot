import { describe, expect, test } from 'vitest';
import { number, object, string } from '../../schemas/index.ts';
import { isType } from './isType.ts';
import { email } from '../../validations/index.ts';

describe('isType', () => {
  test('should return true', () => {
    const output1 = isType(string([email()]), 'hello');
    expect(output1).toBe(true);
    const output2 = isType(number(), 123);
    expect(output2).toBe(true);
    const output3 = isType(object({ test: string() }), { test: 'hello' });
    expect(output3).toBe(true);
  });

  test('should return false', () => {
    expect(isType(string(), 123)).toBe(false);
    expect(isType(number(), 'hello')).toBe(false);
    expect(isType(object({ test: string() }), {})).toBe(false);
  });
});
