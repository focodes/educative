function sum_submatrices(array) {
    var sum = 0;
    for(index of array){
      for(subindex of index){
        sum += subindex;
      }
    }
    return sum
}
var inputs = [[2, 4], [11], [3, 5, 7]];

console.log(sum_submatrices(inputs))