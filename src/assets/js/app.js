// import Swiper from "swiper";

$(document).ready(() => {
    $('.cases__slick .slick-content').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.cases__slick .slick-prev'),
        nextArrow: $('.cases__slick .slick-next'),
        dots: true,
        speed: 500,
        useCSS: true,
        accessibility: true,
        adaptiveHeight: false,
        appendDots: '.slick__footer',
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }],
        initialSlide: 1,
        centerMode: true,
        centerPadding: 0
    });
    $('.banner__frases').slick({
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1700,
        speed: 2000,
        vertical: true,
        touchMove: false,
        swipe: false,
    });
    $('.swiper-button-prev').on('click', function() {
        mySwiper.allowSlidePrev = true;
        mySwiper.slidePrev();
    });

    $('.swiper-button-next').on('click', function() {
        mySwiper.allowSlideNext = true;
        mySwiper.slideNext();
    });

    let mySwiper = new Swiper('.blog-slider', {
        direction: 'vertical',
        spaceBetween: 30,
        effect: 'fade',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 3000,
        keyboard: true,
        forceToAxis: true,
        observer: true,
        observeParents: true,
        allowSlideNext: true,
        mousewheel: {
            invert: false,
        },

        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        },
        breakpoints: {
            600: {
                direction: 'horizontal',
            }
        }
    })

});