jQuery(function ($) {
    "use strict";
    /* You can safely use $ in this code block to reference jQuery */
    
    //Expand or collapse summary on results view
    $(document).delegate(".res-act-button-summary", "click", function (e) {
        e.preventDefault();
        if ($(this).hasClass('closed')) {
            let id = e.target.id;
            let acdhid = id.replace('show_summary_', '');
            let summary_id = id.replace('show_summary_', 'summary_');
            $('#' + summary_id).show();
            $('#' + id).hide();
            $('#res-property-desc-' + acdhid).fadeIn(200);
            $(this).removeClass('closed');
            $(this).addClass('open');
            $(this).children('i').text('remove');
            e.preventDefault();
        } else {
            let id = e.target.id;
            let acdhid = id.replace('summary_', '');
            let summary_id = id.replace('summary_', 'show_summary_');
            $('#' + summary_id).show();
            $('#' + id).hide();
            $('#res-property-desc-' + acdhid).fadeOut(200);
            $(this).removeClass('open');
            $(this).addClass('closed');
            $(this).children('i').text('add');
            e.preventDefault();
        }
        e.preventDefault();
    });

    //Toggle expert or basic view on single resource
   function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function removeCookie(cname) {
        document.cookie = cname+'=; Max-Age=-99999999;';  
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
   }
       

   var cookiesAccepted = getCookie("cookiesAccepted");
    var cookiesAcceptedNecessary = getCookie("cookiesAcceptedNecessary");
    if (!cookiesAccepted && !cookiesAcceptedNecessary) {
        $("#cookie-overlay").fadeIn(100);
    }
    
     //Accept cookies
    $(".cookie-accept-btn").on('click', function () {
        removeCookie("cookiesAcceptedNecessary");
        setCookie("cookiesAccepted", true, 180);
        $("#cookie-overlay").fadeOut(100);
    });

    $(".cookie-accept-necessary-btn").on('click', function () {
        removeCookie("cookiesAccepted");
        setCookie("cookiesAcceptedNecessary", true, 180);
        //Once the function requireConsent is executed then no tracking request will be sent to Matomo and no cookies will be set.
        _paq.push(['requireConsent']);
        $("#cookie-overlay").fadeOut(100);
    });

    //$("#copy-url-tooltip").tooltip(); 
    $(document).delegate("#copyLinkInputBtn", "click", function (e) {
        var URLtoCopy = $(this).data("copyuri");
        var result = copyToClipboard(URLtoCopy);
        if (result) {
            $('#copyLinkTextfield').val("URL is copied to clipboard!");
            setTimeout(function () {
                $('#copyLinkTextfield').val(URLtoCopy);
            }, 2000);
        }
    });
    
    //Copy cite content
    $(document).delegate("#copy-cite-btn", "click", function (e) {
        var URLtoCopy = $('.cite-content.selected').text();
        var result = copyToClipboard(URLtoCopy);
        if (result) {
            //alert('copied');
            $('#copy-cite-btn-confirmation').fadeIn(100);
            setTimeout(function () {
                $('#copy-cite-btn-confirmation').fadeOut(200);
            }, 2000);
        }
    });
    
    
    /******************************** FUNCTIONS ***********************************/
    
   

    //Get today's date in the preferred format
    function todaysDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = yyyy + '' + '' + mm + '' + dd;
        return today;
    }
    
    
    // Copies a string to the clipboard. Must be called from within an event handler such as click.
    // May return false if it failed, but this is not always
    // possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+, Safari 10+.
    // IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is
    // shown the first time the clipboard is used (per session).
    function copyToClipboard(text) {
        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            return clipboardData.setData("Text", text);

        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }


    /*** READY ***/
    
    
    $(document).ready(function () {
        var currentURL = window.location.toString();
        $('.res-act-button-summary .hide_summary').hide();
        //Copy url button, if empty append this url
        var URLtoCopy = $("#copyLinkInputBtn").data("copyuri");
        if (!URLtoCopy) {
            $("#copyLinkInputBtn").data("copyuri", currentURL);
            $("#copyLinkTextfield").val(currentURL);
        }
    });
    
    

    $(document).on({
        mouseenter: function () {
            $(this).find('#copyLinkTextfield-wrapper').fadeIn();
        },
        mouseleave: function () {
            $(this).find('#copyLinkTextfield-wrapper').fadeOut();
        }
    }, '#res-act-button-copy-url');

    /* You can safely use $ in this code block to reference jQuery */
});
