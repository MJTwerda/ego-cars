import { formatPrice } from "./numbersManagement";

describe('formatPrice function', () => {
  test('formats a whole number correctly', () => {
    const input = 1234;
    const result = formatPrice(input);
    expect(result).toBe('1.234');
  });

  test('formats a number with decimals correctly', () => {
    const input = 1234.56;
    const result = formatPrice(input);
    expect(result).toBe('1.234,56');
  });

  test('formats a number with a single decimal', () => {
    const input = 1234.1;
    const result = formatPrice(input);
    expect(result).toBe('1.234,10');
  });

  test('formats zero correctly', () => {
    const input = 0;
    const result = formatPrice(input);
    expect(result).toBe('0');
  });

  test('formats a large number correctly', () => {
    const input = 1000000000;
    const result = formatPrice(input);
    expect(result).toBe('1.000.000.000');
  });
});
