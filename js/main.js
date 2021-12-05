$('.our_values-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 11000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.activity-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    fade: true,
    autoplaySpeed: 11000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $( '.menu li a' ).on("click", function(){
    $('.toggler').click();
  });