jQuery(function ($) {
"use strict"; 
/* You can safely use $ in this code block to reference jQuery */

//Expand or collapse summary on results view
$('.res-act-button-summary').click(function() {
	if ($(this).hasClass('closed')) {
		$(this).parent().siblings('.res-property-desc').fadeIn(200);
	  	$(this).removeClass('closed');
	  	$(this).addClass('open');
	  	$(this).children('i').text('remove');
	  	$(this).children('span').text('Hide Summary');
	} else {
		$(this).parent().siblings('.res-property-desc').fadeOut(200);
	  	$(this).removeClass('open');
	  	$(this).addClass('closed');
	  	$(this).children('i').text('add');
	  	$(this).children('span').text('Show Summary');		
	}
});

//Toggle expert or basic view on single resource
$('.res-act-button-expertview').click(function() {
	if ($(this).hasClass('basic')) {
		$('.single-res-overview-basic').hide();
		$('.single-res-overview-expert').fadeIn(200);
	  	$(this).removeClass('basic');
	  	$(this).addClass('expert');
	  	$(this).children('span').text('Switch to Basic-View');
	} else {
		$('.single-res-overview-expert').hide();
		$('.single-res-overview-basic').fadeIn(200);
	  	$(this).removeClass('expert');
	  	$(this).addClass('basic');
	  	$(this).children('span').text('Switch to Expert-View');		
	}
});

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
var dopFilterVisibility = getCookie("dopFilterVisibility");

if (searchFilterVisibility == 'hidden') {
	$('#block-search > h3').addClass('closed');
	$('#sks-form > .form-item-metavalue').hide();
	$('#edit-actions').hide();
}

if (torFilterVisibility == 'hidden') {
  	$('.fieldset-legend').addClass('closed');
  	$('.fieldset-legend').parent().next('.fieldset-wrapper').hide();
}

if (dopFilterVisibility == 'hidden') {
  	$('.extra-filter-heading').addClass('closed');
  	$('.extra-filter-heading').next().hide();
  	$('.extra-filter-heading').next().next().hide();
}

//Show the search block after comforming the user cookies
$('#block-search').fadeIn(100);

//Toggle Search filter
$('#block-search > h3').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$('#sks-form > .form-item-metavalue').fadeIn(200);
	  	setCookie("searchFilterVisibility", 'visible', 7);
	} else {
	  	$(this).addClass('closed');
	  	$('#sks-form > .form-item-metavalue').fadeOut(200);
	  	setCookie("searchFilterVisibility", 'hidden', 7);
	}
});

//Toggle ToR filter
$('.fieldset-legend').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$(this).parent().next('.fieldset-wrapper').fadeIn(200);
	  	setCookie("torFilterVisibility", 'visible', 7);
	} else {
	  	$(this).addClass('closed');
	  	$(this).parent().next('.fieldset-wrapper').fadeOut(200);
	  	setCookie("torFilterVisibility", 'hidden', 7);
	}
});

