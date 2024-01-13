let cardsBtns = document.querySelectorAll('.rec-cards__btn'),
    items = document.querySelectorAll('.rec-cards__items');

cardsBtns[0].addEventListener('click', function(){
    btnsSwitcher(cardsBtns,'rec-cards__btn_active',0);
    itemsSwitcher(items,0)
})
cardsBtns[1].addEventListener('click', function(){
    btnsSwitcher(cardsBtns,'rec-cards__btn_active',1);
    itemsSwitcher(items,1)
})
cardsBtns[2].addEventListener('click', function(){
    btnsSwitcher(cardsBtns,'rec-cards__btn_active',2);
    itemsSwitcher(items,2)
})
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
function itemsSwitcher (items,i){
    if(i == 0){
        items[0].style.visibility = "visible";
        items[1].style.visibility = "hidden";
        items[2].style.visibility = "hidden";
    }
    if(i == 1){
        items[1].style.visibility = "visible";
        items[0].style.visibility = "hidden";
        items[2].style.visibility = "hidden";
    }
    if(i == 2){
        items[2].style.visibility = "visible";
        items[1].style.visibility = "hidden";
        items[0].style.visibility = "hidden";
    }
}