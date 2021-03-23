setTimeout(function () {
        document.querySelector('.loader').classList.add('hidden');
    }, 2500)




const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navUlEl = document.querySelector('.main-nav');
    const navLi = document.querySelectorAll('.main-nav li');
    const circle = document.querySelectorAll('.circle');

    const h1El = document.querySelector('h1 a');
    const h1Top = h1El.offsetTop; 

    const mq = window.matchMedia('(min-width: 750px)');

    const stickyHeader= () => {
        if (window.scrollY >= h1Top && mq.matches) {
            h1El.classList.add('fixed-h1');
            navUlEl.classList.add('fixed-nav');
        } else {
            h1El.classList.remove('fixed-h1');
            navUlEl.classList.remove('fixed-nav');
        }
    }

    window.addEventListener('scroll', stickyHeader);

    burger.addEventListener('click', function (){
        //animate burger icon
        burger.classList.toggle('open');
        //have nav appear
        navUlEl.classList.toggle('nav-open');

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