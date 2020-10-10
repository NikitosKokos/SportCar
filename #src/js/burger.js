 //  burger
    const burger = document.querySelector('.burger');
    const headerMenu = document.querySelector('.header__menu');
    const wrapper = document.querySelector('body');
    burger.addEventListener("click", () =>{
        headerMenu.classList.toggle("header__menu_active");
        burger.classList.toggle("burger_active");
        wrapper.classList.toggle("lock");
    });