const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let values = 0;
	for (let i = 0; i<a.length; i++) {
    values = values + a[i];
  }
  return values;
};

const multiply = function(a) {
  let mult = 1;
  for( let i = 0; i<a.length; i++) {
    mult = mult * a[i];
  }
  return mult;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
	return (num * factorial(num -1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
