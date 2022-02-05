$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-top',
    outClass: 'overlay-slide-out-bottom',
    inDuration: 2000,
    outDuration: 2000,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: true,
    timeoutCountdown: 6000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});


function colorHandler(self) {
  const slide = document.querySelector(".animsition-overlay-slide");

  // slide.style.transitionDelay = ".5s";
  slide.style.transitionDuration = "2s";

  if(self.id == "color-home"){
    slide.style.backgroundColor = "white";
  }else if(self.id == "color-work"){
    slide.style.backgroundColor = "#f0c8b6";
  }else if(self.id == "color-about"){
    slide.style.backgroundColor = "#cbb0ab";
  }else if(self.id == "color-blog"){
    slide.style.backgroundColor = "#817f95";
  }else if(self.id == "color-sayhello"){
    slide.style.backgroundColor = "#5c678a";
  }
}