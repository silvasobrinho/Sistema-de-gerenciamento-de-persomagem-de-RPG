/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	$('.news-ticker').marquee({
	    duration: 10000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

})(jQuery);



/*-------------------------
requisição
------*//* 
function login(email, senha){
	axios.post('/sessions',{
		email: email,
		password: senha

	})
	.then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	};


	$(document).ready(function() {
		//form submit
		const URL = 'http://localhost:3000/sessions'

		$("#login").submit(function(event){
			var _email      = $('#email').val();
			var _password   = $('#password').val();
			
		axios
		  .post(URL, 
			{ email:_email, password: _password })
		  .then(response => {
					// If request is good...
					window.localStorage.setItem(response.token)
				  })
				.catch((error) => {
					console.log(error)
				  })		
		})
	});

	const USER_TOKEN = localStorage.getItem('token')
	const AuthStr = 'Bearer '.concat(USER_TOKEN)
	const URL = 'http://localhost:3000/sessions'	
	axios
	  .get(URL, 
		{ headers: { Authorization: AuthStr } })
	  .then(response => {
				
				console.log(response.data)
			  })
			.catch((error) => {
				console.log(error)
			  })



			  $(document).ready(function() {
				//form submit
				const URL = 'http://localhost:3000/register'
		
				$("#register").submit(function(event){
					var _email      = $('#email').val();
					var _password   = $('#password').val();
					
				axios
				  .post(URL, 
					{ email:_email, password: _password })
				  .then(response => {
							// If request is good...
							console.log("registrou")
						  })
						.catch((error) => {
							console.log(error)
						  })		
				})
			}); */

			/******** New Game 
			 * ***************/

			 