//Random_Number_Generator_with_Delay_and_Progress_Indication.js

//  Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable
//  so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

// define Delay 

let delayTime=3000;

// function to generate Random Number

function genRandNum(){
    return Math.floor(Math.random() *100);//Adjust the Range as needed

}

function delayRandNum(delay){
    // Display progress message every second until it completed 
    const interval = setInterval(()=> {
         console.log(`Time remaining : ${delay / 1000} seconds`);
          
        delay-=1000;

        if(delay <= 0){
            clearInterval(interval); // Stop the interval
            const randomNumber = genRandNum();
        
        console.log(`Random number generated: ${randomNumber}`);
        
        
        }
    }, 1000);
}

// Step 4: Call the delayedRandomNumber function with the specified delay


delayRandNum(delayTime);



















