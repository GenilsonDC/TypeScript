import { createCheckDigit } from '../src/main';

describe('createCheckDigit', () => {
  it('should return 7 for membershipId "55555"', () => {
    expect(createCheckDigit('55555')).toBe(7);
  });

  it('should return 5 for membershipId "122"', () => {
    expect(createCheckDigit('122')).toBe(5);
  });

  it('should return 0 for membershipId "0"', () => {
    expect(createCheckDigit('0')).toBe(0);
  });
});
