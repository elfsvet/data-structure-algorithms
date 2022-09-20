const mergeSortedArray = (array1, array2) => {
  console.log(array1, array2);
  const merged = [];
  console.log(merged);
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  //   check the input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      merged.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      merged.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return merged;
};

console.log(
  mergeSortedArray([0, 4, 6, 7, 9, 33], [1, 3, 5, 6, 8, 9, 32, 33, 36])
);

const mergeSortedArray2 = (array1,array2) => {
    
}
