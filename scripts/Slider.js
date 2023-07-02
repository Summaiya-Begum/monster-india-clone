$(document).ready(function () {
  
  $("#HomeSlider").slick({
   
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    centerMod:false,
  initialSlide:0,
  arrows:false,
  
  autoplaySpeed: 2000,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('#HomeBanner').slick(
    {
      autoplay: true,
      arrows:false,
      autoplaySpeed: 4000,
      
    },
  );

  $('.homeWorkFrom').slick({
   
    slidesToShow: 3,
    adaptiveHeight: true,
    speed: 300,
   

  });
  $('#sideAdd2').slick(
    {
      autoplay: true,
      arrows:false,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      fade: true,
      cssEase: 'linear'
    },
  );
  
});
