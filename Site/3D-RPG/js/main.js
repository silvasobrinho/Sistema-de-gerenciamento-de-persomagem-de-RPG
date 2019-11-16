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

			 function login(){
				$('#errorlogin').addClass("hide");

				let email = document.getElementById("modalLRInput10").value;
				let password = document.getElementById("modalLRInput11").value;
				let url = "http://localhost:3333/sessions";

				axios.post(url,{
					email : email,
					password: password,
					})
				.then(function (response) {
					$('#sclogin').removeClass("hide");
					
					localStorage.setItem('rpgtoken',response.data.token);
					
					console.log(localStorage.getItem("rpgtoken"))
					


					axios.post('http://localhost:3333/userdata',{
						token : localStorage.getItem("rpgtoken"),
						})
					.then(function (response) {
					
					localStorage.setItem('rpgusername',response.data.username);
					localStorage.setItem('rpgemail',response.data.email);
					localStorage.setItem('rpgid',response.data.id);
					localStorage.setItem('rpglog',"true");
					console.log(localStorage.getItem("rpgusername"))
					console.log(localStorage.getItem("rpgemail"))
					console.log(localStorage.getItem("rpgid"))
					window.location.href="logged.html";
					}).catch(function (error) {
						console.log("erro de pegar credenciais dentro do login e gravar")
					})

				})
				.catch(function (error) {
					
					$('#errorlogin').removeClass("hide");
					console.error(error)
				});
				}



			function register(){
				$('#erroregister').addClass("hide");
				$('#erroruser').addClass("hide");
				$('#userregister').addClass("hide");
				if(document.getElementById("modalLRInput13").value !== document.getElementById("modalLRInput14").value){
						return $('#erroregister').removeClass("hide");

				}
				let email = document.getElementById("modalLRInput12").value;
				let password = document.getElementById("modalLRInput13").value;
				let username = document.getElementById("rusername").value;
				console.log("tentando registrar")
				let url = "http://localhost:3333/register";
				
				axios.post(url,{
					email : email,
					password: password,
					username: username,
				})
				.then(function (response) {
					console.log(response)
					$('#userregister').removeClass("hide");
				})
				.catch(function (error) {
					
					$('#erroruser').removeClass("hide");
					console.error(error)
				});

			}


			//verifica se esta logado e remove o botao de logar e adiciona o de deslogar
			console.log(localStorage.getItem("rpglog"));

			if(localStorage.getItem("rpglog") === 'true'){
				console.log("entrei")
				$('#logar').addClass("hide");
				$('#deslogar').removeClass("hide");
				$('#ausuario').removeClass("hide");
			}else{
				$('#logar').removeClass("hide");
				$('#deslogar').addClass("hide");
				$('#ausuario').addClass("hide");
			}


		
		function logout(){
					localStorage.setItem('rpgusername',null);
					localStorage.setItem('rpgemail', null);
					localStorage.setItem('rpgid', null);
					localStorage.setItem('rpglog', null);
					window.location.href="index.html";
		}