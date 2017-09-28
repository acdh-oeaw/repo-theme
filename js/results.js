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