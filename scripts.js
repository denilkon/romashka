$(document).ready(function(){
		$('.advantages__menu1,.advantages__menu1-descript').toggleClass('active');
		$('.advantages__menu2').click(function (event) {
		$('.advantages__menu2,.advantages__menu2-descript').toggleClass('active');
			$('.advantages__menu1,.advantages__menu1-descript').removeClass('active');
			$('.advantages__menu3,.advantages__menu3-descript').removeClass('active');
	});
		$('.advantages__menu1').click(function (event) {
		$('.advantages__menu1,.advantages__menu1-descript').toggleClass('active');
			$('.advantages__menu2,.advantages__menu2-descript').removeClass('active');
			$('.advantages__menu3,.advantages__menu3-descript').removeClass('active');
	});
		$('.advantages__menu3').click(function (event) {
		$('.advantages__menu3,.advantages__menu3-descript').toggleClass('active');
			$('.advantages__menu1,.advantages__menu1-descript').removeClass('active');
			$('.advantages__menu2,.advantages__menu2-descript').removeClass('active');
	});
		$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed:3000,
		pauseOnHover: true,
		pauseOnFocus: true,
		centerMode: true,
		
 });
			$('.slider1').slick({
		slidesToShow: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed:3000,
		pauseOnHover: true,
		pauseOnFocus: true,
		 speed: 500,
  		fade: true,
  				
 });
});