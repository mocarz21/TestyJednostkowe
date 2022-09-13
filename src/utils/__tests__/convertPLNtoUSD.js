import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6a')).toBeNaN();
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD('-543c')).toBeNaN();
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should return error when input is not a text or number', () => {
    expect(convertPLNToUSD([])).toBe(Error);
    expect(convertPLNToUSD(null)).toBe(Error);
    expect(convertPLNToUSD({})).toBe(Error);
   // expect(convertPLNToUSD(function() {})).toBe(Error); // czemu ten zaps klamrowy po function
  });

  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  })
  it('should return 0 when input is lower than 0',()=>{
    expect(convertPLNToUSD(-1)).toBe(0);
    expect(convertPLNToUSD(-10)).toBe(0);
    expect(convertPLNToUSD(-25)).toBe(0);
  });
});