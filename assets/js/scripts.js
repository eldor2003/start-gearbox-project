document.addEventListener("DOMContentLoaded", function () {

	var phoneInputs = document.querySelectorAll('input[data-tel-input]');

	var getInputNumbersValue = function (input) {

		// Return stripped input value — just numbers

		return input.value.replace(/\D/g, '');

	}

	var onPhonePaste = function (e) {

		var input = e.target,

			inputNumbersValue = getInputNumbersValue(input);

		var pasted = e.clipboardData || window.clipboardData;

		if (pasted) {

			var pastedText = pasted.getData('Text');

			if (/\D/g.test(pastedText)) {

				// Attempt to paste non-numeric symbol — remove all non-numeric symbols,

				// formatting will be in onPhoneInput handler

				input.value = inputNumbersValue;

				return;

			}

		}

	}

	var onPhoneInput = function (e) {

		var input = e.target,

			inputNumbersValue = getInputNumbersValue(input),

			selectionStart = input.selectionStart,

			formattedInputValue = "";

		if (!inputNumbersValue) {

			return input.value = "";

		}

		if (input.value.length != selectionStart) {

			// Editing in the middle of input, not last symbol

			if (e.data && /\D/g.test(e.data)) {

				// Attempt to input non-numeric symbol

				input.value = inputNumbersValue;

			}

			return;

		}

		if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {

			if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;

			var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";

			formattedInputValue = input.value = firstSymbols + " ";

			if (inputNumbersValue.length > 1) {

				formattedInputValue += '(' + inputNumbersValue.substring(1, 4);

			}

			if (inputNumbersValue.length >= 5) {

				formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);

			}

			if (inputNumbersValue.length >= 8) {

				formattedInputValue += '-' + inputNumbersValue.substring(7, 9);

			}

			if (inputNumbersValue.length >= 10) {

				formattedInputValue += '-' + inputNumbersValue.substring(9, 11);

			}

		} else {

			formattedInputValue = '+' + inputNumbersValue.substring(0, 16);

		}

		input.value = formattedInputValue;

	}

	var onPhoneKeyDown = function (e) {

		// Clear input after remove last symbol

		var inputValue = e.target.value.replace(/\D/g, '');

		if (e.keyCode == 8 && inputValue.length == 1) {

			e.target.value = "";

		}

	}

	for (var phoneInput of phoneInputs) {

		phoneInput.addEventListener('keydown', onPhoneKeyDown);

		phoneInput.addEventListener('input', onPhoneInput, false);

		phoneInput.addEventListener('paste', onPhonePaste, false);

	}

})
$(document).ready(function () {

	// quiz opener
	$("#quiz_open").on("click", function (e) {
		e.preventDefault();
		if (window.screen.width>769){
			$(".quiz_wrapper").addClass("active");
			$(".quiz_block").addClass("active");
		}
	});
	if (window.screen.width<769){
		$(".quiz_wrapper").addClass("active");
		$(".quiz_block").addClass("active");
	}
	
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
			breakpoints: {
				// when window width is >= 0px
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				// when window width is >= 640px
				577: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
			}
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
				if (window.screen.width>769){
					$(".quiz_wrapper").removeClass("active");
					$(".quiz_block").removeClass("active");
				}
				
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
			breakpoints: {
				// when window width is >= 0px
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				// when window width is >= 640px
				577: {
					slidesPerView: 1.5,
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
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				577: {
					slidesPerView: 1.5,
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
		$(this).parent().siblings().removeClass('active')
		$(this).parent().siblings().find('*').removeClass('active')
		$(this).parent().find('*').removeClass('active')
	});
	$(".open_menu").siblings('a').click(function (e) {
		e.preventDefault()
		$(this).parent().toggleClass("active");
		$(this).parent().siblings().removeClass('active')
		$(this).parent().siblings().find('*').removeClass('active')
		$(this).parent().find('*').removeClass('active')
	});

	$(".open_inner").siblings('div').click(function () {
		$(this).parent().toggleClass("active");
		$(this).parent().siblings().removeClass('active')
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

	$(".menu .open_inner ").click(function () {
		$(".modal_back").addClass("active");
		$(".service_modal").addClass("active");
		$(".call_modal").removeClass("active");
	});
	$(".menu .open_inner ").siblings('div').find('a').click(function () {
		$(".modal_back").addClass("active");
		$(".service_modal").addClass("active");
		$(".call_modal").removeClass("active");
	});

	$(".close_modal, .close_modal2").click(function () {
		$(".modal_back").removeClass("active");
		$(".service_modal, .call_modal, .information ").removeClass("active");
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
	const element = document.querySelectorAll("input[type='tel']");
	
	element.forEach((item) => {
		const maskOptions = {
			mask: "+{0} 000-000-0000",
		};
		const mask = IMask(item, maskOptions);
	});

	$('.otziv_btn').click(function(){
		$(this).toggleClass('active')
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
			breakpoints:{
				0:{
					slidesPerView: 1,
					spaceBetween: 18,
				},
				768:{
					slidesPerView: 3,
					spaceBetween: 18,
				},
				992:{
					slidesPerView: 4,
					spaceBetween: 18,
				},
			},
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
	
	if(window.screen.width > 768 && $('.work_swiper').length > 0){
		const breakpoint = window.screen.width;

        const breakpoinChekker = function(){
          if(breakpoint < 768){
            if(swiper !== undefined) swiper.destroy(true, true);
            return;
          }
          else if(breakpoint >= 768){
            return enableSwiper();
          }
        };
		const enableSwiper = function(){

			const swiper = new Swiper(".work_swiper", {
				spaceBetween: 28,
				slidesPerView: 3,
				navigation: {
					nextEl: ".news_row .gallery_next",
					prevEl: ".news_row .gallery_prev",
				},
				breakpoints:{
					0: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 28,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 28,
					}
				}
			});
		}

		breakpoinChekker()
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

	$('.hamburger').click(function(){
		$('.header_bottom').toggleClass('active')
	})

	if(window.screen.width < 768 && $('.swiper3').length > 0){
		
		const breakpoint = screen.width;
    
        const breakpoinChekker = function(){
          if(breakpoint > 768){
            if(swiper !== undefined) swiper.destroy(true, true);
            return;
          }
          else if(breakpoint <= 768){
            return enableSwiper();
          }
        };

        const enableSwiper = function(){
          const swiper3 = new Swiper('.swiper3', {
            navigation: {
              nextEl: '.swiper3 .gallery_next',
              prevEl: '.swiper3 .gallery_prev',
            },
            spaceBetween: 20,
            slidesPerView: 1,
          })
    
        }    
    
        breakpoinChekker()

	}

	$('.service_modal .service_header svg').click(function(){
		$(this).toggleClass('rotate')
		$('.services_list:first-child').slideToggle(300)
	})
	
	$('.help img:not(:first-child)').css('opacity','0')
	arr = $('.help img')
	i=1
	
	setInterval(function() {
		$('.help img').css('opacity','0')
		$(arr[i]).css('opacity', '1')
		i++
		if(i==4){
			i=0
		}
	}, 10000);

	

});
