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
    appendDots: '.slick__footer'
  });
})
