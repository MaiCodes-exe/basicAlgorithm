// Where do I Belong
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}