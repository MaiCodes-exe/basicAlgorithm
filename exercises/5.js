// Return Largest Numbers in Arrays

// First attempt
// function largestOfFour(arr) {
//   let results = [];
//   for (let i = 0 ; i < arr.length ; i++){
// const currentArray = arr[i].sort().reverse();
// results.push(currentArray[0])
//   }
// console.log(results)
//   return results;
  

// }


function largestOfFour(arr) {

  var arrNew = [];

  for(var i = 0; i < arr.length; i++){
    arrNew.push(arr[i].sort(function(a, b){
      return b-a;
    })[0]);
  }

  return arrNew;

 }
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
