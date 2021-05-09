
const password = "123";
let userPassword = document.querySelector('#password');


let btn = document.querySelector('#password + button');
btn.addEventListener('click', logIn);
let wrong = document.createElement('p');
btn.insertAdjacentElement('afterend', wrong);
function logIn(){

  if (userPassword.value != password) {
     
      
      wrong.innerText = 'Please enter the correct password'
     
      userPassword.value = '';
    
    
  } else{
    document.querySelector('.invisible').className = 'visible';
    document.querySelector('.visible').className = 'invisible';
  }
}

let ul = document.querySelector('ul');
let btn2 = document.querySelector('#todo + button');
btn2.addEventListener('click', todo);
let userToDo = document.querySelector('#todo');

let arr = []; 
function todo () { 
    ul.innerHTML = ''; //ul is empty, but the array is not empty, where we store all the to do lists.
    arr.push(userToDo.value);
    arr.sort();
    /*let li = document.createElement('li');*/ /* We can't define li outside of the for loop. because each time it loops, we create a new li which is empty, then in the for loop we set innerText to the new li, set it to the ul, if the loop continues, we overwrite the same li, so it will only store a li tag with the last index value of the array. */
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li'); //if we define the li inside the loop, it will create a li tag each time when it loops.
        li.innerText = arr[i];
        ul.appendChild(li);
    }
    userToDo.value = '';
}