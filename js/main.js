$(function(){
    console.log('hi'); 

    // header Scroll
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });

    const swiper = new Swiper('.visualSlider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect : 'fade', // 페이드 효과 사용
      // If we need pagination
      pagination: {
        el: '.visual-pagination',
      },
      autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false

        delay : 2500,   // 시간 설정
      
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      
      },
    });

    const swiper1 = new Swiper('.sec2Slider', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
        freeMode : true, // 슬라이드 넘길 때 위치 고정 여부
        spaceBetween: 24, // 슬라이드 사이 여백
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false

            delay : 2500,   // 시간 설정
          
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
          
          },

      });

    const swiper2 = new Swiper('.sec3Slide', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
        // spaceBetween: 25, // 슬라이드 사이 여백
        autoHeight : true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false

        delay : 2500,   // 시간 설정
        
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        
        },

    });


    const swiper3 = new Swiper('.sec4Slide', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
        // spaceBetween: 25, // 슬라이드 사이 여백
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false

            delay : 2500,   // 시간 설정
            
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
            
            },
    });

    
    //menu On/off
    $('.menuBtn').on('click', function(){
        $('.header .navBox').addClass('on'); 
        $('.menuBg').addClass('on');
    });

    $('.menuClose').on('click', function(){
        $('.header .navBox').removeClass('on'); 
        $('.menuBg').removeClass('on');
    });


    // menuMove
    $('.header .navBox ul > li > a').on('click', function(e) {
      e.preventDefault();
      const thisIndex = $(this).parent().index();
      let offset = $('.contents > div').eq(thisIndex).offset().top; 
      console.log(offset);

      $('html').animate( { scrollTop : offset }, 500 );

      $('.header .navBox').removeClass('on');
      $('.menuBg').removeClass('on'); 
    });

    $('.more').on('click', function(e) {
      e.preventDefault(); 
      let offset = $('.sec5Area').offset().top; 
      $('html').animate( { scrollTop : offset }, 500 );

    });
});