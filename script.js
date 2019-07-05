// $(document).ready(function() {

//     $('.js--scroll-to-projects').click(function() {
//         $('html, body').animate({ scrollTop: $('.project-section').offset().top},350);
//     });

// });

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});