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
    })
    $('.banner__frases').slick({
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        touchMove: false,
        swipe: false
    })
})