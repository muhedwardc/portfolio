const hamburger = document.querySelector('nav .hamburger');
const description = document.querySelector('section#main .description');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    description.classList.toggle('open');
})

