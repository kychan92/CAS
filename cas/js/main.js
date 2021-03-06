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
      
      if (window.innerWidth < 800) {
        $('#ibm-content-nav').hide();
		
		$('.cas-logo').css('margin-top', '50px');
      }else{
        $('#ibm-content-nav').show();
		$('.cas-logo').css('margin-top', '');
      }
      
      
      //crappy code to make video and such responsive.
      var h = $('video').css('height');
      
      $('#header-home').css('height', h);
      $('#header-opportunities').css('height', h);
      $('#header-innovation').css('height', h);
      $('#header-research').css('height', h);
    }, 500);
	
	
	$('img.hoverModal').hover(function() {
		var a = $(this);
		
		a.attr('psrc', a.attr('src'));
		a.attr('src', 'img/hoverModal.png');
	}, function() {
		var a = $(this);
		
		a.attr('src', a.attr('psrc'));
	});
	
});