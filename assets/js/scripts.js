$(document).ready(function () {
	// hamburger
	$(".hamurger_menu").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").removeClass("active");
	});

	// partner swiper
	const partner_row1 = new Swiper(".partner_row1", {
		// Default parameters
		slidesPerView: 4,
		centeredSlides: true,
		spaceBetween: 12,
		loop: true,
		allowTouchMove: false,
		autoplay: {
			delay: 1000,
		},
	});
	const partner_row2 = new Swiper(".partner_row2", {
		// Default parameters
		slidesPerView: 4,
		spaceBetween: 12,
		loop: true,
		allowTouchMove: false,
		autoplay: {
			delay: 1500,
		},
	});
	const partner_row3 = new Swiper(".partner_row3", {
		// Default parameters
		slidesPerView: 4,
		spaceBetween: 12,
		centeredSlides: true,
		loop: true,
		allowTouchMove: false,
		autoplay: {
			delay: 1800,
		},
	});
});
