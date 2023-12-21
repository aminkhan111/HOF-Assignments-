
// 6_LinkedIn_Profile_URL_Validator.js
// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.


function validateLinkedInProfileURL(url) {
    // Define the regex pattern for valid LinkedIn profile URLs
    const linkedInURLPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Test the input URL against the regex pattern
    const isValidLinkedInURL = linkedInURLPattern.test(url);
  
    // Print a message indicating if the input matches the conditions or not
    if (isValidLinkedInURL) {
      console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
      console.log(`"${url}" is not a valid LinkedIn profile URL.`);
    }
  }
  
  // Test cases with LinkedIn profile URL examples
  validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe123");
  validateLinkedInProfileURL("https://www.linkedin.com/in/mary_smith");
  validateLinkedInProfileURL("https://www.linkedin.com/in/user-name"); // This should print as not valid
  validateLinkedInProfileURL("https://www.linkedin.com/profile.php?id=123456"); // This should print as not valid





_
  