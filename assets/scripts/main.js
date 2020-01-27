$(document).ready(function() {
	countUp.init();
	navigate.init();
	tilt.init();
});

/*** Pagination and Color Changes ******************************/
var navigate = {
	init: function() {
		$('#start-btn').click(navigate.onStartBtnClick);
		$('#btn-prev').click(navigate.onPrevBtnClick);
		$('#btn-next').click(navigate.onNextBtnClick);
	},
	
	changeColors: function() {
		if($('.active').hasClass('bg-primary')) {
			$('.logo').addClass('text-secondary');
			$('.pagination').addClass('text-secondary');
		} else {
			$('.logo').removeClass('text-secondary');
			$('.pagination').removeClass('text-secondary');
		}
	},
	
	hideNavBtn: function() {
		if($('.section--seasons').hasClass('active')) {
			$('#btn-prev').hide();
		} else {
			$('#btn-prev').removeAttr('style');
		}
		
		//if($('.section--cliffhanger').hasClass('active')) {
			//$('.pagination').hide();
		//} else {
			//$('.pagination').removeAttr('style');
		//}
		
		if($('.section--outro').hasClass('active')) {
			$('#btn-next').hide();
		} else {
			$('#btn-next').removeAttr('style');
		}
	},
	
	onPrevBtnClick: function() {
		var currentSection =	$('.active');
		var prevSection = currentSection.prev();
		
		currentSection.addClass('is-hidden');
		currentSection.removeClass('active');
		prevSection.addClass('active');
		prevSection.removeClass('is-hidden');
		
		navigate.hideNavBtn();
		carousel.unset();
		carousel.init();
		navigate.changeColors();
	},
	
	onNextBtnClick: function() {
		var currentSection =	$('.active');
		var nextSection = currentSection.next();
		
		currentSection.addClass('is-hidden');
		currentSection.removeClass('active');
		nextSection.addClass('active');
		nextSection.removeClass('is-hidden');

		navigate.hideNavBtn();
		carousel.unset();
		carousel.init();
		navigate.changeColors();
	},
	
	onStartBtnClick: function(e) {
		var parent = $(e.target).parent();
		parent.addClass('is-hidden');
		parent.next().removeClass('is-hidden');
		parent.next().addClass('active');
		
		//navigate.hideNavBtn();
		//carousel.init();
		//$('.pagination').removeClass('is-hidden');
		//navigate.changeColors();
	},
	
	pageCount: function() {
		//
	},
};
 
/*** 2019 animation ******************************/
var countUp = {
	init: function() {
		var year = $('.year');
		var countTo = year.attr('data-count');
		var speed = Math.round(countTo / 500);
		var intSpeed = 1;
		var i = 20 ;
		// Count up to 2019
		var int = setInterval(function() {
			if(i < 500){
				year.text(speed * i);
				i++;
			} else if(parseInt(year.text()) < countTo) {
				var curr_count = parseInt(year.text()) + 1;
				year.text(curr_count);
			} else {
				clearInterval(int);
			}
		}, intSpeed);
		// Fade text
		setTimeout(function() {
    	$('.year').fadeOut();
		}, 2500);
		// Text transition
		setTimeout(function() {
    		$('.year').hide();
			$('.intro-text').fadeIn(2900);
			$('.btn--cta').fadeIn(3500);
    		$('.intro-text').removeClass('is-hidden');
			$('.btn--cta').removeClass('is-hidden');
		}, 2800); 
	},
};

/*** tilt.js ******************************/
var tilt = {
	init: function() {
		tilt.introText();
	},
	introText: function() {
		$(".intro-text").tilt({
    maxTilt: 25,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    scale: 1,
  });
	},
};

/*** slick.js ******************************/
var carousel = {
	init: function() {
        $('#carousel-season').slick({
            infinite: true,
            arrows: false,
            dots: true
        });
    
        $('#carousel-project').slick({
            infinite: true,
            arrows: false,
            dots: true
        });
    
        $('#carousel-figure').slick({
            infinite: true,
            arrows: false,
            dots: true
        });
	},
	
	unset: function() {
        $('#carousel-season').slick('unslick');
        $('#carousel-project').slick('unslick');
        $('#carousel-figure').slick('unslick');
	},
};