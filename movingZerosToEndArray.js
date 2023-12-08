//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  //Create a loop to go through each item in the array
  for (i = arr.length - 1; i >= 0; i--){
    //if the array element is 0
    if (arr[i] === 0) {
      // remove the 0 using ____ and insert it at the end using splice
      arr.push(arr.splice(i, 1)[0]); // arr.splice removes 1 item in the i index position, returns an array with one item in it, hence why you need to put the [0] in.
    }
  }
  return arr;
}

//NOTE - need to loop negatively from the end to the start, as if you go positively, you will miss indexes as they are moved to the end.
