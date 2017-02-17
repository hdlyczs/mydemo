$(function(){
	var sidenav=$('.sidenav');
	var mask=$('.mask');
	var clcd=$('.clcd');
    clcd.click(function(){
	 	sidenav.css({right:0});
	  	mask.fadeIn();
	})
	sidenav.mouseleave(function(){
		sidenav.css({right:-sidenav.width()});
		mask.fadeOut();
	})
	var backtotop=$('.backtotop');
	backtotop.click(function(){
		$('html,body').animate({scrollTop:0},2000);
	})
	$(window).scroll(function(){
		if ($(window).scrollTop()>$(window).height()-100) {
			backtotop.fadeIn()
		}
		else{
			backtotop.fadeOut()
		}
	})
	$(window).trigger('scroll');
});