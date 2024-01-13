let sliderBtns = document.querySelectorAll('.card__btn'),
    cardCover = document.querySelector('.card__cover')
    btn_0 = true,
    btn_1 = false,
    btn_2 = false;

sliderBtns[0].addEventListener('click', function() {
    width  = document.querySelector('.card__img').offsetWidth;
    btnsSwitcher(sliderBtns,'card__btn_active',0)
    if(btn_1 == true){
        cardCover.style.transform = 'translate(' + 0 + 'px)'
    }
    if(btn_2 == true){
        cardCover.style.transform = 'translate(' + 0 +'px)'
    }
    btn_0 = true;
    btn_1 = false;
    btn_2 = false;
});
sliderBtns[1].addEventListener('click', function() {
    width  = document.querySelector('.card__img').offsetWidth;
    btnsSwitcher(sliderBtns,'card__btn_active',1)
    if(btn_0 == true){
        cardCover.style.transform = 'translate(-' + width + 'px)'
    }
    if(btn_2 == true){
        cardCover.style.transform = 'translate(-' + width + 'px)'
    }
    btn_0 = false;
    btn_1 = true;
    btn_2 = false;
});
sliderBtns[2].addEventListener('click', function() {
    width  = document.querySelector('.card__img').offsetWidth;
    btnsSwitcher(sliderBtns,'card__btn_active',2)
    if(btn_1 == true){
        cardCover.style.transform = 'translate(-' + 2 * width + 'px)'
    }
    if(btn_0 == true){
        cardCover.style.transform = 'translate(-' + 2 * width + 'px)'
    }
    btn_0 = false;
    btn_1 = false;
    btn_2 = true;
});
function btnsSwitcher (btn,classs,i) {
    if (i == 0){
        btn[0].classList.add(classs);
        btn[1].classList.remove(classs);
        btn[2].classList.remove(classs);
    }
    if (i == 1){
        btn[1].classList.add(classs);
        btn[0].classList.remove(classs);
        btn[2].classList.remove(classs);
    }
    if (i == 2){
        btn[2].classList.add(classs);
        btn[1].classList.remove(classs);
        btn[0].classList.remove(classs);
    }
}