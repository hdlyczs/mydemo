$(function(){
	// 页底导航部分
	$('nav li').first().find('.triangle').show()
	$('nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).find('.triangle').show().parent().siblings().find('.triangle').hide();
	})
	// 页面切换部分
	$('nav li').eq(0).click(function(){
		$('.view').css('transform','translateY(0%)')
		$('.sy1').css('top','15%').css('opacity','0.1')
		$('.sy1').stop().animate({top:'30%',opacity:1},2000)
		$('.sy2').css('top','55%').css('opacity','0.1')
		$('.sy2').stop().animate({top:'45%',opacity:1},2000)
	})
	$('nav li').eq(1).click(function(){
		$('.view').css({'transform':'translateY(-100%)'})
		$('.sy1').css('top','15%').css('opacity','0.1')
		$('.sy1').stop().animate({top:'30%',opacity:1},2000)
		$('.sy2').css('top','55%').css('opacity','0.1')
		$('.sy2').stop().animate({top:'45%',opacity:1},2000)
	})
	$('nav li').eq(2).click(function(){
		$('.view').css('transform','translateY(-200%)')
		$('.sy1').css('top','15%').css('opacity','0.1')
		$('.sy1').stop().animate({top:'30%',opacity:1},2000)
		$('.sy2').css('top','55%').css('opacity','0.1')
		$('.sy2').stop().animate({top:'45%',opacity:1},2000)
	})
	$('nav li').eq(3).click(function(){
		$('.view').css('transform','translateY(-300%)')
		$('.sy1').css('top','15%').css('opacity','0.1')
		$('.sy1').stop().animate({top:'30%',opacity:1},2000)
		$('.sy2').css('top','55%').css('opacity','0.1')
		$('.sy2').stop().animate({top:'45%',opacity:1},2000)
	})
	$('nav li').eq(4).click(function(){
		$('.view').css('transform','translateY(-400%)')
		$('.sy1').css('top','15%').css('opacity','0.1')
		$('.sy1').stop().animate({top:'30%',opacity:1},2000)
		$('.sy2').css('top','55%').css('opacity','0.1')
		$('.sy2').stop().animate({top:'45%',opacity:1},2000)
	})	
});