const mySite = {};

mySite.htmlEl = document.querySelector('html')
mySite.htmlEl.classList.add('no-scroll');

mySite.loader = document.querySelector('.loader');

mySite.startLoader = () => {
    mySite.loader.classList.add('hidden');
    mySite.htmlEl.classList.remove('no-scroll');

}

mySite.navigation = () => {   
    const navButton = document.querySelector('.circles-button');
    const navUlEl = document.querySelector('.mobile-links');
    const navLi = document.querySelectorAll('.mobile-links li');
    const circle = document.querySelectorAll('.circle');
    const htmlEl = document.querySelector('html');

    const menuLinks = document.querySelectorAll('.mobile-links li a');

    //open / close mobile menu
    const mobileMenu = () => {
        navButton.classList.toggle('open');
    
        htmlEl.classList.toggle('no-scroll');

        //have nav appear
        navUlEl.classList.toggle('nav-open');
    
        circle[0].classList.toggle('blue');
        circle[1].classList.toggle('blue');
    
        //animate li's
        navLi.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    };

    navButton.addEventListener('click', mobileMenu);

    menuLinks.forEach((link) => {
        link.addEventListener('click', mobileMenu);
    })

    //sticky header + nav

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
}

mySite.init = () => {
    setTimeout(mySite.startLoader, 2500);
    mySite.navigation()
}

mySite.init();