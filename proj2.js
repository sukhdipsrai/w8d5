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

function askIfGreaterThan(el1, el2, callback) {
    rl.question(`Is ${el1} greater than ${el2}?`, function(answer){
        if (answer === 'yes') {
            rl.close();
            console.log(true);
            callback(true);
        } else {
            rl.close();
            console.log(false);
            callback(false)
        }
    });   
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], function(isGreater) {   
            if (isGreater) {
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;

                madeAnySwaps = true

                innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
            }
        })
    } else if (i === (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps)
    }




    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
}

console.log(innerBubbleSortLoop([2, 5, 3, 4], 0, false, function() {console.log('End of Loop') }))

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });