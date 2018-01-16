matrix = [[1, 1, 1, 0],
          [0, 5, 0, 1],
          [2, 1, 3, 10]]

   function matrixSum(array) {

   var x = 0
       for (var f = 0; f < array.length; f++) {

           for (var b = 0; b < array[f].length; b++) {
             x = x + array[f][b]
     }
   }
    return x
   }


   function matrixElementsSum(matrix) {
   for (var i = 0; i < matrix.length; i++) {
     for (var k = 0; k < matrix[i].length; k++) {
         for (var m = 1; m < matrix.length; m++) {
           if (matrix[i][k] === 0) {
         matrix[m][k] = 0 }

   var sum = matrixSum(matrix)
       }
     }
   }


   return sum
   }
