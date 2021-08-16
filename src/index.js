// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return []
    }

    let joinArr = [];

    for (let i = 0; i < matrix.length; i++) {
        if ((i + 1) % 2 === 0) {
            let x = matrix[i].reverse();
            for (let j = 0; j < matrix[i].length; j++) {
                joinArr.push(matrix[i][j])
            }
        } else {
            for (let j = 0; j < matrix[i].length; j++) {
                joinArr.push(matrix[i][j])
            }
        }
    }
    return joinArr;
};