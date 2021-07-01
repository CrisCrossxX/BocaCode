//Problem1 % Answer: Fizzbuzz try #2 (does this even need a func?)

for (let i = 1; i < 100; i++) {
            if (i % 15 === 0)      {
            console.log("FizzBuzz");
        }
            else if ( i % 3 === 0) {
            console.log("Fizz");
        }
            else if ( i % 5 === 0) {
            console.log("Buzz");
        }   else {
           console.log(i) 
            }
       }

//Problem2 & Answer: Write a loop to print a pyramid
let row = ""
    for (let i = 1; i <= 5; i++ ) {
row += "# "
console.log(row)
    }