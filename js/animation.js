$(window).scroll(function () {
    $('.fade').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();

        $(this).css('opacity', '0');

        if (imagePos < topOfWindow + 500) {
            $('.about-me').addClass(' animated fadeInLeft');
            $('.skills').addClass('animated fadeInRight');
            $('.card').addClass("animated zoomIn");
            $(this).fadeTo("slow", 1);
        }
    }
    )
})  