//Toggle DoP filter
$('.extra-filter-heading').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$(this).next().fadeIn(200);
	  	$(this).next().next().fadeIn(200);
	  	setCookie("dopFilterVisibility", 'visible', 7);
	} else {
	  	$(this).addClass('closed');
	  	$(this).next().fadeOut(200);
	  	$(this).next().next().fadeOut(200);
	  	setCookie("dopFilterVisibility", 'hidden', 7);
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

//Show apply-search button on search text keyup
$("#edit-metavalue").keyup(function (e) {
    $('#edit-actions').fadeIn(300); 
});

//Function for pagination selector
function removeUrlLastArgument(url)
{
    var args = url.split('/');
    args.pop();
    return( args.join('/') );
}

//Results info-bar pagination selectors on click
$('#resPerPageButton > a').on('click', function(event){
	event.preventDefault();
	var currentSetting = $('#resPerPageButton').html();
	var selectedSetting = $(this).html();
	if (currentSetting == selectedSetting) {
		//do nothing
	} else {
		$('#resPerPageButton').html(selectedSetting);
		setCookie("resultsPerPage", selectedSetting, 7);
		var currentURL = window.location.toString();
		var newUrl = removeUrlLastArgument(currentURL);
		newUrl = removeUrlLastArgument(newUrl);
		newUrl = newUrl + '/'+selectedSetting + '/1';
		window.location.href = newUrl;
	}
});

$('#sortByDropdown > a').on('click', function(event){
	event.preventDefault();
	var currentSetting = $('#sortByButton').html();
	var selectedSetting = $(this).html();
	if (currentSetting == selectedSetting) {
		//do nothing
	} else {
		$('#sortByButton').html(selectedSetting);
		selectedSetting = $(this).data("value");
		setCookie("resultsOrder", selectedSetting, 7);
	    var currentURL = window.location.toString();
	    var args = currentURL.split('/');
	    args[args.length-3] = selectedSetting;
		args = args.join();
		args = args.replace(/,/g, '/');
		window.location.href = args;
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
    //Results per page setting comparison from cookies
    var resultsPerPageSetting = getCookie("resultsPerPage");
    if (!resultsPerPageSetting) {
	    resultsPerPageSetting = 10;
    }
    $('#resPerPageButton').html((resultsPerPageSetting));
    //Order setting comparison from cookies
    var resultsOrderSetting = getCookie("resultsOrder");
    if (!resultsOrderSetting) {
	    resultsOrderSetting = 'titleasc';
    }
	var resultsOrderText = $("#sortByDropdown").find("[data-value='" + resultsOrderSetting + "']").html();
	$('#sortByButton').html((resultsOrderText));
    //If it's the special url "url" let's add the sorting and paging arguments
    if (lastArg == 'root') {
	    window.history.pushState( {} , "", currentURL+"/"+resultsOrderSetting+"/"+resultsPerPageSetting+"/1" );
    }
	//Prepare pagination urls
	$('.pagination-item').each(function() {
	    var pageUrl = $(this).children('a').data("pagination");
	    $(this).children('a').attr('href', pageUrl);
	});

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
		} else {
			var checkboxID = '#edit-searchbox-types-' + selectedTypes;
		    $(checkboxID).prop('checked', true);
		}
	}

	//Metavalue field
    var metaValueField = getParameterByName('words');
	if (metaValueField) {
		$("input[name='metavalue']").val(metaValueField);
	}

	//Date of Publication field
	var minDate = getParameterByName('mindate');
	var maxDate = getParameterByName('maxdate');
	if (minDate || maxDate) {
		if (minDate != '19000101') {
			var minDate = minDate.insertAt(4, ",").insertAt(7, ",");
			$('#edit-date-start-date').datepicker('setDate', new Date(minDate));
		}
		var maxDate = maxDate.insertAt(4, ",").insertAt(7, ",");
		$('#edit-date-end-date').datepicker('setDate', new Date(maxDate));
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
	    resultsOrderSetting = 'titleasc';
    }
    var urlParams = "";
	//Metavalue field
    var metaValueField = $("input[name='metavalue']").val();
	if (metaValueField) {
		metaValueField = metaValueField.replace(/\s/g, '+');
		if (metaValueField.includes('type=') || metaValueField.includes('words=') || metaValueField.includes('mindate=') || metaValueField.includes('maxdate=')) {
			urlParams += metaValueField;
			window.location.href = '/browser/discover/' + urlParams + '/' + resultsPerPageSetting + '/1';
		} else {
			urlParams += 'words=' + metaValueField;
		}
	}
	//ToR field
	var selectedTypes = [];
	$('.checkbox-custom input:checked').each(function() {
	    selectedTypes.push($(this).attr('value'));
	});
	if (selectedTypes.length > 0) {
		if (urlParams) { urlParams += '&'; }
		urlParams += 'type=' + selectedTypes.join('+or+');
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

	window.location.href = '/browser/discover/' + urlParams + '/' + resultsOrderSetting + '/' + resultsPerPageSetting + '/1';
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

//$("#copy-url-tooltip").tooltip(); 


$("#copyLinkInputBtn").on('click', function(){
    //var result = copyToClipboard(window.location.toString());
    var URLtoCopy = $(this).data("copyuri");
    var result = copyToClipboard(URLtoCopy);
    if (result) {
	    $('#copyLinkTextfield').val("URL is copied to clipboard!");
	    setTimeout(function() { $('#copyLinkTextfield').val(URLtoCopy); }, 3000);
    }
});


$('#res-act-button-copy-url').hover(
  function () {
    $('#copyLinkTextfield-wrapper').fadeIn(200);
  }, 
  function () {
    $('#copyLinkTextfield-wrapper').fadeOut(200);
  }
);

/* You can safely use $ in this code block to reference jQuery */
});
