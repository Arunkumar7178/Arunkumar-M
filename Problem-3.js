function oddConditionalSeries(x) {
  let result = [];
  const limit = x % 2 === 0 ? x - 1 : x;
  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }
  return result;
}
console.log(oddConditionalSeries(6));
