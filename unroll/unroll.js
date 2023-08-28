const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function unroll(squareArray) {
  const unrolled = [];

  //...square.shift()
  while (squareArray.length > 0) {
    unrolled.push(...squareArray.shift());

    for (const row of squareArray) {
      unrolled.push(row.pop());
    }

    if (squareArray.length > 0) {
      unrolled.push(...squareArray.pop().reverse());
    }

    //...square.map(a => a.shift()).reverse()
    for (let i = squareArray.length - 1; i >= 0; i--) {
      unrolled.push(squareArray[i].shift());
    }
  }

  return unrolled;
}

const unrolledArray = unroll(square);

console.log(unrolledArray);

module.exports = unroll;
