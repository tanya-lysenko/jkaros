$(function () {

    $("#mobile-menu").click(function () {
        $('.side-menu').addClass('open');
    });

    $("#close-menu").click(function () {
        $('.side-menu').removeClass('open');
    });


    $(".slider").bxSlider({
        mode: "horizontal",
        captions: false,
        pager: false
    });


    $(".tab-title li:not(.active)").click(function () {

        var target = $(this).find("a").attr("href");

        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");

        $(target).parent().find(".active").removeClass("active");
        $(target).addClass("active");
    });

    $(".tab-title li a").click(function (e) {
        e.preventDefault();
    });

    $(".tab-title li:first-child").click();

});
