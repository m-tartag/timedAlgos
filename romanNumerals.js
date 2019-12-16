function convertToRoman(num) {
  const COUNTER = [];
  while (num > 0) {
    if (num >= 1000) {
      num -= 1000;
      COUNTER.push('M');
    }
    if (num >= 900 && num < 1000) {
      num -= 900;
      COUNTER.push('CM');
    }

    if (num >= 500 && num < 1000) {
      num -= 500;
      COUNTER.push('D');
    }
    if (num >= 100 && num < 500) {
      num -= 100;
      COUNTER.push('C');
    }
    if (num >= 90 && num < 100) {
      num -= 90;
      COUNTER.push('XC');
    }

    if (num >= 50 && num < 100) {
      num -= 50;
      COUNTER.push('L');
    }
    if (num >= 40 && num < 50) {
      num -= 40;
      COUNTER.push('XL');
    }
    if (num >= 10 && num < 50) {
      num -= 10;
      COUNTER.push('X');
    }

    if (num == 9) {
      num -= 9;
      COUNTER.push('IX');
    }

    if (num >= 5 && num < 10) {
      num -= 5;
      COUNTER.push('V');
    }

    if (num == 4) {
      num -= 4;
      COUNTER.push('IV');
    }

    if (num >= 1 && num < 5) {
      num -= 1;
      COUNTER.push('I');
    }
  }
  return COUNTER.join('');
}
console.log(convertToRoman(3543));
