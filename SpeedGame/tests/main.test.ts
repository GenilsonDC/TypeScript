import { calculateFinalSpeed } from '../src/main';

describe('Calculate Final Speed', () => {
  it('should calcilate final speed when correctly when speed is positive', () => {
    expect(calculateFinalSpeed(60, [0, 30, 0, -45, 0])).toBe(75);
    expect(calculateFinalSpeed(100, [10, 20, -15, 5, 0])).toBe(80);
  });

  it('should return 0 when final speed is less than or equal to 0', () => {
    expect(calculateFinalSpeed(60, [30, 30, 0])).toBe(0);
    expect(calculateFinalSpeed(50, [60, 20, -10])).toBe(0);
  });

  it('should handle empty inclinations array', () => {
    expect(calculateFinalSpeed(50, [])).toBe(50);
  });

  it('should handle negative initial speed', () => {
    expect(calculateFinalSpeed(-30, [5, 10]));
  });

  it('should handle zero initial speed', () => {
    expect(calculateFinalSpeed(0, [0, 0, 0])).toBe(0);
  });
});
