const prompt = require('prompt-sync')();
function printPalindromicTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
      let rowString = '';
  
      // Add spaces before the numbers
      for (let j = 0; j < rows - i; j++) {
        rowString += ' ';
      }
  
      // Add increasing numbers
      for (let j = i; j < 2 * i; j++) {
        rowString += j;
      }
  
      // Add decreasing numbers in reverse order
      for (let j = 2 * i - 2; j >= i; j--) {
        rowString += j;
      }
  
      console.log(rowString);
    }
  }
  
  // Example usage:
  const numberOfRows = prompt("Enter the number of rows: ");
  printPalindromicTriangle(parseInt(numberOfRows));
  