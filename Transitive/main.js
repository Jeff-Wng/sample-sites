$(window).on("scroll", function() {
    $("header").addClass("scroll-bg");
    $("header").removeClass("opacity-0");
    $("header").addClass("opacity-1");
});

$(".stack").on("click", function() {
    $(".sideNav").addClass("slideOut");
});

$(".fa-times").on("click", function () {
    $(".sideNav").addClass("slideIn");
    $(".sideNav").removeClass("slideOut");
    console.log('asasd"');
});