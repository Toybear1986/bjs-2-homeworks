function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  max = Math.max(...arr);
  min = Math.min(...arr);
  const initialValue = 0;
  sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  let avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (summElementsWorker(...arr) == 0 || isNaN(summElementsWorker(...arr))) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (summElementsWorker(...arr) == 0 || isNaN(summElementsWorker(...arr))) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value % 2 == 0) {
      sumEvenElement += value;
    } else {
      sumOddElement += value;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (summElementsWorker(...arr) == 0 || isNaN(summElementsWorker(...arr))) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value % 2 == 0) {
      sumEvenElement += value;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const element = arrOfArr[i];
    const result = func(...element);
    if (result > maxWorkerResult) {
      maxWorkerResult = result
    }
  }
  return maxWorkerResult;
}