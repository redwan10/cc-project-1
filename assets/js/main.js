(function($){
    "use strict";
    // Mobile menu
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });





    $(document).ready(function() {
      $('select').niceSelect();
    });




         // Image Slider 
  $('.slider-active').slick({
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  // Category Slider
  $('.category-slider-active').slick({
    dots: false,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    arrows: true,
    autoplay: false,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },{
        breakpoint: 1350,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },{
        breakpoint: 992,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


})(jQuery);







//  var acc = document.getElementsByClassName("dropdown");
//  var i;
//  for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var panel = this.nextElementSibling;
//      if (panel.style.display === "block") {
//        panel.style.display = "none";
//      } else {
//        panel.style.display = "block";
//      };
//    });
//  }



