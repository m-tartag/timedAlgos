function destroyer(arr) {
  const ARGS = [...arguments].splice(1);
  return arr.filter(item => !ARGS.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
