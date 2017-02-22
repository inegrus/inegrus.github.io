// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: 'smooth'
// });

// Scroll certain amounts from current position
// window.scrollBy({
//   top: 100, // could be negative value
//   left: 0,
//   behavior: 'smooth'
// });

// function scrollTo(name){
//     document.getElementById(name).scrollIntoView({
//   behavior: 'smooth'
// });
// }

$(document).ready(function(){
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
		// $('.navbar-default a').removeClass('selected');
		// $(this).addClass('selected');
    	});
});
