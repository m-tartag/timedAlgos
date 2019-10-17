function sumAll(arr) {
  const NEWARR = arr.sort();
  let FINAL = 0;
  console.log(NEWARR);

  for (let i = NEWARR[0]; i <= NEWARR[1]; i++) {
    FINAL += i;
  }
  console.log(FINAL);
}

sumAll([1, 4]);

// 4.17
