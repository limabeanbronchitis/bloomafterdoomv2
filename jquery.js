$(window).bind('scroll', function (e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.layer-2').css('top', (0 - (scrolled * .5)) + 'px');
    $('.layer-3').css('top', (0 - (scrolled * .75)) + 'px');
    $('.alien-1').css('top', (400 - (scrolled * .8)) + 'px');
    $('.alien-2').css('top', (200 - (scrolled * .6)) + 'px');
    $('.alien-3').css('top', (500 - (scrolled * .4)) + 'px');
    $('.alien-4').css('top', (600 - (scrolled * .5)) + 'px');
    $('.alien-5').css('top', (600 - (scrolled * .7)) + 'px');
    $('.alien-6').css('top', (400 - (scrolled * .7)) + 'px');
    $('.alien-7').css('top', (600 - (scrolled * .5)) + 'px');
    $('.alien-8').css('top', (200 - (scrolled * .2)) + 'px');
    $('.alien-9').css('top', (200 - (scrolled * .4)) + 'px');
}