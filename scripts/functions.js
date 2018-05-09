//Scrolling Logo Colour Change
function logoSwitch () {
	  $('.altLogo').each(function() {
		$(this).css('top',
		  $('.startLogo').offset().top -  $(this).closest('.row').offset().top
		);
	  });
	};

	$(document).scroll(function() {logoSwitch();});

	logoSwitch();

// function footerHeight() {
//
// 	var elmnt = document.getElementById('mobileFooter');
// 	document.getElementById('section2').style.marginBottom = elmnt.offsetHeight + 'px';
//
// }
//
// footerHeight();


//Hidden Contact Form
if ( $(window).width() < 425) {
	//MOBILE CONTACT FORM
	function openContactForm() {
		document.getElementById('contact-form-mobile').style.height = '100%';
	  var elmnt = document.getElementById('mobileFooter');
	  document.getElementById('section2').style.marginBottom = elmnt.offsetHeight + 'px';
	}

	function closeContactForm() {
	  document.getElementById('contact-form-mobile').style.height = '0';
		var elmnt = document.getElementById('mobileFooter');
	  document.getElementById('section2').style.marginBottom = null;
	}
} else if ( $(window).width() > 426 && $(window).width() < 993 ) {

	//tablet CONTACT FORM
	function openContactForm() {
		document.getElementById('contact-form-tablet').style.height = '100%';
	  var elmnt = document.getElementById('tabletFooter');
	  document.getElementById('section2').style.marginBottom = elmnt.offsetHeight + 'px';
	}

	function closeContactForm() {
	  document.getElementById('contact-form-tablet').style.height = '0';
		var elmnt = document.getElementById('tabletFooter');
	  document.getElementById('section2').style.marginBottom = null;
	}

} else if ( $(window).width() > 994) {

	//site CONTACT FORM
	function openContactForm() {
		document.getElementById('contact-form-site').style.height = '100%';
	  var elmnt = document.getElementById('siteFooter');
	  document.getElementById('section2').style.marginBottom = elmnt.offsetHeight + 'px';
	}

	function closeContactForm() {
	  document.getElementById('contact-form-site').style.height = '0';
		var elmnt = document.getElementById('siteFooter');
	  document.getElementById('section2').style.marginBottom = null;
	}

}

// (window.matchMedia("(min-width: 426px) and (max-width: 993px)").matches) {
// elmnt.offsetHeight + 'px'
