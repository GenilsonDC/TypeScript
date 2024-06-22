export function createCheckDigit(membershipId: string): number {
  while (membershipId.length > 1) {
    membershipId = membershipId
      .split('')
      .reduce((acc: number, valor: string) => acc + parseInt(valor, 10), 0)
      .toString();
  }

  return parseInt(membershipId, 10);
}

// console.log(createCheckDigit("55555"));
// console.log(createCheckDigit("122"));
// console.log(createCheckDigit('9998888745477878'));
