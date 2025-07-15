function generateOddSeries(x) {
  let result = [];
  for (let i = 0; i < x; i++) {
    result.push(2 * i + 1);
  }
  return result;
}
console.log(generateOddSeries(4));
