document.querySelector('html').classList.add('no-scroll');

setTimeout(function () {
        document.querySelector('.loader').classList.add('hidden');
        document.querySelector('html').classList.remove('no-scroll');
    }, 2500)

const navSlide = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const navUlEl = document.querySelector('.main-nav');
    const navLi = document.querySelectorAll('.main-nav li');
    const circle = document.querySelectorAll('.circle');
    
    const htmlEL = document.querySelector('html');

    
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

    mobileNav.addEventListener('click', function (){
        //animate burger icon
        mobileNav.classList.toggle('open');

        htmlEL.classList.toggle('no-scroll');
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