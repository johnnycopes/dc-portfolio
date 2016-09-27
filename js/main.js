$(document).ready(function(){

    // Hide all sections except welcome on page load
    $('.js-section').hide();
    $('.welcome').show();

    // When a navbar link is clicked, first hide all sections and then show the clicked link's corresponding section
    $('.js-nav-link').on('click', function(){
        $('.js-section').hide();
        $('.js-nav-link').removeClass('nav-link-selected');
        $(this).addClass('nav-link-selected');

        if ($(this).hasClass('js-welcome')) {
            $('.welcome').show();
        }
        else if ($(this).hasClass('js-about')) {
            $('.about').show();
        }
        else if ($(this).hasClass('js-skills')) {
            $('.skills').show();
        }
        else if ($(this).hasClass('js-experience')) {
            $('.experience').show();
        }
        else if ($(this).hasClass('js-projects')) {
            $('.projects').show();
        }
        else if ($(this).hasClass('js-contact')) {
            $('.contact').show();
        }
    });

});
