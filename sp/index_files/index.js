$(document).ready(function ($) {
    var header = $('header');
    if ($(window).width() > 991) {
        var lastScrollTop = 0, headerHeight = header.outerHeight(true);
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            if ($(window).scrollTop() > header.outerHeight(true)) {
                header.addClass('is-header-scroll');
                if (st <= lastScrollTop) {
                    $('body').addClass('is-header-fixed');
                } else {
                    $('body').removeClass('is-header-fixed');
                }
            } else {
                $('body').removeClass('is-header-fixed');
                header.removeClass('is-header-scroll');
            }
            lastScrollTop = st;
        });
    }
});


