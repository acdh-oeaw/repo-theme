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



/* You can safely use $ in this code block to reference jQuery */
});