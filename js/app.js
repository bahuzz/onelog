$(document).ready(function() {
	$('.sidemenu-btn').on('click',function(){
		$('.sidemenu').toggleClass('sidemenu-closed');
		$('.template-wrapper').toggleClass('template-wrapper-menu-open');
		$(this).toggleClass('sidemenu-btn-close');
	});
	$(".sidemenu-list").mCustomScrollbar();
});