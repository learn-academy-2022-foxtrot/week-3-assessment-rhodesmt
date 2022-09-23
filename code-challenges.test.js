// ASSESSMENT 3: Coding Practical Questions with Jest

const { arrayBuffer } = require("stream/consumers");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Jest template
// describe ("functionNameHere", () => {
//   it ("description of what the test function does/expected to do", () => {
//     expect(functionNameHere(functionArgument)).toEqual(expected output here)
//   })
// })

// a) Create a test with expect statements for each of the variables provided.

// I'm going to need to create a test function takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Input: const fibLength1 = 6; fibLength2 = 10;
// Expexted Output: [1, 1, 2, 3, 5, 8]; [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibLength1 = 6;
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10;
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacciSequence", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    expect(fibonacciSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacciSequence(fibLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});

// Successful Test Fail
// ReferenceError: fibonacciSequence is not defined

// I'm think I'm going to need to iterate over the array so that I can use the argument for fibLength1 and fibLength2 to return the fibArray length equal to the num argument passed into the fibonacciSequence function. I don't think that I'm going to need to use .map() because the argument is not an array. This one is going to be interesting.

// I'm going to try running this as a for-loop. I'm going to set fibArray = the first 12 numbers of the Fibonacci sequence and have the function iterate over the length of that array for the length of the given index length.

// b) Create the function that makes the test pass.
const fibArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
// const fibonacciSequence = (num) => {
//   const newFibArray = [];
//   for (let i = 0; i < fibArray.length; i++) {
//     newFibArray.push(fibArray.slice(0, num));
//     return newFibArray;
//   }
// };
// I basically have the correct output, but it's failing because the array is getting an extra set of brackets somewhere and I'm not sure where.

// I figured out the issue, using slice, I was taking a subset of the array I had created and pushing that sliced array to the empty array I had declared. This was causing the test to fail because of the extra set of brackets that were contained within the output.

// I was correct in that I would need to iterate over an array somehow, but I wasn't exactly sure. I understand the Fibonacci sequence quiet well, it's constant representation in the natural world really is fascinating to me. Be that as it may, it doesn't help the abscence of its representation here.

// I declared a new function with a for-loop specifically for creating the fibonacci sequence equal in length to the given number.

const fibonacciSequence = (num) => {
  // created a new array set to an empty array as a place to store the pushed Fibonacci values.
  const newFibArray = [];

  // Establishing two variables that will serve as the beginning of the Fibonacci sequence. [1,1,2,...etc]
  let n1 = 1;
  let n2 = 1;

  // This will allow the loop to iterate for less than the length of the given number and allow for the correct number of indexes as well as brackets, since I am now simply pushing values to the empty array.

  for (let i = 0; i < num; i++) {
    // fibSeq represents the beginning of the Fibonacci count that adds the previous two numbers together.
    let fibSeq = n1 + n2;

    // The values of n1 are being continuously pushed to the new array creating the Fibonacci sequence
    newFibArray.push(n1);

    // The n1 and n2 variables previously set to 1 are now updated in order to continue with the count of the Fibonacci sequence and return the correct newFibArray length.
    n1 = n2;
    n2 = fibSeq;
  }
  return newFibArray;
};

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// I was correct! Not only was I able to get a test pass, but with this function, the function is now able to repeat the process with any given number and return the correct Fibonacci sequence.

// ------------------------------<break>---------------------------------

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// I need to create a function that takes in an object and returns an array of the numbers sorted from least to greatest.

// Input: studyMinutesWeek1; studyMinutesWeek2
// Expected Output: An array containing object numbers sorted from least to greatest.

describe("studyMinutes", () => {
  it("takes in an object and returns an array of the numbers sorted from least to greatest.", () => {
    expect(studyMinutes(studyMinutesWeek1)).toEqual([
      15, 15, 20, 30, 30, 60, 90,
    ]);
    expect(studyMinutes(studyMinutesWeek2)).toEqual([
      10, 15, 20, 45, 60, 65, 100,
    ]);
  });
});

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
};
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
};
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// The test failed successfully
// ReferenceError: studyMinutes is not defined

// b) Create the function that makes the test pass.

// This one is going to be a little tricky. I've never used the object.values() method before so I'm not entirely sure what it does or will do. I know absolutely nothing about it, so I'm going to go read that link before I really think about doing anything further. I am sure that will only serve to my benefit down the line.

// Ok, so it looks like the object.value() operator allows us to access a specific value from within an object and return that as an array. I don't think the values are automatically sorted in a certain order, so I may need to do that separately.

const studyMinutes = (array) => {
  let studyArr = [];
  studyArr = Object.values(array);
  return studyArr.sort((a, b) => a - b);
};

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// I was correct again!! I was able to call the specific numbers within the objects and return an array with the numbers sorted using the .sort method which allows us to sort an array in a specific order. In this instance, the array needed to be in increasing order, so I have the sort function in the method call to do that.

// ------------------------------<break>---------------------------------

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// I need to create a test function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Input: accountTransactions1; accountTransactions2; accountTransactions3
// Expected Output: An array of the accumulating sum [100, 83, 60, 51]; [250, 161, 261, 165]; []

// a) Create a test with expect statements for each of the variables provided.

describe("sumAccumulator", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    expect(sumAccumulator(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(sumAccumulator(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(sumAccumulator(accountTransactions3)).toEqual([]);
  });
});
// Successful test fail
// ReferenceError: sumAccumulator is not defined

const accountTransactions1 = [100, -17, -23, -9];
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96];
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = [];
// Expected output: []

// b) Create the function that makes the test pass.

// I'm honestly kind of stumped on this one... I feel like it's really simple and I'm just over thinking the problem. Well since I'm going to need to at a minimum iterate over the array using a loop. I may end up using a HOF like .map() so that I can just get the new array pushed.



const sumAccumulator = () => {
  
  // I think where I'm most stuck is on how to return the sum of the numbers continuously within the array. 
}