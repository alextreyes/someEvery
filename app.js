const numbers = [1, 2, 3, 4, 5];

function mySome(arr, func) {
  for (let i of arr) {
    if (func([i], i, arr)) return true;
  }
  return false;
}

function myEvery(arr, func) {
  for (let i of arr) {
    if (!func([i], i, arr)) {
      return false;
    }
  }
  return true;
}
