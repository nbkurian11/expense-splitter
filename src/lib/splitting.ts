/**
 * Split an amount (integer cents) equally between members.
 * Leftover cents go one each to the first members, in the order given.
 */
export function splitEqually(amountCents: number, memberIds: string[]): Record<string, number> {
  // 1. validation: three if-statements that throw
  if (memberIds.length === 0) {
    throw new Error("Cannot split between zero members");
  }

  if (!Number.isInteger(amountCents) || amountCents < 0) {
    throw new Error("Amount must be a non-negative integer");
  }

  if (new Set(memberIds).size !== memberIds.length){
    throw new Error("There are duplicate member IDs");

  }

  const n = memberIds.length;
  const base = Math.floor(amountCents / n);
  const remainder = amountCents % n;

  const result: Record<string, number> = {};
  // 2. loop over memberIds with an index i
  //    result[memberIds[i]] = base, plus 1 if i < remainder

  return result;
}