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
	  	$('#edit-actions').fadeIn(200);
	  	setCookie("searchFilterVisibility", 'visible', 1);
	} else {
	  	$(this).addClass('closed');
	  	$('#sks-form > .form-item-metavalue').fadeOut(200);
	  	$('#edit-actions').fadeOut(200);
	  	setCookie("searchFilterVisibility", 'hidden', 1);
	}
});

//Toggle ToR filter
$('.fieldset-legend').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$(this).parent().next('.fieldset-wrapper').fadeIn(200);
	  	setCookie("torFilterVisibility", 'visible', 1);
	} else {
	  	$(this).addClass('closed');
	  	$(this).parent().next('.fieldset-wrapper').fadeOut(200);
	  	setCookie("torFilterVisibility", 'hidden', 1);
	}
});

//Toggle DoP filter
$('.extra-filter-heading').click(function() {
	if ($(this).hasClass('closed')) {
	  	$(this).removeClass('closed');
	  	$(this).next().fadeIn(200);
	  	$(this).next().next().fadeIn(200);
	  	setCookie("dopFilterVisibility", 'visible', 1);
	} else {
	  	$(this).addClass('closed');
	  	$(this).next().fadeOut(200);
	  	$(this).next().next().fadeOut(200);
	  	setCookie("dopFilterVisibility", 'hidden', 1);
	}
});

$("#edit-date-start-date")
  .datepicker({
    dateFormat: "dd/mm/yy",
    changeYear: true,
    showOn: "button",
    constrainInput: true
  })
  .next("button").button()
  .addClass("date-filter-btn")
  .html('<i class="material-icons">&#xE8DF;</i>')

$("#edit-date-end-date")
  .datepicker({
    dateFormat: "dd/mm/yy",
    changeYear: true,
    showOn: "button",
    constrainInput: true
  })
  .next("button").button()
  .addClass("date-filter-btn")
  .html('<i class="material-icons">&#xE878;</i>')

$("input[type=text].date-filter").keyup(function (e) {
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

/* You can safely use $ in this code block to reference jQuery */
});