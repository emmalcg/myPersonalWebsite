const navSlide = () => {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.main-nav');
    const navLi = document.querySelectorAll('.main-nav li');
    const circle = document.querySelectorAll('.circle');

    burger.addEventListener('click', function (){
        //animate burger icon
        burger.classList.toggle('open');
        //have nav appear
        mobileNav.classList.toggle('nav-open');

        circle[0].classList.toggle('blue');
        circle[1].classList.toggle('blue');

        //animate links
    navLi.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    });
}
navSlide();