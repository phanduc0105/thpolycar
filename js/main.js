(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
            if(parseFloat($(this).innerWidth()) >= 992){
                $('#navbar-categories-products').show();
                $('#navbar-categories-blogs').hide();
            }else{
                $('#navbar-categories-products').hide();
                $('#navbar-categories-blogs').show();
            }
        } else {
            $('.sticky-top').css('top', '-100px');
            if(parseFloat($(this).innerWidth()) >= 992){
                $('#navbar-categories-products').hide();
                $('#navbar-categories-blogs').show();
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // product
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        loop: true,
        center: true,
        dots: true,
        nav: true,
        lazyLoad: true,
        navText : [
            '<div class="btn-slider-prev float-start"><i class="bi bi-chevron-left"></i></div>',
            '<div class="btn-slider-next float-end"><i class="bi bi-chevron-right"></i></div>'
        ],
        responsive: {
			0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:5
            }
        }
    });

    $(".left-menu-container-child").hover(
        function() {
            var left = parseInt($("#left-menu-main").innerWidth()) + parseInt($("#left-menu-main").css("padding-right")) + parseInt($(".container").css("margin-left"));
            $("#"+$(this).data("submenu")).show(500);
            $("#"+$(this).data("submenu")).css("left", left + "px");
        }, function(){
            $("#"+$(this).data("submenu")).hide(100);
        }
    );
    
    $(".left-menu-item").hover(
        function(){
            var left = parseInt($("#left-menu-main").innerWidth()) + parseInt($("#left-menu-main").css("padding-right")) + parseInt($(".container").css("margin-left"));
            $(this).show(500);
            $("#" + $(this).data("mainmenu") + " .nav-link").addClass("active");
            $(this).css("left", left + "px");
        },function(){
            $(this).hide();
            $("#" + $(this).data("mainmenu") + " .nav-link").removeClass("active");
        }
    );

    $(window).resize(function(){
        var left = parseInt($("#left-menu-main").innerWidth()) + parseInt($("#left-menu-main").css("padding-right")) + parseInt($(".container").css("margin-left"));
        $(".left-menu-item").css("left", left + "px");

        if(parseFloat($(this).innerWidth()) <= 992){
            $('#navbar-categories-products').hide();
            $('#navbar-categories-blogs').show();
        }else{
            if ($(this).scrollTop() > 300) {
                $('#navbar-categories-products').show();
                $('#navbar-categories-blogs').hide();
               
            } else {
                $('#navbar-categories-products').hide();
                $('#navbar-categories-blogs').show();
            }
        }
    });

    $("#btn-navbar-collapse").click(function(){
        $("#navbarCollapseSearch").collapse({toggle: false}).collapse('hide');;
    });

    $("#btn-navbar-search").click(function(){
        $("#navbarCollapse").collapse({toggle: false}).collapse('hide');;
    });
})(jQuery);

