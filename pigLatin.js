// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  
  // Split words in the string into an array
  let wordsArray = str.split(' ');

  // Move first letter of each word to the end and add "ay" to the end of each word
  let pigLatinArray = [];
  for (let i = 0; i < wordsArray.length; i++) {
    
    // Check if the word contains only alphabetic characters
    if (/^[A-Za-z]+$/.test(wordsArray[i])) { //regular expression!
      pigLatinArray.push(wordsArray[i].slice(1) + wordsArray[i].slice(0, 1) + 'ay');
    } else {
      
      // If the word contains special characters, keep it unchanged
      pigLatinArray.push(wordsArray[i]);
    }
  }
  // Join the array into a new string
  return pigLatinArray.join(' ');
}
