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
    
    $(window).scroll(function(e) {
      if ($(window).scrollTop() > 10) {
        $('#ibm-content-nav').css('padding', 0).css('background', '#000');
      }else{
        $('#ibm-content-nav').css('padding', '').css('background', '');
      }
    });
});