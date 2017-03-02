$(document).ready(function() {
	$('.sidemenu-btn').on('click',function(){
		$('.sidemenu').toggleClass('sidemenu-closed');
		$('.sidemenu').toggleClass('sidemenu-open');
		$('.template-wrapper').toggleClass('template-wrapper-menu-open');
		$(this).toggleClass('sidemenu-btn-close');
	});
	$(".sidemenu-list").mCustomScrollbar({
		scrollButtons:{
			enable:true,
			scrollType: "stepped",
			scrollAmount: 100
		}
	});

	if (document.body.clientWidth > '1279') {
		$(".text-right-col").mCustomScrollbar({
			scrollButtons:{
				enable:true,
				scrollType: "stepped",
				scrollAmount: 100
			}
		});

		$(".text-left-col").mCustomScrollbar({
			scrollButtons:{
				enable:true,
				scrollType: "stepped",
				scrollAmount: 100
			}
		});
	};
	
});