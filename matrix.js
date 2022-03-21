function matrix (matA, matB) {

    const product = new Array(matA.length).fill(0).map(row => new Array(matB[0].length).fill(0))

    return product.map((row, i) => {
        return row.map((column, j) => {
            return matA[i].reduce((add, element, k) => add + (element * matB[k][j]), 0)
        })
    })

}


   
const matrixB = [[4, 8, 7], 
                 [3, 1, 2]]

const matrixA = [[1, 3],
                 [4, 1], 
                 [0, 2]]

console.log(matrix(matrixB, matrixA))