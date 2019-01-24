// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const lastElem = chunked[chunked.length - 1];

    if (!lastElem || lastElem.length === size) {
      chunked.push([element]);
    } else {
      lastElem.push(element);
    }
  }

  return chunked;
}

// for (i = 0; i >= array.length; i++) {
//   let chunk = [];
//   let lastElement = chunked[array.length - 1];
//   if (lastElement || lastElement === size) {
//     chunked.push(chunk);
//   } else {
//     chunk.push(array[i]);
//   }
// }
//   let chunkHolder = [];
//   let chunkedArray = [];
//   let pushCounter = 1;
//
//   for (let i = 0; i >= array.length; i++) {
//     if (pushCounter === size || !array[i]) {
//       chunkHolder.push(chunkedArray);
//       chunkedArray = [];
//       pushCounter = 1;
//     }
//
//     chunkedArray.push(i);
//     pushCounter++;
//     i++;
//   }
//
//   return chunkHolder;
// }

module.exports = chunk;
