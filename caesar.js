function rot13(str) {
  const CODE = [];

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64) {
      CODE.push(str[i].charCodeAt() - 13);
    } else {
      CODE.push(str[i].charCodeAt());
    }
  }
  console.log(CODE);
  return CODE.map(element => String.fromCharCode(element)).join(' ');
}

// Change the inputs below to test
console.log(rot13('SERR PBQR PNZC'));

// A = 65
// Z = 90
