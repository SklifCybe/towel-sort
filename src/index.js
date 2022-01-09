const towelSort = (matrix) => {
  if (!matrix) return [];
  let resultMatrix = [];

  matrix.forEach((arr, id) => {
    if (id % 2) {
      arr = arr.reverse();
    }
    resultMatrix = [...resultMatrix, ...arr];
  })

  return resultMatrix
};

module.exports = towelSort;
