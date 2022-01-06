module.exports = function reverse (n) {
  let number = String((Math.abs(n)));
  let result = "";
  for (let i = 0; i < number.length; i++) {
    result = number[i] + result;
  }
  return Number(Math.abs(result));
}


