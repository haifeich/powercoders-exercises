const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const btn = document.querySelector('input + button');
const btnReset = document.querySelector('button + button');
const result = document.querySelector('p');
let wrong1 = document.createElement('p'); //create first wrong message in a p tag for bill
let wrong2 = document.createElement('p'); //create second wrong message in a p tag for tip
bill.insertAdjacentElement('afterend', wrong1); //place it just after the bill amount button
tip.insertAdjacentElement('afterend', wrong2); // place it aftre the tip button
function isValide (x){
    if (x === null || Number(x) <= 0){
        return false;
    } else {
        return true;  // validation function need both false and true value. if one is missing, it will return undifined. which is also a boolean false value.
    }
} 
btn.addEventListener('click', event => {
    const billValue = bill.value;
    const tipValue = tip.value;
    result.innerHTML = '';
    wrong1.innerHTML = '';
    wrong2.innerHTML = '';
    if (!isValide(billValue)){    //no while because it will loop all the time, no time to reset the correct value
        wrong1.innerText = 'Please enter the correct bill';
      };
    if (!isValide(tipValue)){
        wrong2.innerText = 'Please enter the correct tip';
    };
    if (isValide(billValue) && isValide(tipValue)){
        let outPut = 0;
        let tipOutPut = 0;
        if (Number(billValue) <= 10){ //Don't pay tips when it's less than 10
            outPut = Number(billValue)
            result.innerText = `You bill is ${outPut} CHF, no need to pay tips.`;
        } else{
            tipOutPut = Math.round((Number(billValue) * (Number(tipValue)/100)) * 20)/20; //the result will like XXX.XX
            outPut = Number(billValue) + tipOutPut;
            result.innerText = `You bill is ${outPut} CHF total, of which ${tipOutPut} CHF is the tip.`;
        }       
    }
});
btnReset.addEventListener('click', event =>{
    result.innerHTML = '';
    bill.value = '';
    tip.value = '';
    bill.focus();
})