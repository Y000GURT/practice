let left = document.querySelector('#left'),
    right = document.querySelector('#right'),
    modalSlider = document.querySelector('.modal__slider'),
    slides = document.querySelectorAll('.modal__img'),
    bodyModal = document.querySelector('body'),
    close = document.querySelector('.modal__close'); 
    cardImg = document.querySelectorAll('.card__slide'),
    modalLine = document.querySelector('.modal__line'),
    count = 0;

close.addEventListener('click', function() {
    modalSlider.classList.remove('modal__slider-active');
    bodyModal.classList.remove('body-fixed');
})
modalSlider.addEventListener('click', function(e) {
    if(e.target === modalSlider){
        modalSlider.classList.remove('modal__slider-active');
        bodyModal.classList.remove('body-fixed');
    }
})
cardImg[0].addEventListener('click', function() {
    bodyModal.classList.add('body-fixed');
    modalSlider.classList.add('modal__slider-active');
    count = 0; 
    rollSlider();
})
cardImg[1].addEventListener('click', function() {
    bodyModal.classList.add('body-fixed');
    modalSlider.classList.add('modal__slider-active');
    count = 1;
    rollSlider();
})
cardImg[2].addEventListener('click', function() {
    bodyModal.classList.add('body-fixed');
    modalSlider.classList.add('modal__slider-active');
    count = 2;
    rollSlider();
})
left.addEventListener('click', function() {
    count--;
    if(count < 0){
        count = 2;
    }
    rollSlider();
})

right.addEventListener('click', function() {
    count++;
    if (count >= 3){
        count = 0;
    }
    rollSlider();
})
function rollSlider() {
    width_2 = document.querySelector('.modal__img').offsetWidth;
    console.log(width_2);
    modalLine.style.transform = 'translate(' + count * -width_2 + 'px)';
}