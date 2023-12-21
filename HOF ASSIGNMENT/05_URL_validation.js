//  05_URL_validation.js


//  Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
//  followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
//  Print a message indicating if the input matches the conditions or not.




function validateURL(url) {
    const urlPattern = /^(http|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]$/;
  
    const isValidURL = urlPattern.test(url);
  
    if (isValidURL) {
      console.log(`"${url}" is a valid URL.`);
    } else {
      console.log(`"${url}" is not a valid URL.`);
    }
  }
  
  // Test cases with real-world examples
  validateURL("https://www.example.com");
  validateURL("http://www.google.com");
  validateURL("ftp://invalid.url"); // This should print as not valid
  validateURL("https://blog.example.org/articles/javascript");