import { formatDate } from '../src/main';

describe('formatDate', () => {
  it('should be the date format accepted by the API "YYYYMMDD" of "MM/DD/YYYY"', () => {
    expect(formatDate('12/31/2014')).toBe('20141231');
    expect(formatDate('7/28/2024')).toBe('20240728');
    expect(formatDate('1/5/2017')).toBe('20170105');
  });
  it('should throw an error for invalid date format', () => {
    expect(() => formatDate('12312014')).toThrow(
      'invalid date format! \n Please use MM/DD/YYYY'
    );
    expect(() => formatDate('12-31-2014')).toThrow(
      'invalid date format! \n Please use MM/DD/YYYY'
    );
    expect(() => formatDate('')).toThrow(
      'invalid date format! \n Please use MM/DD/YYYY'
    );
  });

  it('should handle months and days with leading zeros', () => {
    expect(formatDate('01/01/2020')).toBe('20200101');
    expect(formatDate('11/11/2011')).toBe('20111111');
  });
});
