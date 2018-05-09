//Hidden Contact Form
if ( $(window).width() < 425) {
	//MOBILE CONTACT FORM
	function openContactForm() {
		document.getElementById('contact-form-mobile').style.height = '100%';
	  var elmnt = document.getElementById('mobileFooter');
	  document.getElementById('main').style.marginBottom = elmnt.offsetHeight + 'px';
	}

	function closeContactForm() {
	  document.getElementById('contact-form-mobile').style.height = '0';
		var elmnt = document.getElementById('mobileFooter');
	  document.getElementById('main').style.marginBottom = null;
	}
} else if ( $(window).width() > 426 && $(window).width() < 993 ) {

	//tablet CONTACT FORM
	function openContactForm() {
		document.getElementById('contact-form-tablet').style.height = '100%';
	  var elmnt = document.getElementById('tabletFooter');
	  document.getElementById('main').style.marginBottom = elmnt.offsetHeight + 'px';
	}

	function closeContactForm() {
	  document.getElementById('contact-form-tablet').style.height = '0';
		var elmnt = document.getElementById('tabletFooter');
	  document.getElementById('main').style.marginBottom = null;
	}

} else if ( $(window).width() > 994) {

	//site CONTACT FORM
	function openContactForm() {
		document.getElementById('contact-form-site').style.height = '100%';
	  var elmnt = document.getElementById('siteFooter');
	  document.getElementById('main').style.marginBottom = elmnt.offsetHeight + 'px';
	}

	function closeContactForm() {
	  document.getElementById('contact-form-site').style.height = '0';
		var elmnt = document.getElementById('siteFooter');
	  document.getElementById('main').style.marginBottom = null;
	}

}

$(".contact-form-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-form").offset().top},
        'slow');
});
