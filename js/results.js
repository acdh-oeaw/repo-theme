jQuery(function ($) {
"use strict"; 
/* You can safely use $ in this code block to reference jQuery */

//Expand or collapse summary on results view
$(document ).delegate( ".res-act-button-summary", "click", function(e) {
//$('.res-act-button-summary').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('closed')) {
        $(this).parent().siblings('.res-property-desc').fadeIn(200);
        $('.res-act-button-summary .hide_summary').show();
        $('.res-act-button-summary .show_summary').hide();
        $(this).removeClass('closed');
        $(this).addClass('open');
        $(this).children('i').text('remove');
        e.preventDefault();
    } else {
        $('.res-act-button-summary .hide_summary').hide();
        $('.res-act-button-summary .show_summary').show();
        $(this).parent().siblings('.res-property-desc').fadeOut(200);
        $(this).removeClass('open');
        $(this).addClass('closed');
        $(this).children('i').text('add');
        e.preventDefault();
    }
    e.preventDefault();
});

//Toggle expert or basic view on single resource
$(document ).delegate( ".res-act-button-expertview", "click", function(e) {
//$('.res-act-button-expertview').click(function() {
	if ($(this).hasClass('basic')) {
		$('.single-res-overview-basic').hide();
		$('.single-res-overview-expert').fadeIn(200);
	  	$(this).removeClass('basic');
	  	$(this).addClass('expert');
	  	$(this).children('span').text(Drupal.t('Switch to Basic-View'));
	} else {
		$('.single-res-overview-expert').hide();
		$('.single-res-overview-basic').fadeIn(200);
	  	$(this).removeClass('expert');
	  	$(this).addClass('basic');
	  	$(this).children('span').text(Drupal.t('Switch to Expert-View'));
	}
});

//Toggle tree-view or basic view on child resources section
//$('.res-act-button-treeview').click(function() {
/*
$(document ).delegate( ".res-act-button-treeview", "click", function(e) {
    console.log("designban");
	if ($(this).hasClass('basic')) {
		$('.children-overview-basic').hide();
		$('.children-overview-tree').fadeIn(200);
  	$(this).removeClass('basic');
  	$(this).addClass('tree');
  	$(this).children('span').text('Switch to List-View');
	} else {
		$('.children-overview-tree').hide();
		$('.children-overview-basic').fadeIn(200);
  	$(this).removeClass('tree');
  	$(this).addClass('basic');
  	$(this).children('span').text('Switch to Tree-View');		
	}
});
*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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

var searchFilterVisibility = getCookie("searchFilterVisibility");
var torFilterVisibility = getCookie("torFilterVisibility");
var yorFilterVisibility = getCookie("yorFilterVisibility");
var dorFilterVisibility = getCookie("dorFilterVisibility");

if (searchFilterVisibility == 'hidden') {
	$('#block-search > h3').addClass('closed');
	$('#sks-form > .form-item-metavalue').hide();
	$('#edit-actions').hide();
}

if (torFilterVisibility == 'hidden') {
  	$('#edit-searchbox-types--wrapper > legend > .fieldset-legend').addClass('closed');
  	$('#edit-searchbox-types--wrapper > legend').next('.fieldset-wrapper').hide();
}

if (yorFilterVisibility == 'hidden') {
  	$('#edit-datebox-years--wrapper > legend > .fieldset-legend').addClass('closed');
  	$('#edit-datebox-years--wrapper > legend').next('.fieldset-wrapper').hide();
}

if (dorFilterVisibility == 'hidden') {
  	$('.extra-filter-heading').addClass('closed');
  	$('.extra-filter-heading').next().hide();
  	$('.extra-filter-heading').next().next().hide();
} else if (dorFilterVisibility == 'visible') {
  	$('.extra-filter-heading').removeClass('closed');
  	$('.extra-filter-heading').next().show();
  	$('.extra-filter-heading').next().next().show();
}
//Show the search block after comforming the user cookies
$('#block-search').fadeIn(100);

//Toggle Search filter
$('#block-search > h3').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$('#sks-form > .form-item-metavalue').fadeIn(200);
	  	setCookie("searchFilterVisibility", 'visible', 180);
	} else {
	  	$(this).addClass('closed');
	  	$('#sks-form > .form-item-metavalue').fadeOut(200);
	  	setCookie("searchFilterVisibility", 'hidden', 180);
	}
});

//Toggle ToR filter
$('#edit-searchbox-types--wrapper > legend > .fieldset-legend').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$(this).parent().next('.fieldset-wrapper').fadeIn(200);
	  	setCookie("torFilterVisibility", 'visible', 180);
	} else {
	  	$(this).addClass('closed');
	  	$(this).parent().next('.fieldset-wrapper').fadeOut(200);
	  	setCookie("torFilterVisibility", 'hidden', 180);
	}
});

//Toggle year of resource filter
$('#edit-datebox-years--wrapper > legend > .fieldset-legend').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$(this).parent().next('.fieldset-wrapper').fadeIn(200);
	  	setCookie("yorFilterVisibility", 'visible', 180);
	} else {
	  	$(this).addClass('closed');
	  	$(this).parent().next('.fieldset-wrapper').fadeOut(200);
	  	setCookie("yorFilterVisibility", 'hidden', 180);
	}
});

//Toggle DoP filter
$('.extra-filter-heading').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$(this).next().fadeIn(200);
	  	$(this).next().next().fadeIn(200);
	  	setCookie("dorFilterVisibility", 'visible', 180);
	} else {
	  	$(this).addClass('closed');
	  	$(this).next().fadeOut(200);
	  	$(this).next().next().fadeOut(200);
	  	setCookie("dorFilterVisibility", 'hidden', 180);
	}
});


$("#edit-date-start-date")
  .datepicker({
    dateFormat: "dd/mm/yy",
    changeYear: true,
    showOn: "button",
    constrainInput: true,
	onSelect: function() {
	   $('#edit-actions').fadeIn(300);
	}
  })
  .next("button").button()
  .addClass("date-filter-btn")
  .html('<i class="material-icons">&#xE8DF;</i>')

$("#edit-date-end-date")
  .datepicker({
    dateFormat: "dd/mm/yy",
    changeYear: true,
    showOn: "button",
    constrainInput: true,
	onSelect: function() {
	   $('#edit-actions').fadeIn(300);
	}
  })
  .next("button").button()
  .addClass("date-filter-btn")
  .html('<i class="material-icons">&#xE878;</i>')

$("input[type=text].date-filter").keyup(function (e) {
    //Show apply-search button on date keyup
    $('#edit-actions').fadeIn(300); 
    var textSoFar = $(this).val();
    if (e.keyCode != 191) {
        if (e.keyCode != 8) {
            if (textSoFar.length == 2 || textSoFar.length == 5) {
                $(this).val(textSoFar + "/");
            }
                //to handle copy & paste of 8 digit
            else if (e.keyCode == 86 && textSoFar.length == 8) {
                $(this).val(textSoFar.substr(0, 2) + "/" + textSoFar.substr(2, 2) + "/" + textSoFar.substr(4, 4));
            }
        }
        else {
            //backspace would skip the slashes and just remove the numbers
            if (textSoFar.length == 5) {
                $(this).val(textSoFar.substring(0, 4));
            }
            else if (textSoFar.length == 2) {
                $(this).val(textSoFar.substring(0, 1));
            }
        }
    }
    else {
        //remove slashes to avoid 12//01/2014
        $(this).val(textSoFar.substring(0, textSoFar.length - 1));
    }
    
});

//Show apply-search button on ToR select
$('#edit-searchbox-types > .form-item').on('click', function(){    
    $('#edit-actions').fadeIn(300); 
});

//Show apply-search button on ToR select
$('#edit-datebox-years > .form-item').on('click', function(){    
    $('#edit-actions').fadeIn(300); 
});

//Show apply-search button on search text keyup
$("#edit-metavalue").keyup(function (e) {
    $('#edit-actions').fadeIn(300); 
});

//Function for pagination selector
function modifyUrlParams(limit="10", sort="titleasc")
{
    var url = window.location.href;     // Returns full URL
    var numb = 0;
    var newUrl = "";
    var page = 1;
    if (url.indexOf("/discover/") != -1 ) {
        numb = url.indexOf("/discover/")+10;
        let mainUrl = url.substring(0, numb);
        let restUrl = url.replace(mainUrl, '');
        var restUrlArr =  restUrl.split('/'); 
        if(restUrlArr[4]){ page = restUrlArr[4]; }
        newUrl = mainUrl+restUrlArr[0]+'/'+sort+'/'+limit+'/'+page;
    }
    return newUrl;
}

//Results info-bar pagination selectors on click
$('#resPerPageButton > a').on('click', function(event){
	event.preventDefault();
	var currentSetting = $('#resPerPageButton').html();
	var selectedSetting = $(this).html();
        
	if (currentSetting != selectedSetting) {
            var sorting = $('#sortByButton').html();
            var sort = "titledesc";
            $.each( $('#sortByDropdown > a'), function(key, val) {
                if(val.text == sorting){
                    sort = val.dataset.value;
                }
            });
           
            $('#resPerPageButton').html(selectedSetting);
            setCookie("resultsPerPage", selectedSetting, 180);
            var newUrl = modifyUrlParams(selectedSetting, sort);
            window.location.href = newUrl;
	}
});

$('#sortByDropdown > a').on('click', function(event){
	event.preventDefault();
	var currentSetting = $('#sortByButton').html();
	var selectedSetting = $(this).html();
	if (currentSetting != selectedSetting) {
            $('#sortByButton').html(selectedSetting);
            selectedSetting = $(this).data("value");
            var pageLimit = $('#resPerPageButton').html();
            setCookie("resultsOrder", selectedSetting, 180);
	    var newUrl = modifyUrlParams(pageLimit, selectedSetting);
            window.location.href = newUrl;
	}
})

//Getting the params from url
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[/&]" + name + "(=([^/&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//Reformating date from url to datepicker value
String.prototype.insertAt=function(index, string) { 
  return this.substr(0, index) + string + this.substr(index);
}

//Update the pagination selector depending on the url
$( document ).ready(function() {
    var currentURL = window.location.toString();
    var args = currentURL.split('/');
    var lastArg = args[args.length-1];
    var preLastArg = args[args.length-2];
    var breadcrumbSearchInfo = "";


    if (currentURL.indexOf("/browser/search/") >= 0) {
        $( ".bgSearch" ).prop( "checked", true );
    }
    $('.res-act-button-summary .hide_summary').hide();


    //Results per page setting comparison from cookies
    var resultsPerPageSetting = getCookie("resultsPerPage");
    if (!resultsPerPageSetting) {
	    resultsPerPageSetting = 10;
    }
    $('#resPerPageButton').html((resultsPerPageSetting));
    //Order setting comparison from cookies
    var resultsOrderSetting = getCookie("resultsOrder");
    if (!resultsOrderSetting) {
	    resultsOrderSetting = 'datedesc';
    }
	var resultsOrderText = $("#sortByDropdown").find("[data-value='" + resultsOrderSetting + "']").html();
	$('#sortByButton').html((resultsOrderText));
    
	//If it's only discover add root arg
    if (lastArg == "discover") {
        window.history.replaceState( {} , "", currentURL+"/root/"+resultsOrderSetting+"/"+resultsPerPageSetting+"/1" );
    }
    //If it's the special url "url" let's add the sorting and paging arguments
    if (lastArg == 'root') {
	    window.history.replaceState( {} , "", currentURL+"/"+resultsOrderSetting+"/"+resultsPerPageSetting+"/1" );
    }
    //If it's the detail page, add child pagination args
    if (preLastArg == 'oeaw_detail') {
	    //window.history.replaceState( {} , "", currentURL+"/10/1" );
	    //$('body').addClass('detailPage');
    }
    //Prepare pagination urls
    $('.pagination-item').each(function() {
        var pageUrl = $(this).children('a').data("pagination");
        $(this).children('a').attr('href', pageUrl);
    });

    //Cookies warning first page
    var cookiesAccepted = getCookie("cookiesAccepted");
    if (!cookiesAccepted) {
        $("#cookie-overlay").fadeIn(100);
    }

	//Check if we can append selected query to filters
	//ToR field
	var selectedTypes = getParameterByName('type');
	if (selectedTypes) {
		selectedTypes = selectedTypes.toLowerCase();
		if (selectedTypes.includes(" or ")) {
			selectedTypes = selectedTypes.split(" or ");
			selectedTypes.forEach(function(type) {
				var checkboxID = '#edit-searchbox-types-' + type;
			    $(checkboxID).prop('checked', true);
			});
			var typesString = selectedTypes.join(" or ");
			breadcrumbSearchInfo += ' types: "' + typesString + '"';
		} else {
			var checkboxID = '#edit-searchbox-types-' + selectedTypes;
		    $(checkboxID).prop('checked', true);
		    breadcrumbSearchInfo += ' type: "' + selectedTypes + '"';
		}
	}

	//Year of resource field
	var selectedYears = getParameterByName('years');
	if (selectedYears) {
		if (selectedYears.includes(" ")) {
			selectedYears = selectedYears.split(" ");
			selectedYears.forEach(function(year) {
				var checkboxID = '#edit-datebox-years-' + year;
			    $(checkboxID).prop('checked', true);
			});
			var yearsString = selectedYears.join(" or ");
			breadcrumbSearchInfo += ' from years ' + yearsString;
		} else {
			var checkboxID = '#edit-datebox-years-' + selectedYears;
		    $(checkboxID).prop('checked', true);
		    breadcrumbSearchInfo += ' from year ' + selectedYears;
		}
	}

	//Metavalue field
    var metaValueField = getParameterByName('words');
	if (metaValueField) {
		$("input[name='metavalue']").val(metaValueField);
		breadcrumbSearchInfo += ' containing: "' + metaValueField + '"';
	}

	//Date of Publication field
	var minDate = getParameterByName('mindate');
	var maxDate = getParameterByName('maxdate');
	if (minDate || maxDate) {
		if (minDate != '19000101') {
			var minDate = minDate.insertAt(4, ",").insertAt(7, ",");
			$('#edit-date-start-date').datepicker('setDate', new Date(minDate));
			minDate = minDate.replace(/,/g , "/");
			breadcrumbSearchInfo += ' from ' + minDate;
		}
		var maxDate = maxDate.insertAt(4, ",").insertAt(7, ",");
		$('#edit-date-end-date').datepicker('setDate', new Date(maxDate));
		maxDate = maxDate.replace(/,/g , "/");
		breadcrumbSearchInfo += ' until ' + maxDate;
	}
	
    if (breadcrumbSearchInfo) {
    	breadcrumbSearchInfo = '<a href="'+currentURL+'">Searched for' + breadcrumbSearchInfo + '</a>';
    	$('#searchInfo').html('/ '+breadcrumbSearchInfo);
    }

    //Copy url button, if empty append this url
    var URLtoCopy = $("#copyLinkInputBtn").data("copyuri");
    if (!URLtoCopy) {
        $("#copyLinkInputBtn").data("copyuri", currentURL);
        $("#copyLinkTextfield").val(currentURL);
    }

});

//Get today's date in the preferred format
function todaysDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	
	var yyyy = today.getFullYear();
	if(dd<10){
	    dd='0'+dd;
	} 
	if(mm<10){
	    mm='0'+mm;
	} 
	var today = yyyy+''+''+mm+''+dd;
	return today;
}

//Complex search-form behaviour
$("form#sks-form").submit(function(event){
    event.preventDefault();
    var resultsPerPageSetting = getCookie("resultsPerPage");
    if (!resultsPerPageSetting) {
	    resultsPerPageSetting = 10;
    }
    var resultsOrderSetting = getCookie("resultsOrder");
    if (!resultsOrderSetting) {
	    resultsOrderSetting = 'datedesc';
    }
    var urlParams = "";
	//Metavalue field
    var metaValueField = $("input[name='metavalue']").val();
	if (metaValueField) {
		metaValueField = metaValueField.replace(/\s/g, '+');
		if (metaValueField.includes('type=') || metaValueField.includes('words=') || metaValueField.includes('mindate=') || metaValueField.includes('maxdate=')) {
			urlParams += metaValueField;
                        //new BG search selected
                        if($( ".bgSearch" ).is(":checked")) {
                            window.location.href = '/browser/search/' + urlParams + '/' + resultsPerPageSetting + '/1';
                        }else {
                            window.location.href = '/browser/discover/' + urlParams + '/' + resultsPerPageSetting + '/1';
                        }
			
		} else {
			urlParams += 'words=' + metaValueField;
		}
	}
	//ToR field
	var selectedTypes = [];
	$('.searchbox_types input:checked').each(function() {
	    selectedTypes.push($(this).attr('value'));
	});
	if (selectedTypes.length > 0) {
		if (urlParams) { urlParams += '&'; }
		urlParams += 'type=' + selectedTypes.join('+or+');
	}
	
	//Year of resource field
	var selectedYears = [];
	$('.datebox_years input:checked').each(function() {
	    selectedYears.push($(this).attr('value'));
	});
	if (selectedYears.length > 0) {
		if (urlParams) { urlParams += '&'; }
		urlParams += 'years=' + selectedYears.join('+');
	}
	
	//Date of Publication field
	var minDate = $("input[name='date_start_date']").val();
	var maxDate = $("input[name='date_end_date']").val();
	if (minDate || maxDate) {
		if (urlParams) { urlParams += '&'; }
		if (minDate) {
			var dateParts = minDate.split('/');
			var minDate = dateParts[2] + dateParts[1] + dateParts[0];
		} else { var minDate = '19000101'; }
		if (maxDate) {
			var dateParts = maxDate.split('/');
			var maxDate = dateParts[2] + dateParts[1] + dateParts[0];
		} else { var maxDate = todaysDate(); }
		urlParams += 'mindate=' + minDate + '&maxdate=' + maxDate;
	}
	
	if (!urlParams) {
    	urlParams = "root";
	}
        //new BG search selected
        if($( ".bgSearch" ).is(":checked")) {
            window.location.href = '/browser/search/' + urlParams + '/' + resultsOrderSetting + '/' + resultsPerPageSetting + '/1';
        }else {
            window.location.href = '/browser/discover/' + urlParams + '/' + resultsOrderSetting + '/' + resultsPerPageSetting + '/1';
        }
	
});


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

//Accept cookies
$(".cookie-accept-btn").on('click', function(){
    setCookie("cookiesAccepted", true, 180);
    $("#cookie-overlay").fadeOut(100);
});

//$("#copy-url-tooltip").tooltip(); 
$(document ).delegate( "#copyLinkInputBtn", "click", function(e) {
//$("#copyLinkInputBtn").on('click', function(){
    //var result = copyToClipboard(window.location.toString());
    var URLtoCopy = $(this).data("copyuri");
    var result = copyToClipboard(URLtoCopy);
    if (result) {
	    $('#copyLinkTextfield').val("URL is copied to clipboard!");
	    setTimeout(function() { $('#copyLinkTextfield').val(URLtoCopy); }, 2000);
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

//Copy cite content
//$("#copy-cite-btn").on('click', function(){
$(document ).delegate( "#copy-cite-btn", "click", function(e) {    
    //var result = copyToClipboard(window.location.toString());
    var URLtoCopy = $('.cite-content.active').html();
    var result = copyToClipboard(URLtoCopy);
    if (result) {
	    //alert('copied');
	    $('#copy-cite-btn-confirmation').fadeIn(100);
	    setTimeout(function() { $('#copy-cite-btn-confirmation').fadeOut(200); }, 2000);
    }
});

/* You can safely use $ in this code block to reference jQuery */
});
