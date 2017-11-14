jQuery(function($) {
    "use strict";
    /* You can safely use $ in this code block to reference jQuery */

    // Info menu scroll behaviour
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 220) {
            $('.info-menu-wrap').addClass('fixed-sidebar');
        } else {
            $('.info-menu-wrap').removeClass('fixed-sidebar');
        }
    });

    $(document).ready(function() {
		// Info menu new page load behaviour
        if ($(document).scrollTop() >= 220) {
            $('.info-menu-wrap').addClass('fixed-sidebar');
        } else {
            $('.info-menu-wrap').removeClass('fixed-sidebar');
        }
        // Check if Drupal admin bar exists
		if ($("body").hasClass("toolbar-horizontal")) {
		    var offsetDiv = 90;
		} else {
			var offsetDiv = 15;
		}         
        // Add smooth scrolling to inside-page links
        $("a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Store hash
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - offsetDiv
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
                scrollTop: $(hash).offset().top - 15
            }, 800, function() {});
        } // End if

        
        //enable bootstrap tooltip
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });

        //Cite-this widget
        $('#cite-tooltip-mla').tooltip(); 
        $('#cite-tooltip-mla').on('click', function(event) {
            if (!$(this).hasClass('tooltip-active')) {
                $(this).addClass('tooltip-active');
            } else {
                $(this).removeClass('tooltip-active');
                $(this).tooltip('hide');
            }
        });
        
        $('#cite-tooltip-mla').on('hidden.bs.tooltip', function () {
            $(this).removeClass('tooltip-active');
        });
        
        //APA
        $('#cite-tooltip-apa').tooltip(); 
        $('#cite-tooltip-apa').on('click', function(event) {
            if (!$(this).hasClass('tooltip-active')) {
                $(this).addClass('tooltip-active');
            } else {
                $(this).removeClass('tooltip-active');
                $(this).tooltip('hide');
            }
        });
        
        $('#cite-tooltip-apa').on('hidden.bs.tooltip', function () {
            $(this).removeClass('tooltip-active');
        });
        
        //CMS
        $('#cite-tooltip-cms').tooltip(); 
        $('#cite-tooltip-cms').on('click', function(event) {
            if (!$(this).hasClass('tooltip-active')) {
                $(this).addClass('tooltip-active');
            } else {
                $(this).removeClass('tooltip-active');
                $(this).tooltip('hide');
            }
        });
        
        $('#cite-tooltip-cms').on('hidden.bs.tooltip', function () {
            $(this).removeClass('tooltip-active');
        });

    });

    /* You can safely use $ in this code block to reference jQuery */
});