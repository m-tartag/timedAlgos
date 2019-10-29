function convertHTML(str) {
  // '&': '&amp;'
  // '<': '&lt;'
  // '>': '&gt;'
  // '"': '&quot;'
  // "'": '&apos;'

  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&apos;');

  return str;
}

console.log(convertHTML('Dolce & Gabbana'));

// 4.32 mins
