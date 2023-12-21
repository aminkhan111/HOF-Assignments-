
// // 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.



// Define Input String 

const input = "Hello, World!";

// Step -2: Function for Reverse A String 

function reverseString(str){
    return str.split("").reverse().join("");
}

// function hendle Delayed reversal

function delayedReverse(inputString){
    setTimeout(function(){
        // call the reversedString function and store the result 

        const reversedString = reverseString(inputString);

       console.log("Reversed  String :" ,reversedString);

    }, 2000); // holding for 2Second)

}
// Step 4: Call the delayedReverse function with the input string
delayedReverse(input);





