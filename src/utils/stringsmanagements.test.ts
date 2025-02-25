import { stripHtmlTags } from '@/utils/stringsManagement';

describe('stripHtmlTags function', () => {
  test('removes HTML tags from a string', () => {
    const input = '<p>This is <b>bold</b> and <i>italic</i></p>';
    const result = stripHtmlTags(input);
    expect(result).toBe('This is bold and italic');
  });

  test('removes empty HTML tags', () => {
    const input = '<div></div>';
    const result = stripHtmlTags(input);
    expect(result).toBe('');
  });

  test('returns the same string if there are no HTML tags', () => {
    const input = 'This is a plain text';
    const result = stripHtmlTags(input);
    expect(result).toBe('This is a plain text');
  });

  test('trims the input string', () => {
    const input = '   <p>Some text with spaces</p>   ';
    const result = stripHtmlTags(input);
    expect(result).toBe('Some text with spaces');
  });

  test('returns an empty string for an empty input', () => {
    const input = '';
    const result = stripHtmlTags(input);
    expect(result).toBe('');
  });
});
