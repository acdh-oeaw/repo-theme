jQuery(function ($) {
    "use strict";
    var currentlang = jQuery('html').attr('lang');
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


    /**
     * this function is fetching the static pages from the gihub repo https://github.com/acdh-oeaw/arche-static-text
     * @returns {undefined}
     */
    function depositionProcess() {

        var urls = ['about-service', 'api-access', 'collection-policy', 'deposition-agreement',
            'deposition-process', 'faq', 'formats-filenames-and-metadata', 'further-guidance',
            'preservation-policy', 'privacy', 'technical-setup', 'terms-of-use'];

        $.each(urls, function (index, element) {
            if (window.location.href.indexOf("browser/" + element) >= 0) {
                var lastPart = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
                const githubUrl = "https://raw.githubusercontent.com/acdh-oeaw/arche-static-text/master/" + currentlang + '/' + lastPart + '.html';
                fetchGithubPage(githubUrl);
            }
        });
    }
});