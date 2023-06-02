$(document).ready(function ($) {

    //===========================count up======================
   /* $('.counter-up').each(function () {

        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

            {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });

    });*/
        /*----------- 14. Counter Up ----------*/
        $(".counter-up").counterUp({
          delay: 10,
          time: 1000,
      });
  
    //==================
    //=================Mixitup=============
    var mixer = mixitup('.project-content',
        {
            load: {
                filter: '.engineering'
            }
        });
    //=======================================
    //============Slick Slider================
    //------------Team Slider-----------------
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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
      //-----------------Client Slider---------------
      $('.clients-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1217,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
            {
              breakpoint: 1021,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll:3
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      //-----------------Testimonial Slider---------------
      $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        infinite: true,
      });
    //========================================
      //=================Progress Bar=========================
      /*----------- 19. Progress Bar Animation ----------*/
      $('.skillbar').waypoint(function() {
        $('.skillbar').skillBars({
          from: 0,
          speed: 2000,
          interval: 100,
          decimals: 0,
      });
      }, { offset: '75%' });

            //Skill Bar
         
      //==============================================
}(jQuery));