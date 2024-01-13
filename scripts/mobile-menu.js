let menuBtn = document.querySelector('.menu__open-menu'),
    menuMobile = document.querySelector('.mobile__menu'),
    body = document.querySelector('body'),
    menuBtns = document.querySelectorAll('.mobile__btn'),
    submenu = document.querySelectorAll('.mobile__submenu'),
    submenu_0 = false,
    submenu_1 = false,
    submenu_2 = false,
    menuOpen = false;

menuBtn.addEventListener('click', function() {
    switch(menuOpen){
        case false:
            menuMobile.classList.add('mobile__menu-active');
            body.classList.add('mobile');
            menuOpen = true;
            break;
        case true:
            menuMobile.classList.remove('mobile__menu-active');
            body.classList.remove('mobile');
            menuOpen = false;
            break;
    }
})
menuBtns[0].addEventListener('click', function() {
    switch(submenu_0){
        case false:
            submenu[0].classList.add('mobile__submenu-active');
            menuBtns[0].classList.add('mobile__btn-active'),
            submenu_0 = true;
            break;
        case true:
            submenu[0].classList.remove('mobile__submenu-active');
            menuBtns[0].classList.remove('mobile__btn-active'),
            submenu_0 = false;
            break;
    }
})
menuBtns[1].addEventListener('click', function() {
    switch(submenu_1){
        case false:
            submenu[1].classList.add('mobile__submenu-active');
            menuBtns[1].classList.add('mobile__btn-active'),
            submenu_1 = true;
            break;
        case true:
            submenu[1].classList.remove('mobile__submenu-active');
            menuBtns[1].classList.remove('mobile__btn-active'),
            submenu_1 = false;
            break;
    }
})
menuBtns[2].addEventListener('click', function() {
    switch(submenu_2){
        case false:
            submenu[2].classList.add('mobile__submenu-active');
            menuBtns[2].classList.add('mobile__btn-active'),
            submenu_2 = true;
            break;
        case true:
            submenu[2].classList.remove('mobile__submenu-active');
            menuBtns[2].classList.remove('mobile__btn-active'),
            submenu_2 = false;
            break;
    }
})
