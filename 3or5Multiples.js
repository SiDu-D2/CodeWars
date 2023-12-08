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
