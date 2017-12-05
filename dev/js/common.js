$(document).ready(function () {



    //$('[data-remodal-id=modal]').remodal();


    //materializecss modal init
    //$('.modal').modal();

    //loading of header content
    //$("header").load("templates/header.html", function () {});
    //$("footer").load("templates/footer.html");

    // meterializecss droppDown
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        gutter: -110,
        stopPropagation: false // Stops event propagation
    });
    // slide and swipe menu init
    $('nav').slideAndSwipe();

    $(".ssm-toggle-nav").on("click", function () {
        $("body").toggleClass("body_OH");
    });

    document.addEventListener("keydown", keyDownTextField, false);

    function keyDownTextField(e) {
        var keyCode = e.keyCode;
        if (keyCode == 27) {}
    }

    // setting for slick-sliders
    $('.start_slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        cssEase: 'linear'

    });

    $('.slider-another').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        fade: false,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
                },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                }

            ]

    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-for').slickLightbox({
        src: 'href',
        itemSelector: 'a'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        arrows: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                }

            ]
    });




    // pollyfil for css property position sticky
    $('aside').Stickyfill();
    //    $("aside").sticky({
    //        topSpacing: 80
    //    });
    //    $('aside').on('sticky-start', function () {
    //        console.log("Started");
    //    });
    //    $('aside').on('sticky-end', function () {
    //        console.log("Ended");
    //    });
    //    $('aside').on('sticky-update', function () {
    //        console.log("Update");
    //    });
    //    $('aside').on('sticky-bottom-reached', function () {
    //        console.log("Bottom reached");
    //    });
    //    $('aside').on('sticky-bottom-unreached', function () {
    //        console.log("Bottom unreached");
    //    });
    //    $("aside").unstick();


    //materializecss accordion (collapsible)
    $('.collapsible').collapsible();




    //WOW init
    new WOW().init();




    //    function setWidth() {
    //        var windowWidth = window.screen.width;
    //        $(".area-bag").css("with", windowWidth);  
    //    }
    //    setWidth();
    //    window.onresize = function() {
    //        setWidth();
    //    }


    //Form VAlidation 

    //    $("#js_register_form").validate({
    //        rules: {
    //            form_name: {
    //                required: true
    //            },
    //            form_email: {
    //                required: true,
    //                email: true
    //            },
    //            form_phone: {
    //                required: true,
    //                minlenhth: 10,
    //                digits: true
    //            },
    //        },
    //        messages: {
    //            form_name: {
    //                required: "Обязательное поле"
    //            },
    //            form_email: {
    //                required: "Обязательное поле",
    //                email: "Введите корректный Email"
    //            },
    //            form_phone: {
    //                required: "Обязательное поле"
    //            }
    //        },
    //        focusCleanup: true,
    //        focusInvalid: false
    //    });


    //phone input mask
    $("#form_phone").mask("(999) 999-99-99");

    // parallax init
    //    $('.parallax').parallax();


    // buttton UP
    // button arrow to UP

    $("body").append("<button class='btn_up'/>");

    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if ($(window).scrollTop() > 50) {
            $(".btn_up").addClass("activeB");
        } else {
            $(".btn_up").removeClass("activeB");
        }

    });

    $(".btn_up").on("click", function (e) {
        e.preventDefault();
        $(this).removeClass("activeB");
        $("body").animate({
            'scrollTop': 0
        }, 800);
        $("html").animate({
            'scrollTop': 0
        }, 800);

    });


});
