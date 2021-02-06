$(function(){
	"use strict";
	$(window).on('load',function(event){
			$('.preloader').delay(500).fadeOut(500);
		}
	);

	$(window).on('scroll',function(event){
	    var scroll = $(window).scrollTop();
		  if(scroll<20) {
			    $(".navbar-area").removeClass("sticky");
		  } else {
			      $(".navbar-area").addClass("sticky");
		    }
     }
  );

	var scrollLink = $('.page-scroll');
	$(window).scroll(function(){
	    var scrollbarLocation = $(this).scrollTop();
		  scrollLink.each(function() {
		      var sectionOffset = $(this.hash).offset().top-73;
				  if(sectionOffset <= scrollbarLocation) {
					    $(this).parent().addClass('active');
					    $(this).parent().siblings().removeClass('active');
				     }
			    }
		    );
	   }
	);

	$(".navbar-nav a").on('click',function() {
	    $(".navbar-collapse").removeClass("show");
		 }
	);

	$(".navbar-toggler").on('click',function(){
	    $(this).toggleClass("active");
		 }
	);

	$(".navbar-nav a").on('click',function(){
      $(".navbar-toggler").removeClass('active');
		 }
	);

	$('.video-popup').magnificPopup({
			type:'iframe'
		}
	);

	$('.image-popup').magnificPopup({
			type:'image',gallery:{
				enabled:true
			}
		}
	);

	$(window).on('scroll',function(event) {
	    if($(this).scrollTop()>600){
			    $('.back-to-top').fadeIn(200)
			   } else {
					    $('.back-to-top').fadeOut(200)
				    }
			 }
	);

	$('.back-to-top').on('click',function(event) {
	    event.preventDefault();

	$('html, body').animate({
				scrollTop:0,
			 },1500);
	  }
	);

	jQuery('img.svg').each(function() {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			jQuery.get(imgURL,function(data){
			    var $svg = jQuery(data).find('svg');
				  if(typeof imgID !== 'undefined') {
					    $svg=$svg.attr('id',imgID);
				    }
				  if(typeof imgClass !== 'undefined') {
					    $svg = $svg.attr('class',imgClass+' replaced-svg');
				    }
			$svg = $svg.removeAttr('xmlns:a');
			$img.replaceWith($svg);
			},'xml');
		}
	);

	new WOW().init();
	var swiper = new Swiper('.swiper-container',{
			pagination:{
				el:'.swiper-pagination',
				type:'bullets',
				clickable:true,
			},
			speed:1000,
			effect:'coverflow',
			loop:true,
			centeredSlides:true,
			slidesPerView:'auto',
			coverflowEffect:{
				rotate:0,
				stretch:40,
				depth:150,
				modifier:1,
				slideShadows:false,
			}
		}
	);

	$('.testimonial-content').slick({
	    slidesToShow:1,
		  slidesToScroll:1,
		  arrows:false,
		  fade:true,
		  asNavFor:'.testimonial-author'
		}
	);

	$('.testimonial-author').slick({
			slidesToShow:5,
			slidesToScroll:1,
			asNavFor:'.testimonial-content',
			dots:false,
			arrows:false,
			centerMode:true,
			focusOnSelect:true,
			centerPadding:"0",
			responsive:[{
				breakpoint:768,
				settings:{
					slidesToShow:3
					}
				},
				{
				breakpoint:576,
				settings:{
						slidesToShow:3
						}
					}
				]
			}
		);
	}
);

//function for altering image
var image = document.getElementById('iphoneimg');
var image02 = document.getElementById('iphoneimg02');
var image03 = document.getElementById('iphoneimg03');

function changeImage() {
  if (image.src.match("assets/images/slideimg/phone-a_lg.png")) {
  			image.src = "assets/images/slideimg/phone-a_lg.png";
				image02.src = "assets/images/slideimg/phone-c_sm.png";
				image03.src = "assets/images/slideimg/phone-b_sm.png";
  		}
	}

	function changeImage02() {
	  if (image02.src.match("assets/images/slideimg/phone-c_sm.png")) {
	  			image.src = "assets/images/slideimg/phone-c_lg.png";
					image02.src = "assets/images/slideimg/phone-a_sm.png";
					image03.src = "assets/images/slideimg/phone-b_sm.png";
	  		}
		}

		function changeImage03() {
		  if (image03.src.match("assets/images/slideimg/phone-b_sm.png")) {
		  			image.src = "assets/images/slideimg/phone-b_lg.png";
						image02.src = "assets/images/slideimg/phone-a_sm.png";
						image03.src = "assets/images/slideimg/phone-c_sm.png";
		  		}
			}

/*
		function changeImage03() {
			if (image03.src.match("assets/images/iphoneX-left.png")) {
						image.src = "assets/images/iphoneX-left-resize.png";
						image02.src = "assets/images/iphoneX-right.png";
						image03.src = "assets/images/iphoneX-small.png";
					} 	else {
								image.src = "assets/images/iphoneX.png";
							}
			}
*/

//function for altering image using querySelector
//let tmbList = document.querySelectorAll('div.xnTmbWrap > a img');
