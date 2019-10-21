function whatIsInAName(collection, source) {
  const KEYS = Object.keys(source);
  // console.log(KEYS);

  for (let i = 0; i < KEYS.length; i++) {
    collection = collection.filter(item => item[KEYS[i]] === source[KEYS[i]]);
    console.log(collection);
  }
  return collection;
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
);

// 8.12 minutes
