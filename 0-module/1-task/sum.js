function sum(a, b) {
  if (typeof a == 'number' && typeof b == 'number'){
    return a+b
  }
  throw new TypeError('these arguments are not a numbers!');
}



module.exports = sum;
