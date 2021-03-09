/* 
Template name:  Donis HTML
Version:        1.0.0
Author:         SITL
Author url:     sitlbd.com
Developer:      Asif Mahmud
================================================= */

/* table of context
     01: wow js activition
     02: preloader
     03:  menu 
*/

(function($) {
    "use strict";

    /*  01: wow js activition
    ==================================== */
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true,
        scrollContainer: null
    });
    wow.init();


    /* 02: preloader
    ===================================== */

    $(window).on('load', function() {
        setTimeout(() => {
            $('.preloader').fadeOut()
        }, 250)
    })

    /* 03:  menu 
    =============================== */
    let menuDistanceFromTop = 150;
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= menuDistanceFromTop) {
            $('header').addClass('make_me_sticky');
        } else {
            $('header').removeClass('make_me_sticky');
        }
    });

    setTimeout(() => {
        $('.header-menu ').find('ul li').parent().parent().addClass('has-sub-item');
        $('.header-menu ').find(".has-sub-item").prepend('<span class="submenu-button"></span>');
    }, 0)

})($)