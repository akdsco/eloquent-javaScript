function min() {
  let result = Infinity;
  let args = [...arguments];
  
  args.forEach(arg => {
    arg < result ? result = arg : null;
  });

  return result;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10