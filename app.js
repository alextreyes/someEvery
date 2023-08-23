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

function hasOddNumber(arr) {
  return arr.some(function (number) {
    if (number % 2 !== 0) {
      return true;
    }
  });
}

function hasZero(numbers) {
  const numStr = numbers.toString();
  return numStr.includes("0");
}

function hasOnlyOddNumbers(arr) {
  return arr.every(function (number) {
    return number % 2 !== 0;
  });
}

function hasNoDups(arr) {
  let a = [];
  return arr.every(function (number) {
    if (a.indexOf(number) !== -1) {
      return false;
    }
    a.push(number);
    return true;
  });
}

function hasCertainKey(arr, key) {
  return arr.every(function (obj) {
    return obj.hasOwnProperty(key);
  });
}

function hasCertainValue(arr, key, value) {
  return arr.every(function (obj) {
    return obj.hasOwnProperty(key) && obj[key] === value;
  });
}
