let tabBtns = document.querySelectorAll('.desc__btn'),
    text = document.querySelector('.desc__text'),
    property = document.querySelector('.desc__property');

tabBtns[0].addEventListener('click', function(){
    text.style.visibility = "visible";
    property.style.visibility = "hidden";
    tabBtns[0].classList.add('desc__btn-active')
    tabBtns[1].classList.remove('desc__btn-active')
})
tabBtns[1].addEventListener('click', function(){
    text.style.visibility = "hidden";
    property.style.visibility = "visible";
    tabBtns[0].classList.remove('desc__btn-active')
    tabBtns[1].classList.add('desc__btn-active')
})