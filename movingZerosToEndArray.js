//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  //Create a loop to go through each item in the array
  for (i = 0; i < arr.length-1; i++){
    //if the array element is 0
    if (arr[i] === 0) {
      // remove the 0 using ____ and insert it at the end using splice
      arr.push(arr.splice(i, 1)[0]); //Not quite sure why the [0] is required, but it is. No reason it's needed in literature on splice or push.
    }
  }
  return arr;
}
