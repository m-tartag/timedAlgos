function diffArray(arr1, arr2) {
  const COMBO = arr1.concat(arr2).sort();
  const ANSWER = [];
  for (let i = 0; i < COMBO.length; i++) {
    if (arr1.indexOf(COMBO[i]) === -1) {
      ANSWER.push(COMBO[i]);
    } else if (arr2.indexOf(COMBO[i]) === -1) {
      ANSWER.push(COMBO[i]);
    }
  }

  return ANSWER;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// 5.28 minutes
