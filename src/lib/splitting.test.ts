import { splitEqually } from '@/lib/splitting';

describe('splitEqually', () => {
  it('gives leftover cents to the first members: 1000 across 3 is 334, 333, 333', () => {
    expect(splitEqually(1000, ['a', 'b', 'c'])).toEqual({ a: 334, b: 333, c: 333 });
  });

  it('gives a single leftover cent to the first member: 1 across 2 is 1, 0', () => {
    expect(splitEqually(1, ['a', 'b'])).toEqual({ a: 1, b: 0 });
  });

  it('splits an evenly divisible amount into equal shares', () => {
    expect(splitEqually(900, ['a', 'b', 'c'])).toEqual({ a: 300, b: 300, c: 300 });
  });

  it('gives the whole amount to a single member', () => {
    expect(splitEqually(1234, ['a'])).toEqual({ a: 1234 });
  });

  it('throws a clear error when there are no members', () => {
    expect(() => splitEqually(1000, [])).toThrow(/member/i);
  });

  it.each([-1, -1000])('throws for a negative amount (%p)', (amount) => {
    expect(() => splitEqually(amount, ['a', 'b'])).toThrow(/amount/i);
  });

  it.each([10.5, 0.1, NaN, Infinity])('throws for a non-integer amount (%p)', (amount) => {
    expect(() => splitEqually(amount, ['a', 'b'])).toThrow(/amount/i);
  });

  describe('shares always sum exactly to the total', () => {
    const amounts = [1, 2, 99, 100, 1000, 1001, 12345, 999999];
    const memberCounts = [1, 2, 3, 4, 5, 6, 7];

    const cases = amounts.flatMap((amount) =>
      memberCounts.map((count) => [amount, count] as const),
    );

    it.each(cases)('%p cents across %p members', (amount, count) => {
      const memberIds = Array.from({ length: count }, (_, i) => `m${i}`);
      const shares = splitEqually(amount, memberIds);
      const sum = Object.values(shares).reduce((total, share) => total + share, 0);
      expect(sum).toBe(amount);
    });
  });
});
