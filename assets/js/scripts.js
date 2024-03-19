$(document).ready(function () {

	// quiz opener
	$("#quiz_open").on("click", function (e) {
		e.preventDefault();
		$(".quiz_wrapper").addClass("active");
		$(".quiz_block").addClass("active");
	});

	// quiz swiper
	if ($(".quiz_swiper").length > 0) {
		const quiz_swiper = new Swiper(".quiz_swiper", {
			// Default parameters
			slidesPerView: 1,
			direction: "horizontal",
			allowTouchMove: false,
			// Default parameters
			pagination: {
				el: ".quiz_number",
				type: "fraction",
			},
			navigation: {
				nextEl: ".quiz_right_btn",
				prevEl: ".quiz_left_btn",
			},
		});
		quiz_swiper.on("slideChange", function (e) {
			if (e.activeIndex == "0") {
				$(".quiz_progress").val("25");
			} else if (e.activeIndex == "1") {
				$(".quiz_progress").val("50");
			} else if (e.activeIndex == "2") {
				$(".quiz_progress").val("75");
			} else if (e.activeIndex == "3") {
				$(".quiz_form").css("display", "flex");
				$(".quiz_buttons").css("display", "none");
				$(".quiz_progress").val("100");
			} else {
				$(".quiz_buttons").css("display", "flex");
				$(".quiz_form").css("display", "none");
			}
			$(".quiz_form button").on("click", function (e) {
				e.preventDefault();
				$(".quiz_wrapper").removeClass("active");
				$(".quiz_block").removeClass("active");
				quiz_swiper.slideTo(0);
			});
		});
	}

	// faq accordion
	$(".faq_body").slideUp();
	$(".faq_head").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).find(".faq_arrow").toggleClass("active");
		$(this).parent().find(".faq_body").slideToggle(400);
		$(this)
			.parent(".faq_item")
			.prevAll(".faq_item")
			.find(".faq_body")
			.slideUp();
		$(this)
			.parent(".faq_item")
			.prevAll(".faq_item")
			.find(".faq_arrow")
			.removeClass("active");
		$(this)
			.parent(".faq_item")
			.nextAll(".faq_item")
			.find(".faq_body")
			.slideUp();
		$(this)
			.parent(".faq_item")
			.nextAll(".faq_item")
			.find(".faq_arrow")
			.removeClass("active");

		$(this)
			.parent(".faq_item")
			.prevAll(".faq_item")
			.find(".faq_head")
			.removeClass("active");
		$(this)
			.parent(".faq_item")
			.nextAll(".faq_item")
			.find(".faq_head")
			.removeClass("active");
	});

	// gallery swiper
	if ($(".gallery_swiper").length > 0) {
		const gallery_swiper = new Swiper(".gallery_swiper", {
			// Default parameters
			// slidesPerView: 3.4,
			spaceBetween: 28,
			loop: true,
			grabCursor: true,
			centeredSlides: true,
			// autoplay: {
			// 	delay: 2000,
			// },
			navigation: {
				nextEl: ".gallery_next",
				prevEl: ".gallery_prev",
			},
			// pagination: {
			// 	el: ".swiper-pagination",
			// },
			// Responsive breakpoints
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1.8,
					spaceBetween: 15,
				},
				// when window width is >= 640px
				577: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				993: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1201: {
					slidesPerView: 3.4,
					spaceBetween: 28,
				},
				1601: {
					slidesPerView: 4,
					spaceBetween: 28,
				},
				1801: {
					slidesPerView: 5,
					spaceBetween: 28,
				},
			},
		});
	}
	// otziv swiper
	if ($(".otziv_swiper").length > 0) {
		const otziv_swiper = new Swiper(".otziv_swiper", {
			// Default parameters
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
			},
			navigation: {
				nextEl: ".gallery_next",
				prevEl: ".gallery_prev",
			},

			// Responsive breakpoints
			breakpoints: {
				320: {
					slidesPerView: 1.8,
					spaceBetween: 15,
				},
				577: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				993: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				1401: {
					slidesPerView: 2.4,
					spaceBetween: 28,
				},
				1601: {
					slidesPerView: 3,
					spaceBetween: 28,
				},
			},
		});
	}

	$(".open_menu").click(function () {
		$(this).parent().toggleClass("active");
	});

	$(".open_inner").click(function () {
		$(this).parent().toggleClass("active");
	});

	$('.service_bottom, .open_service_list + .services_list').slideToggle(0)

	$(".open_ul").click(function () {

		$('.services_cards').find("*").not(this).removeClass("active");
		$(this).parent().parent().siblings().find(".service_bottom, .open_service_list + .services_list").slideUp(300)
		$(this).parent().parent().parent().siblings().find(".service_bottom, .open_service_list + .services_list").slideUp(300)
		$(this).toggleClass("active");
		$(this).parent().siblings(".service_bottom").slideToggle(300)

	});

	$('.open_service_list img').click(function(){
		$(this).toggleClass('active')
		$(this).parent().next().slideToggle(300)
	})

	$(".service_item .main_btn").click(function () {
		$(".modal_back").addClass("active");
		$(".service_modal").addClass("active");
		$(".call_modal").removeClass("active");
	});

	$(".close_modal, .close_modal2").click(function () {
		$(".modal_back").removeClass("active");
		$(".service_modal, .call_modal").removeClass("active");
	});

	$(".modal_back").click(function () {
		$(this).removeClass("active");
		$(".service_modal, .call_modal, .information, .online").removeClass("active");
	});

	$(".to_call").click(function () {
		$(".service_modal").removeClass("active");
		$(".call_modal").addClass("active");
		$(".modal_back").addClass("active");
	});

	// tel mask
	const element = document.querySelectorAll(".form_actions input[type='tel']");
	element.forEach((item) => {
		const maskOptions = {
			mask: "+{7} 000-000-0000",
		};
		const mask = IMask(item, maskOptions);
	});

	$('.otziv_btn').click(function(){
		$(this).siblings('.otziv_description').toggleClass('show')
	})

	$('.navigation a:not(:has(svg))').click(function(){
		$(this).toggleClass('active')
		$(this).siblings().removeClass('active')
	})

	
	if($('.swiper_block').length > 0){
		var swiper = new Swiper(".swiper_block .mySwiper", {
			spaceBetween: 18,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
		  });
		  var swiper2 = new Swiper(".swiper_block .mySwiper2", {
			spaceBetween: 10,
			navigation: {
			  nextEl: ".swiper_block .gallery_next",
			  prevEl: ".swiper_block .gallery_prev",
			},
			thumbs: {
			  swiper: swiper,
			},
		  });
	}

	if($('.work_swiper').length > 0){
		var swiper = new Swiper(".work_swiper", {
			spaceBetween: 28,
			slidesPerView: 3,
			navigation: {
				nextEl: ".news_row .gallery_next",
				prevEl: ".news_row .gallery_prev",
			},
		});
	}

	$('.help').click(function(){
		$(this).addClass('hidde')
		$(".modal_back").addClass("active");
		$('.online').addClass('active')
	})
	$('.close_online, .modal_back').click(function(){
		$('.help').removeClass('hidde')
		$('.online').removeClass('active')
		$(".modal_back").removeClass("active");
	})

	$('.payment_type').click(function(e){
		e.preventDefault()
		$('.information').addClass('active')
		$(".modal_back").addClass("active");
	})
});
