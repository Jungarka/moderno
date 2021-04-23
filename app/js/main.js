$(function(){
    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true,
    });

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
         
    });

    var mixer = mixitup('.products__inner-box');
});