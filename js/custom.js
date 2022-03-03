$(function(){
  // !banner slider
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
  });
      
  // !SERVICE-SLIDER
  $('.service-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
  });
  // !BLOG SLIDER
  $('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: '.right',
    prevArrow: '.left',
    speed: 2000,
    centerMode: true,
    centerPadding: false,
    autoplaySpeed: 1000,
  });
  
  // ? VIDEO
  $('.venobox').venobox(); 


  // ?COUNTER
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  // ?FILTER
    var containerEl = document.querySelector('.gallery-main');

    var mixer = mixitup(containerEl);
      
  });