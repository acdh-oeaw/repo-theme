jQuery(function ($) {
    "use strict";
    var currentlang = jQuery('html').attr('lang');
    var archeApiUrl = "/browser/api/static-pages/";
    $(document).ready(function () {
        depositionProcess();
    });

    function fetchGithubPage(githubUrl) {
        $.get(githubUrl, function (response) {
                $("article.contextual-region").html(response);
            }).fail(function (jqXHR, textStatus, errorThrown) {
                // Error callback function
                console.log("Error during github page fetch:", textStatus, errorThrown);
                // Handle the error response here
            });
    }


    function depositionProcess() {
        if (window.location.href.indexOf("browser/deposition-process") >= 0) {
            var lastPart = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
            const githubUrl = "https://raw.githubusercontent.com/acdh-oeaw/arche-static-text/master/"+currentlang+'/'+lastPart+'.html';
            fetchGithubPage(githubUrl);
        }
        
        if (window.location.href.indexOf("browser/formats-filenames-and-metadata") >= 0) {
            var lastPart = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
            const githubUrl = "https://raw.githubusercontent.com/acdh-oeaw/arche-static-text/master/"+currentlang+'/'+lastPart+'.html';
            fetchGithubPage(githubUrl);
        }
        
        if (window.location.href.indexOf("browser/technical-setup") >= 0) {
            var lastPart = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
            const githubUrl = "https://raw.githubusercontent.com/acdh-oeaw/arche-static-text/master/"+currentlang+'/'+lastPart+'.html';
            fetchGithubPage(githubUrl);
        }
    }
});