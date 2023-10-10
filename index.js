function isPalindrome(word) {
  // Convert the word to lowercase to make the comparison case-insensitive
  const lowercasedWord = word.toLowerCase();

  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = lowercasedWord.length - 1;

  // Iterate until the start pointer is less than the end pointer
  while (start < end) {
    // If characters at the start and end pointers are not equal, the word is not a palindrome
    if (lowercasedWord[start] !== lowercasedWord[end]) {
      return false;
    }

    // Move the pointers towards each other
    start++;
    end--;
  }

  // If the loop completes, the word is a palindrome
  return true;
}

/* 
  Pseudocode:

  1. Convert the input word to lowercase to make the comparison case-insensitive.
  2. Initialize two pointers, one at the start of the word and the other at the end.
  3. While the start pointer is less than the end pointer:
     a. If the characters at the start and end pointers are not equal, return false (not a palindrome).
     b. Move the start pointer forward and the end pointer backward.
  4. If the loop completes, return true (the word is a palindrome).

  Explanation:

  The function uses two pointers starting from the beginning and end of the word and compares the characters at these positions. If they are not equal at any point, the word is not a palindrome. The pointers move towards each other until they meet or cross, and if the loop completes, the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

