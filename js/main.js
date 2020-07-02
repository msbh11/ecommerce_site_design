(function($) {
    "use strict";

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767"
    });


    $('.slider-active').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['Back', 'Next'],
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
               
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    });
    

    $('.product-active').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        navText: ['Back', 'Next'],
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },

            600: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    $('.brand-active').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2
            },
            450:{
                items: 3
            },
            600: {
                items: 4
            },
            
            1000: {
                items: 5
            }
        }
    })
//select 
$('select').niceSelect();




})(jQuery);