const btnSubmit = document.querySelector('#submit');
const webName = document.querySelector('#webname');
const url = document.querySelector('#url');
const show = document.querySelector('#show');
btnSubmit.addEventListener('click', function(event){
    event.preventDefault();
    if (webName.value !== null && url.value !== null && webName.value.trim() !== "" && url.value.trim() !== "" ){
        localStorage.setItem(webName.value, url.value);
    } 
    addBookmark();
})


window.addEventListener('load', addBookmark)

function addBookmark() {
    show.innerHTML = '';
    let keys = Object.keys(localStorage);
    for(let key of keys) {

    const wapper = document.createElement('article');
    const bookmark = document.createElement('span');
    const btnVisit = document.createElement('button');
    const btnDelete = document.createElement('button');
    btnVisit.classList.add('visit');
    btnDelete.classList.add('delete');
    bookmark.innerText = key;
    let bookmarkURL = `location.href='http://${localStorage.getItem(key)}'`
    btnVisit.setAttribute('onclick', bookmarkURL);
    btnVisit.innerText = 'Visit';
    btnDelete.innerText = 'Delete';
    wapper.appendChild(bookmark);
    wapper.appendChild(btnVisit);
    wapper.appendChild(btnDelete);
    show.appendChild(wapper);
    btnDelete.addEventListener('click', event =>{
        localStorage.removeItem(key);
        wapper.innerHTML = '';
    })
} 
}


