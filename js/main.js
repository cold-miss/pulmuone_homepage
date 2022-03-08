// main.js

// 모바일 토글 메뉴
$(function(){

  $('#gnb-toggle-btn').click(function(){
    $('#gnb').toggleClass('on');
  })

  //  사이트맵 버튼
  
  // $('#site-map-btn').on('click', function(){
  //   $('.sitemap-modal').addClass('on');
  // })

  $('#site-map-btn').click(function(){
    $('.sitemap-modal').addClass('on');
  })


  $('#sitemap-modal-close').click(function(){
    $('.sitemap-modal').removeClass('on');
  })

  
  
})

