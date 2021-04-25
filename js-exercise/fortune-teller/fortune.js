const numberChildren = [1 , 2 , 3, 10];
const namePartner = ['Jack', 'Mary', 'the King', 'the Queen'];
const geoLocation = ['Paris', 'Barcelona', 'London', 'Zurich'];
const jobTitle = ['Software Engineer', 'teacher', 'architect', 'dorctor'];

const number = numberChildren[Math.floor(Math.random() * numberChildren.length)];
const partner = namePartner[Math.floor(Math.random() * namePartner.length)];
const place = geoLocation[Math.floor(Math.random() * geoLocation.length)];
const job = jobTitle[Math.floor(Math.random() * jobTitle.length)];

function yourName () {
    const firstName = prompt('Enter your name please');
    alert(`${firstName} will be a ${job} in ${place}, and married to ${partner} with ${number} kids.`);
}

