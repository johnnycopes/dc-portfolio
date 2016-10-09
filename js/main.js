$(document).ready(function(){

    var windowWidth = $(window).width();

// Change selected navbar item on touch
    if (windowWidth < 1100) {
        $('.js-about').on('click', function(){
            $('html, body').animate({
                scrollTop: $('.about').offset().top
            });
        });
        $('.js-experience').on('click', function(){
            $('html, body').animate({
                scrollTop: $('.experience').offset().top
            });
        });
        $('.js-projects').on('click', function(){
            $('html, body').animate({
                scrollTop: $('.projects').offset().top
            });
        });
        $('.js-contact').on('click', function(){
            $('html, body').animate({
                scrollTop: $('.contact').offset().top
            });
        });
    }

// Change highlighted navbar item on scroll
    $(window).scroll(function(){
        var navHeight = $('.navbar').height();
        var scroll = $(window).scrollTop();
        var welcome = $('.welcome').offset().top;
        var about = $('.about').offset().top;
        var experience = $('.experience').offset().top;
        var projects = $('.projects').offset().top;
        var contact = $('.contact').offset().top;
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();

        if (scroll >= welcome) {
            $('.js-nav-link').removeClass('link-selected');
        }
        if (scroll >= about - navHeight) {
            $('.js-about').addClass('link-selected');
        }
        if (scroll >= experience - navHeight) {
            $('.js-experience').addClass('link-selected');
            $('.js-about').removeClass('link-selected');
        }
        if (scroll >= projects - navHeight) {
            $('.js-projects').addClass('link-selected');
            $('.js-experience').removeClass('link-selected');
        }
        if (scroll >= contact - navHeight) {
            $('.js-contact').addClass('link-selected');
            $('.js-projects').removeClass('link-selected');
        }
        if (scroll === documentHeight - windowHeight) {
            $('.js-contact').addClass('link-selected');
            $('.js-projects').removeClass('link-selected');
        }
    });

// Slide panels up/down when navbar links are clicked
    if (windowWidth >= 1100) {
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
