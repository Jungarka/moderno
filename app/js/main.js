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
        responsive: [
            {
              breakpoint: 1870,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 1445,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 985,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
          ]
        
    });

    $('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    $('.product-one__tabs .tab, .settings__tabs .tab, .profile__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs, .profile__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tabs, .profile__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input[type="file"], select').styler();

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();        
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');        
    });

    $(".ajax-contact-form").submit(function() {
      var str = $(this).serialize();
    
      $.ajax({
        type: "POST",
        url: "/blocks/sendmail.php",
        data: str,
        success: function(msg) {
          if(msg == 'OK') {
            toastr.options = {
              "closeButton": false,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-right",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            }
            toastr["success"]("Сообщение отправлено!")
          } else {
            result = msg;
          }
        }
      });
      return false;
    });

    var mixer = mixitup('.products__inner-box');
});
