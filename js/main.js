$(document).ready(function(){

    var navHeight = $('.navbar').height();

// Change selected navbar item while scrolling
    if ($(window).width() < 1100) {
        $('.js-about').on('click', function(){
            $('html, body').animate({
                scrollTop: $('.about').offset().top - navHeight
            });
        });
        $('.js-experience').on('click', function(){
            $('html, body').animate({
                scrollTop: $('.experience').offset().top - navHeight
            });
        });
        $('.js-projects').on('click', function(){
            $('html, body').animate({
                scrollTop: $('.projects').offset().top - navHeight
            });
        });
        $('.js-contact').on('click', function(){
            $('html, body').animate({
                scrollTop: $('.contact').offset().top - navHeight
            });
        });
    }


// Slide panels up/down when navbar links are clicked
    if ($(window).width() >= 1100) {

        // Hide all sections except welcome on page load
        $('.js-section').hide();
        $('.welcome').show();

        // When a navbar link is clicked, slide to correct panel
        $('.js-nav-link').on('click', function(){
            $('.js-nav-link').removeClass('js-selected');
            $(this).addClass('js-selected');

            if ($(this).hasClass('js-welcome')) {
                $('.js-section').not('.welcome').slideUp(350);
            }
            else if ($(this).hasClass('js-about')) {
                $('.about').slideDown(350);
                if ($('.experience:hidden')) {
                    $('.js-section').not('.welcome, .about').slideUp(350);
                }
            }
            else if ($(this).hasClass('js-experience')) {
                $('.about, .experience').slideDown(350);
                if ($('.projects:hidden')) {
                    $('.js-section').not('.welcome, .about, .experience').slideUp(350);
                }
            }
            else if ($(this).hasClass('js-projects')) {
                $('.about, .experience, .projects').slideDown(350);
                if ($('.projects:hidden')) {
                    $('.js-section').not('.welcome, .about, .experience, .projects').slideUp(350);
                }
            }
            else if ($(this).hasClass('js-contact')) {
                $('.about, .experience, .projects, .contact').slideDown(350);
            }
        });

    }



});
