jQuery(function($) {
    "use strict";
    /* You can safely use $ in this code block to reference jQuery */

    /*
     * remove the language text from the url after the lang change
     * because it is messing up the custom pathprocessor urls
     * inside the oeaw module
     * @returns {undefined}
     */
    function removeLangFromUrl(){
        if (history.pushState) {
            var url = window.location.href;     // Returns full URL
            if (url.indexOf("?language=") >= 0) {
                let chrPos = url.indexOf("?language=");
                var rmStr = url.substring(chrPos, chrPos + 12);
                url = url.replace(rmStr, '');
                url = url + rmStr;
                window.history.pushState({path:url},'',url);
            }
        }
    }
    /**
     * We have a special pathprocessor on the detail view
     * Because of this we need some URL modification
     * @returns {undefined}
     */
    function customUrlDecode(){
        var url = window.location.href;     // Returns full URL
        if (url.indexOf("browser/oeaw_detail/") >= 0 && 
                ( url.indexOf("%3A") >= 0 || url.indexOf(":") >= 0 ) ) {
            let chrPos = url.indexOf("/oeaw_detail/");
            let urlMain =  url.substring(0, chrPos + 13);
            var urlOther = url.substring(chrPos + 13, url.length);
            urlOther = urlOther.replace(/%3A/g, '/');
            urlOther = urlOther.replace(/:/g, '/');
            let finalUrl = decodeURIComponent(urlMain+urlOther);
            window.history.pushState({path:finalUrl},'',finalUrl);
        }
    }
 
    // Info menu scroll behaviour
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 220) {
            $('.info-menu-wrap').addClass('fixed-sidebar');
        } else {
            $('.info-menu-wrap').removeClass('fixed-sidebar');
        }
    });

    $(document).ready(function() {
        /**
         * Check that the user changed the language on the gui, if yes then we do 
         * a small api call, to change the drupal session language variable
         */
        $('.language-switcher-language-session-oeaw').on('click', function(event) {
            let lng = $(this).data('lang');
            $.ajax({
                url: '/browser/oeaw_change_lng/'+lng,
                type: "POST",
                success: function(data, status) {
                    location.reload();
                },
                error: function(message) {
                    return message;
                }
            });
            event.preventDefault();
            
        });
        
      //  removeLangFromUrl();
      //  customUrlDecode();
        
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