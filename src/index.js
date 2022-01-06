module.exports = function reverse (n) {
    let result = "";
    for (let i = 0; i < n.length; i++) {
      result = n[i] + result;
    }
    return Number(result);
}


