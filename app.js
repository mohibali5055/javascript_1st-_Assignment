//Q no 1 

// let numberOne = +prompt("Enter Your First Number");
// let numberTwo = +prompt("Enter Your Second Number");

// if (numberOne > numberTwo){
//   console.log("The bigger number is " + numberOne);
// }else if(numberTwo > numberOne){
//   console.log("The bigger number is " + numberTwo);
// }else{
//     console.log("Both Are Equal");
// }


//Q no 2

// let userNumber = +prompt("Enter Your Number");

// if(userNumber >= 0){
//     console.log("this number " +userNumber+ " Sign is +positive");
// }else{
//     console.log("this number " +userNumber+ " Sign is -Negative");
// }

//Q no 3

// let numberOne = +prompt("Enter your first number");
// let numberTwo = +prompt("Enter your Two number");
// let numberThree = +prompt("Enter your Three number");
// let numberFour = +prompt("Enter your four number");
// let numberFive = +prompt("Enter your Five number");


// let negativeNumber;

// if (numberOne < 0 || numberTwo < 0 || numberThree < 0 || numberFour < 0 || numberFive < 0) {
//     if(numberOne < 0){
//         negativeNumber = numberOne;
//         console.log("Your Number 1 " +negativeNumber+ " is negative, please enter a positive number");
//     }
//     if (numberTwo < 0) {
//         negativeNumber = numberTwo;
//         console.log("Your Number 2 " +negativeNumber+ " is negative, Please enter a positive number");
//     }
//     if (numberThree < 0) {
//         negativeNumber = numberThree;
//         console.log("Your Number 3 " +negativeNumber+ " is negative, Please enter a positive number");
//     }
//     if (numberFour < 0) {
//         negativeNumber = numberFour;
//         console.log("Your Number 4 " +negativeNumber+ " is negative, Please enter a positive number");
//     }
//     if (numberFive < 0) {
//         negativeNumber = numberFive;
//         console.log("Your Number 5 " +negativeNumber+ " is negative, Please enter a positive number");
//     }
// }else{

//     let maxNumber = Math.max(numberOne, numberTwo, numberThree, numberFour, numberFive)

//     if (maxNumber === numberOne) {
//         console.log("Number One "+numberOne+" is greater than all others");
//     } else if(maxNumber === numberTwo){
//         console.log("Number Two "+numberTwo+" is greater than all others");
//     } else if(maxNumber === numberThree){
//         console.log("Number Three "+numberThree+" is greater than all others");
//     }else if(maxNumber === numberFour){
//         console.log("Number Four "+numberFour+" is greater than all others");
//     }else if(maxNumber === numberFive){
//         console.log("Number Five "+numberFive+" is greater than all others");
//     }else{
//         console.log("Both are Equal");
//     }
// }


//Q no 4 

// for (let i = 0; i < 16; i++) {
//     if (i % 2 == 0) {
//         console.log(i+" is even number")
//     } else {
//         console.log(i+" is odd number")
//     } 
// }

//Q no 5

// let englishMarks = +prompt("Enter your english marks");
// let mathMarks = +prompt("Enter your Math marks");
// let computerMarks = +prompt("Enter your computer marks");
// let urduMarks = +prompt("Enter your urdu marks");


// let totalMarks = englishMarks+mathMarks+computerMarks+urduMarks;

// let calculateAverage = totalMarks * 100 / 400;

// if (
//     calculateAverage > 100 || englishMarks < 0 || mathMarks < 0 || computerMarks < 0 || urduMarks < 0 || englishMarks > 100 || mathMarks > 100 || computerMarks > 100 || urduMarks > 100
//     ) {
//     console.log("ENTER A VALID NUMBERS...")
// }else if (calculateAverage < 60) {
//     console.log(`
//     ------------------ MARK SHEET ------------------
//     Subject         Maximum Marks     Marks Obtained
//     -------------------------------------------------
//     English         100               ${englishMarks}
//     Math            100               ${mathMarks}
//     Computer        100               ${computerMarks}
//     Urdu            100               ${urduMarks}
//     -------------------------------------------------
//     Total           400               ${totalMarks}
//     Percentage      ${calculateAverage}%            Grade:        (D)
//     -------------------------------------------------
//     `);
// }else  if (calculateAverage < 70) {
//     console.log(`
//     ------------------ MARK SHEET ------------------
//     Subject         Maximum Marks     Marks Obtained
//     -------------------------------------------------
//     English         100               ${englishMarks}
//     Math            100               ${mathMarks}
//     Computer        100               ${computerMarks}
//     Urdu            100               ${urduMarks}
//     -------------------------------------------------
//     Total           400               ${totalMarks}
//     Percentage      ${calculateAverage}%            Grade:        (C)
//     -------------------------------------------------
//     `);
// }else if (calculateAverage < 80) {
//     console.log(`
//     ------------------ MARK SHEET ------------------
//     Subject         Maximum Marks     Marks Obtained
//     -------------------------------------------------
//     English         100               ${englishMarks}
//     Math            100               ${mathMarks}
//     Computer        100               ${computerMarks}
//     Urdu            100               ${urduMarks}
//     -------------------------------------------------
//     Total           400               ${totalMarks}
//     Percentage      ${calculateAverage}%            Grade:        (B)
//     -------------------------------------------------
//     `);
// }else if (calculateAverage < 90) {
//     console.log(`
//     ------------------ MARK SHEET ------------------
//     Subject         Maximum Marks     Marks Obtained
//     -------------------------------------------------
//     English         100               ${englishMarks}
//     Math            100               ${mathMarks}
//     Computer        100               ${computerMarks}
//     Urdu            100               ${urduMarks}
//     -------------------------------------------------
//     Total           400               ${totalMarks}
//     Percentage      ${calculateAverage}%           Grade:        (A)
//     -------------------------------------------------
//     `);
// }else if(calculateAverage <= 100){
//     console.log(`
//     ------------------ MARK SHEET ------------------
//     Subject         Maximum Marks     Marks Obtained
//     -------------------------------------------------
//     English         100               ${englishMarks}
//     Math            100               ${mathMarks}
//     Computer        100               ${computerMarks}
//     Urdu            100               ${urduMarks}
//     -------------------------------------------------
//     Total           400               ${totalMarks}
//     Percentage      ${calculateAverage}%            Grade:        (A+)
//     -------------------------------------------------
//     `);
// }else{
//     console.log("SOMETHING WRONGS...")
// }



//Q no 6 


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     }else if (i % 3 == 0) {
//         console.log("Fizz");
//     }else if(i % 5 == 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }


// Q no 7


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write( " *");
//     }
//     document.write("  * <br>" )
// }