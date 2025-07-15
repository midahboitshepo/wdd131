
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let year = document.getElementById("year").innerHTML = new Date().getFullYear();


let lastModified = document.lastModified;
const lastModifiedparagraph = document.querySelector('#lastModified');
lastModifiedparagraph.innerHTML = lastModified;


