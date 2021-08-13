const nav = document.querySelector('.header__nav');
const headerSecond = document.querySelector('.header__second');
const burger = document.querySelector('.header__burger');
burger.addEventListener('click',function () {  
    nav.classList.toggle('active');
    headerSecond.classList.toggle('active');
})