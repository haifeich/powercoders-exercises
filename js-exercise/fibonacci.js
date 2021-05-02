/* Create a function to produce Fibonacci Sequence */
let numberLength = Number(prompt('Enter an integer >= 1'));
let f_s = [0, 1];
function fibonacci(x) {
 if (x == 1) {
    console.log('0');
 }else if(x == 2){
    console.log ('0, 1');
 }else{
     for (let i = 1; i <= (x -2); i++){
        f_s[i + 1] = f_s[i-1] + f_s[i];
     }
    console.log(f_s.toString());
 }
}
fibonacci(numberLength);