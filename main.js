$(function (){

    // Adjust slider Height

    let winH = $(window).height(),
        upperH = $('.uppr-bar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - ( upperH + navH ));


    // featured-work

    $('.featured-work ul li').on('click' , (e) => {

        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.row .col-sm').hide()
        }
        
    });


});