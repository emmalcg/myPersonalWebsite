const navSlide = () => {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.main-nav');
    const navLi = document.querySelectorAll('.main-nav li');

    burger.addEventListener('click', function (){
        //animate burger icon
        burger.classList.toggle('open');
        //have nav appear
        mobileNav.classList.toggle('nav-open');


        //animate links
    navLi.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    });

    if (burger.classList.contains('open')) {
        menuText.innerHTML='close'; 
    } else {
        menuText.innerHTML-'menu';
    }
}
navSlide();