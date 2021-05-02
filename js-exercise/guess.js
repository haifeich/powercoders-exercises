/* I have a number from 1-100 in mind. You guess. I will give you the answer whether your number is lower or higher. */
let myNumber = Math.floor(Math.random() * 100) + 1;
let userNumber = Number(prompt('Please give me a number from 1 to 100'));
let lower = 0;  // it's "global", so that it can reach both if and else block. Also it will be updated in each time while loop.
let higher = 100;

while(userNumber != myNumber) {
    
    if (userNumber < myNumber) {
        lower = userNumber;
        userNumber = Number(prompt(`${userNumber} is lower, please enter a number from ${lower} to ${higher}`));
    } else {
        higher = userNumber;
        userNumber = Number(prompt(`${userNumber} is bigger, please enter a number from ${lower} to ${higher}`));
    }
}
alert(`Congrantulations! My number is ${myNumber}`);