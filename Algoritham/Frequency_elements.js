function findElementFrequency(arr) {
    var frequency = {};
  
    for (var outerIndex = 0; outerIndex < arr.length; outerIndex++) {
      var currentElement = arr[outerIndex];
  
      // Initialize count for the current element
      frequency[currentElement] = 0;
  
      for (var innerIndex = 0; innerIndex < arr.length; innerIndex++) {
        if (arr[innerIndex] === currentElement) {
          // Increment count when the current element is found
          frequency[currentElement]++;
        }
      }
    }
  
    // Display the frequencies
    for (var key in frequency) {
      console.log(key + ': ' + frequency[key] + ' times');
    }
  }
  
  // Example usage
  var myArray = [1, 2, 3, 4, 1, 2, 3, 1, 2];
  findElementFrequency(myArray);
  