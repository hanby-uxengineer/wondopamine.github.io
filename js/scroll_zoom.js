$(document).ready(function() {
  let lastScrollTop = 0;
  let p01Top = $('#p01').offset().top;
  let p02Top = $('#p02').offset().top;
  let p03Top = $('#p03').offset().top;
  let p01Bottom = p01Top + ($(window).height() * 1/2);
  let p02Bottom = p02Top + ($(window).height() * 1/2);
  let p03Bottom = p03Top + ($(window).height() * 1/2);

  $(window).resize(function() {
    p01Top = $('#p01').offset().top;
    p02Top = $('#p02').offset().top;
    p03Top = $('#p03').offset().top;
    p01Bottom = p01Top + ($(window).height() * 1/2);
    p02Bottom = p02Top + ($(window).height() * 1/2);
    p03Bottom = p03Top + ($(window).height() * 1/2);
  });

  $(window).scroll(function(event) {
    const scrollTop = $(this).scrollTop();
    let brightnessVal = 50;
    let borderWidthVal = 0;
    let borderRadiusVal = 0;
    let marginLeftVal = 0;
    // console.log(scrollTop, p01Top, p03Top);

    if (scrollTop > lastScrollTop) {   // scroll down
      brightnessVal = 50;
      borderWidthVal = 0;
      borderRadiusVal = 0;
      marginLeftVal = 0;
      if(scrollTop >= p01Top) {
        console.log(brightnessVal);
        $('#p01Thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p01').children('.scroll-zoom').css('border-width', borderWidthVal+'em');
        $('#p01Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p01End').css('margin-left', marginLeftVal+'em');
      } if(scrollTop >= p02Top) {
        $('#p02Thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p02').children('.scroll-zoom').css('border-width', borderWidthVal+'em');
        $('#p02Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p02End').css('margin-left', marginLeftVal+'em');
      } if(scrollTop >= p03Top) {
        $('#p03Thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p03').children('.scroll-zoom').css('border-width', borderWidthVal+'em');
        $('#p03Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p03End').css('margin-left', marginLeftVal+'em');
      }
    } else {  // scroll up
      brightnessVal = 100;
      borderWidthVal = 4.25;   // 9.25
      borderRadiusVal = 30;
      marginLeftVal = 4.5;  // 4.5
      if(scrollTop < p01Bottom) {
        $('p01Thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p01').children('.scroll-zoom').css('border-width', borderWidthVal+'em');
        $('#p01Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p01End').css('margin-left', marginLeftVal+'em');
      } if(scrollTop < p02Bottom) {
        $('#p02Thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p02').children('.scroll-zoom').css('border-width', borderWidthVal+'em');
        $('#p02Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p02End').css('margin-left', marginLeftVal+'em');
      } if(scrollTop < p03Bottom) {
        $('#p03Thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p03').children('.scroll-zoom').css('border-width', borderWidthVal+'em');
        $('#p03Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p03End').css('margin-left', marginLeftVal+'em');
      }
    }
    lastScrollTop = scrollTop;
  });
});

function toTop() {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
}
