/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.*/

function solution(number){
// Define the variable to add all the relevant numbers to
  let sum = 0;
// create a loop to go through each number below the chosen number
  for (let i = 0; i < number; i++){
  // if the number is a factor of 3, add it to the sum
    if (i % 3 === 0) {
      sum += i;
  // if the number is a factor of 5, add it to the sum
    } else if (i % 5 === 0) {
      sum += i;
    }
  }
// return the new sum
  return sum;
}
