$(window).scroll(function () {
    $(".fade").each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + 500) {
            $(this).removeClass("fade");
            $(".about-me").addClass("animated zoomIn");
            $(".skills").addClass("animated zoomIn");
            $(".card").addClass("animated zoomIn");
            $(this).fadeTo("slow", 1);
        }
    }
    )
})  