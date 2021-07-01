//how to print odd numbers less than 100
/*for (let i = 1; i < 100; i+= 1) {
    if (i % 2 === 1) {
    console.log(i)
    }
}
*/



/*let temp = 10
function isC2F() {

    let tempF = (temp * 1.8) + 32;
    
    return tempF
}
console.log(isC2F())
*/


//Advance way to do #3
let isPipeline = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = isPipeline.reduce((a, b) => {
    return a + b;
});
console.log("the sum is: ", sum);


//jumbled way we did #3
/*let isPipeline = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 1; i < 1; i++)
if (i <= isPipeline.length)

return

console.log(isPipeline.length)
*/
