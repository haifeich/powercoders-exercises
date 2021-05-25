const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const btn = document.querySelector('#chf');
const btnReset = document.querySelector('#reset');
const btnUsd = document.querySelector('#usd');
const btnEur = document.querySelector('#eur');
const showResult = document.querySelector('p');
let usdChf = 0;
let usdEur = 0;
let outPut = 0;
let tipOutPut = 0;
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
btn.addEventListener('click', calculate);

function calculate(){
    const billValue = bill.value;
    const tipValue = tip.value;
    showResult.innerHTML = '';
    wrong1.innerHTML = '';
    wrong2.innerHTML = '';
    if (!isValide(billValue)){    //no while because it will loop all the time, no time to reset the correct value
        wrong1.innerText = 'Please enter the correct bill';
      };
    if (!isValide(tipValue)){
        wrong2.innerText = 'Please enter the correct tip';
    };
    if (isValide(billValue) && isValide(tipValue)){

        if (Number(billValue) <= 10){ //Don't pay tips when it's less than 10
            outPut = Number(billValue)
            showResult.innerText = `You bill is ${outPut} CHF, no need to pay tips.`;
        } else{
            tipOutPut = Math.round((Number(billValue) * (Number(tipValue)/100)) * 20)/20; //the result will like XXX.XX
            outPut = Number(billValue) + tipOutPut;
            showResult.innerText = `You bill is ${outPut} CHF total, of which ${tipOutPut} CHF is the tip.`;
        }       
    }
}
btnReset.addEventListener('click', event =>{
    showResult.innerHTML = '';
    bill.value = '';
    tip.value = '';
    bill.focus();
})

btnUsd.addEventListener('click', 

    async function currencies (){
        let response = await fetch('http://api.currencylayer.com/live?access_key=d531a10cda9f3031176efec85541fc6b&currencies=CHF,EUR&format=1');
        let data = response.json();
        data.then(result => {usdChf = result.quotes.USDCHF;})
            .then(()=>{
                calculate();
                outPut = Math.round(outPut*usdChf *20)/20;
                tipOutPut = Math.round(tipOutPut*usdChf *20)/20;
                showResult.innerText = `You bill is ${outPut} USD total, of which ${tipOutPut} USD is the tip.`;
            })   
    })

btnEur.addEventListener('click', 
async function currencies (){
    let response = await fetch('http://api.currencylayer.com/live?access_key=d531a10cda9f3031176efec85541fc6b&currencies=CHF,EUR&format=1');
    let data = response.json();
    data.then(result => {usdEur = result.quotes.USDEUR; usdChf = result.quotes.USDCHF;})
        .then(()=>{
            calculate();
            outPut = Math.round(outPut*usdChf/usdEur *20)/20;
            tipOutPut = Math.round(tipOutPut*usdChf/usdEur *20)/20;
            showResult.innerText = `You bill is ${outPut} EUR total, of which ${tipOutPut} EUR is the tip.`;
        })   
})