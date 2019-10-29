function sumFibs(num) {
  const BANK = [1, 1];

  for (let i = 0; i <= num; i++) {
    const FIB = BANK[i] + BANK[i + 1];
    if (FIB <= num) {
      BANK.push(FIB);
    } else {
      break;
    }
  }

  return BANK.filter(item => item % 2 !== 0).reduce((a, b) => a + b);
}

console.log(sumFibs(10));

// 6.15 mins
