jQuery(function ($) {
"use strict"; 
/* You can safely use $ in this code block to reference jQuery */

$(document).scroll(function() {
  if ($(document).scrollTop() >= 53) {
    $('.info-menu-wrap').addClass('fixed-sidebar');
  } else {
    $('.info-menu-wrap').removeClass('fixed-sidebar');
  }
});

$(document).ready(function(){
	
  if ($(document).scrollTop() >= 53) {
    $('.info-menu-wrap').addClass('fixed-sidebar');
  } else {
    $('.info-menu-wrap').removeClass('fixed-sidebar');
  }	
	
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 160
      }, 800, function(){   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  
	// Make sure this.hash has a value before overriding default behavior
	if (window.location.hash !== "") {
	  // Store hash
	  var hash = window.location.hash;
	  $('html, body').animate({
	    scrollTop: $(hash).offset().top - 90
	  }, 800, function(){   
	  });
	} // End if  
  
});

/* You can safely use $ in this code block to reference jQuery */
});