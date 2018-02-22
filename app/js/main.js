var tpj = jQuery;
var revapi24;
tpj(document).ready(function () {
  if (tpj("#rev_slider_24_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_24_1");
  } else {
    revapi24 = tpj("#rev_slider_24_1").show().revolution({
      sliderType: "standard",
      jsFileLocation: "revolution/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        bullets: {
          enable: true,
          hide_onmobile: false,
          style: "bullet-bar",
          hide_onleave: false,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 50,
          space: 5,
          tmp: ''
        },
        arrows: {
          style: "uranus",
          enable: true,
          hide_onmobile: false,
          hide_onleave: false,
          tmp: '',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 10,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 10,
            v_offset: 0
          }
        }
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      shadow: 0,
      spinner: "spinner1",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "0px",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });
  }
  if (revapi24) revapi24.revSliderSlicey();
});
// JavaScript Document


$(document).ready(function () {

  'use strict';
  /************************************************************************************ CAROUSEL SLIDER STARTS */

  var owl = $('.services-carousel');
  owl.owlCarousel({

    autoplay: false,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    mouseDrag: true,
    smartSpeed: 500,
    margin: 0,
    loop: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  var owl = $('.services-carousel-02');
  owl.owlCarousel({

    autoplay: false,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    mouseDrag: true,
    smartSpeed: 500,
    margin: 0,
    loop: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  var owl = $('.team-carousel-02');
  owl.owlCarousel({

    autoplay: false,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    mouseDrag: true,
    smartSpeed: 500,
    margin: 0,
    loop: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  var owl = $('.clients-carousel');
  owl.owlCarousel({

    autoplay: false,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    mouseDrag: true,
    smartSpeed: 500,
    margin: 0,
    loop: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  var owl = $('.simple-pics-carousel');
  owl.owlCarousel({

    autoplay: false,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    mouseDrag: true,
    smartSpeed: 500,
    margin: 0,
    loop: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  var owl = $('.product-carousel');
  owl.owlCarousel({
    autoplay: false,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    mouseDrag: true,
    smartSpeed: 500,
    margin: 0,
    loop: true,
    singleItem: true,
    navText: [
      "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  /************************************************************************************ SLIDER CAROUSEL ENDS */
  $('.owl-carousel-list-our').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 20,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
  /************************************************************************************ STICKEY NAV STARTS */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('nav').addClass("sticky");
    } else {
      $('nav').removeClass("sticky");
    }
  });


  /************************************************************************************ STICKEY NAV ENDS */

  /************************************************************************************ BX SLIDER STARTS */

  $('.bxslider').bxSlider({
    pagerCustom: '.bx-pager'
  });

  /************************************************************************************ BX SLIDER ENDS */

  /************************************************************************************ TEAM CAROUSEL STARTS */

  if ($('.team-carousel').length > 0) {

    $('.team-carousel').slick({
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow: $('#team-slideshow-prev'),
      nextArrow: $('#team-slideshow-next')
    });
  }

  /************************************************************************************ TEAM CAROUSEL ENDS */




  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });


  $('#preloader').fadeOut('slow');


}); //$(document).ready(function () {
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.nav_bar').css('background-color', 'black');
  } else {
    $('.nav_bar').css('background-color', 'transparent');
  }
});