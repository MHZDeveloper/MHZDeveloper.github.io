$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $('.scroll-animations').addClass('animated fadeInUp');
    }
});