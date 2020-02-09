function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, char) {
  let result = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === char) {
      result++;
    }
  }
  return result;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4