// js file
const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('show-nav');
});