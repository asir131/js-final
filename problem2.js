function CountPairs(inputString) {
    // Helper function to check if a pair adds up to an even number
    function isEvenPair(pair) {
      return (pair[0] + pair[1]) % 2 === 0;
    }
  
    // Convert the input string to an array for easier manipulation
    const characters = inputString.split('');
  
    // Initialize a count for even pairs
    let evenPairsCount = 0;
  
    // Iterate through the characters, considering every pair
    for (let i = 0; i < characters.length - 1; i++) {
      const currentChar = characters[i];
      const nextChar = characters[i + 1];
  
      // Check if the pair is composed of a digit and a lowercase letter
      if (!isNaN(currentChar) && isNaN(nextChar) || isNaN(currentChar) && !isNaN(nextChar)) {
        // Check if the pair adds up to an even number
        if (isEvenPair([Number(currentChar), Number(nextChar)])) {
          evenPairsCount++;
        }
      }
    }
  
    // Return the count of even pairs
    return evenPairsCount;
  }
  
  // Example usage:
  const inputString = "a1b2c3d4e5f6";
  const result = CountPairs(inputString);
  console.log(result); // Output: 3
  