jQuery(function($) {
    "use strict";
    /* You can safely use $ in this code block to reference jQuery */

    // Info menu scroll behaviour
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 53) {
            $('.info-menu-wrap').addClass('fixed-sidebar');
        } else {
            $('.info-menu-wrap').removeClass('fixed-sidebar');
        }
    });

    $(document).ready(function() {
		// Info menu new page load behaviour
        if ($(document).scrollTop() >= 53) {
            $('.info-menu-wrap').addClass('fixed-sidebar');
        } else {
            $('.info-menu-wrap').removeClass('fixed-sidebar');
        }
        // Add smooth scrolling to inside-page links
        $("a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Store hash
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 160
                }, 800, function() {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    //window.location.hash = hash;
                });
            } // End if
        });

        // Add smooth scrolling to outside-page links
        if (window.location.hash !== "") {
            // Store hash
            var hash = window.location.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 90
            }, 800, function() {});
        } // End if  

    });

    /* You can safely use $ in this code block to reference jQuery */
});