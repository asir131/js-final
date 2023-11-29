function removeDuplicates(studentNames) {
    let uniqueNames = []; // Array to store unique names
  
    for (let i = 0; i < studentNames.length; i++) {
      let currentName = studentNames[i];
  
      // Check if the name is not already in the uniqueNames array
      if (!uniqueNames.includes(currentName)) {
        uniqueNames.push(currentName); // Add it to the uniqueNames array
      }
    }
  
    return uniqueNames;
  }
  
  // Sample Input
  let studentNames = ['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz'];
  
  // Call the function and display the result
  let uniqueStudentNames = removeDuplicates(studentNames);
  console.log(uniqueStudentNames);