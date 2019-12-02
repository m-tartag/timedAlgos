function translatePigLatin(str) {
  if (['a', 'e', 'i', 'o', 'u'].indexOf(str.charAt(0)) != -1) {
    return (str += 'way');
  }
  return str.replace(/([^aeiou]*)([aeiou]\w*)/, '$2$1ay');
}

console.log(translatePigLatin('consonant'));
