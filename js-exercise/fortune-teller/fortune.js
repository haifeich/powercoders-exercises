const numberChildren = [ 2 , 3, 4, 10];
const namePartner = ['Jack', 'Mary', 'the King', 'the Queen'];
const geoLocation = ['Paris', 'Barcelona', 'London', 'Zurich'];
const jobTitle = ['Software Engineer', 'teacher', 'architect', 'dorctor'];

function yourName () {
    const firstName = prompt('Enter your name please');
    let number = numberChildren[Math.floor(Math.random() * numberChildren.length)];
    let partner = namePartner[Math.floor(Math.random() * namePartner.length)];
    let place = geoLocation[Math.floor(Math.random() * geoLocation.length)];
    let job = jobTitle[Math.floor(Math.random() * jobTitle.length)];
    alert(`${firstName} will be a ${job} in ${place}, and married to ${partner} with ${number} kids.`);
}

