window.onload = function () { //function to scroll the page to top
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    });
};

function totop() { //function to scroll the page to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() { //function to open the mobile menu
    let mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.style.display === 'none' ? mobileMenu.style.display = 'block' : mobileMenu.style.display = 'none'
}