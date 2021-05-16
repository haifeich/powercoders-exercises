let username=document.querySelector('#username');
let password=document.querySelector('#password');
let button = document.querySelector('#register');
let buttonLogin = document.querySelector('#login');
button.addEventListener('click', event =>{
    event.preventDefault();
    addUser()
})

let addUser=()=>{
    let name = username.value;
    let userpass = password.value;
    localStorage.setItem(name, userpass);
    console.log(name, userpass);
}

buttonLogin.addEventListener('click', event =>{
    event.preventDefault();
    checkpass()
})

function checkpass(){
    let loginName = username.value;
    let loginUserpass = password.value;
    let correctpass = localStorage.getItem(loginName);
    if(loginUserpass===correctpass){
        alert('password is correct')
        createHomepage(loginName);
    }else{
        alert('try again')
    }
}
function createHomepage(ploginName){
    document.body.innerHTML = `Welcome Facebook, ${ploginName}!`
}

