/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

/**
 * Initiate portfolio details lightbox
 */
const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-card',
    width: '90%',
    height: '90vh'
});

/**
 * Portfolio details slider
 */
new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev'
    }
});
  
/**
 * Portfolio details function slider by narae
 */
new Swiper('.function-slider', {
    slidesPerView: 'auto',
    speed: 400,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.function-swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev'
    }
});

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

/**
 * Back to top button
 */
let backtotop = select('.back-to-top')
if (backtotop) {
const toggleBacktotop = () => {
    if (window.scrollY > 100) {
    backtotop.classList.add('active')
    } else {
    backtotop.classList.remove('active')
    }
}
window.addEventListener('load', toggleBacktotop)
onscroll(document, toggleBacktotop)
}