/*------------------------------------
Single Page Blog Post
	Start Date :  02-04-2018
	End Date : 
	Last change: 02-04-2018
	Version: 1.0
	Assigned to:
	Primary use: personal site
---------------------------------------*/
/*	
	Table of Content
	 
	 -- Menu Scroll
	 -- scrollspy Activation
	 -- Init Wow.js
	 -- Init Carousels: Testimonial, Events, Blog, Screenshot
	 -- Init YouTubePopUp
	 -- Newsletter form validation
	 -- Hover buttons : Add animation effect when hovered 
		
*/

(function($) { 
	"use strict" 
	/* Menu Scroll*/
	// Smooth scrolling using jQuery easing
	  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on( "click", function() {
	    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: (target.offset().top - 54)
	        }, 1000, "easeInOutExpo");
	        return false;
	      }
	    }
	  });

	  // Closes responsive menu when a scroll trigger link is clicked
	  $('.js-scroll-trigger').on( "click", function(){
	    $('.navbar-collapse').collapse('hide');
	  }); 
	  /* Menu Scroll /-  */

	/* + Document On Ready */
	$(document).on("ready", function() {

		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
		   target: '#mainNav',
		   offset: 54
		}); 

		// Add class nav when scroll 
		var $navbarHeader = $('.header_wrap > nav.navbar');
		var $navbarBanner = $('.banner-pages > nav.navbar');
		$(window).scroll(function() { 
		  /* Home page Navbar */	
		  if( $(window).scrollTop() > 700 ) {  
		  	$navbarHeader.addClass('navbar-highlited navbar-fixed-top');  
		  } else if ( $(window).scrollTop() < 700 ) {  
		  	$navbarHeader.removeClass('navbar-highlited navbar-fixed-top');  
		  } 
		});
 		
		// Init Wow.js
		new WOW().init(); 

		/* ---- Init Carousels  ------*/
		//Testimonial Carousel
		$('.testimonial-carousel').owlCarousel({
		    loop:true,
		    margin:10, 
		    responsive:{
		        0:{ items:1}, 
		        600:{ items:2 },
		        1000:{ items:2 }
		    }
		})

		//Events Carousel
		var swiper = new Swiper('.events-list', {
	        pagination: '.events-pagination',
	        slidesPerView: 1,
	        slidesPerColumn: 2,
	        paginationClickable: true,
	        spaceBetween: 10
	    });


		//Blog Carousel
		$('.blog-carousel').owlCarousel({
		    loop:true,
		    margin:10, 
		    responsive:{
		        0:{ items:1}, 
		        600:{ items:2 },
		        1000:{ items:3 }
		    },
		    autoplay:true,
		    autoplayTimeout:1000,
		    autoplayHoverPause:true,
		    dots: false
		});


		//Screenshot Carousel
		var coverflow = $("#screenshot-carousel").flipster(); 


		//Initialize YouTubePopUp
		$("a.btn-play-video").YouTubePopUp(); 

  
		// jQuery Validation
		$("#signup").validate({
			// if valid, post data via AJAX
			submitHandler: function(form) {
				$.post("../php/subscribe.php", { fname: $("#fname").val(), lname: $("#lname").val(), email: $("#email").val() }, function(data) {
					$('#response').html(data);
				});
			},
			// all fields are required
			rules: { 
				email: {
					required: true,
					email: true
				}
			}
		});


		/* ---- Animate Button on hover  ------*/
		//Hover play demo video Button 
		$( "a.btn-play-video" ).hover(
		  function() {
		    $( this ).addClass('pulse infinite animated');
		  }, function() {
		    $( this ).removeClass('pulse infinite animated');
		  }
		);   
		//Hover social media
		$( ".social-media-footer img" ).hover(
		  function() {
		    $( this ).addClass('flip infinite animated');
		  }, function() {
		    $( this ).removeClass('flip infinite animated');
		  }
		);  

	});	/* - Document On Ready /- */ 

})(jQuery);