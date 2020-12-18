const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// // .question(prompt, callback)


// // What is wrong with the following code?

// const response = rl.question('What do you think of JavaScript? ', answer => answer);

// console.log(`Thank you for your valuable feedback: ${response}`);

// const truth = rl.question('What do you really think of JavaScript? ', answer => answer);

// console.log(`You said: ${truth}. Thank you for your honesty.`);
// rl.close();



// // How do we fix it?
// // 1. find asynchronous and synchronous codes
// // 2. To make synchronous code wait for asynchronous code to finish executed, put synchronous code INSIDE of asynchronous callback. 
// // 3. close reader after the final line you want to print in the callback. 


function addNumbers(sum,nums,completeCallback){
    if(nums > 0){
        rl.question("Gives us a number: ", function(result){ 
            const number = parseInt(result);
            sum+=number;
            console.log(sum);
            addNumbers(sum, --nums, completeCallback);
        })
    }
    else if(nums === 0){
        completeCallback(sum);
        rl.close();
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSorty(){
        
}
