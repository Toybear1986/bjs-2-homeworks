"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  console.log(d);
  if (d < 0) {
    return arr;
  }
  else if (d == 0) {
    arr.push(-b / (2 * a));
  }
  else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(parseInt(percent))) {
    return false;
  }
  else if (isNaN(parseInt(contribution))) {
    return false;
  }
  else if (isNaN(parseInt(amount))) {
    return false;
  }
  else if (isNaN(parseInt(countMonths))) {
    return false;
  }
  else if (contribution === amount) {
    return 0;
  }
  let credit = amount - contribution;
  let monthlyPercent = (percent / 100) / 12;
  let monthlyMortgage = credit * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
  let totalMorgage = monthlyMortgage * countMonths;
  return parseFloat(totalMorgage.toFixed(2));
}
console.log(calculateTotalMortgage(10, 1000, 20000, 24))