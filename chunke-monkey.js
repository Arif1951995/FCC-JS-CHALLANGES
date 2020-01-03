function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for(let i = 0; i < arr.length / size; i++ ) {
      
      newArr.push(arr.slice(i * size, (i * size) + size));
      
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d",'e'], 3);


/*
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let len =  Math.ceil(arr.length / size);
  for(let i = 1; i <= len; i++) {
    newArr.push(arr.splice(0, size))
  }
  
   return  newArr
}
 console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 6));
*/
