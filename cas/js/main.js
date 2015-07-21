// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    $('#ibm-content-nav').css('transition', '.5s');
    
    
    //  fade navigator.
    $(window).scroll(function(e) {
      var nav = $('#ibm-content-nav');
      
      if ($(window).scrollTop() > 10) {
        if (nav.hasClass('design-common-tabs-black')) {
            nav.attr('data-blackOnWhite', true);
            
            // temporarily change style.
            nav.removeClass('design-common-tabs-black').addClass('design-common-tabs-white');
        }
        
        //  switch state.
        nav.css('padding', 0).css('background', '#000');
      }else{
        //  reset states.
        nav.css('padding', '').css('background', '');
        
        if (nav.attr('data-blackOnWhite')) {
            // temporarily change style.
            nav.removeClass('design-common-tabs-white').addClass('design-common-tabs-black');
        }
      }
    });
    
    
    //  handling popups
    $('.popup-actvate').click(function() {
      var itemId  = $(this).attr('href'),
          item    =  $(itemId)
      ;
      
      if (item.hasClass('hide')) {
        item.removeClass('hide');
      }else{
        item.addClass('hide');
      }
    });
    
    window.setInterval(function() {
      var videos = $('video');
      
      if (videos.length > 0) {
        if (videos.get(0).paused) {
          videos.get(0).play();
        }
      }
    }, 1000);
});