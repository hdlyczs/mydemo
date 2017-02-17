
$(function(){
	$(window).on("scroll",check1);
	function check1(){
		if($(window).scrollTop()>500){
			$('.leftnav').addClass('leftnavindex')
		}
		else{
			$('.leftnav').removeClass('leftnavindex')
	    }
	}
		$('.leftnav ul li a').click(function(){
			var str=$(this).attr('href')
			$('html,body').animate({scrollTop:$(str).offset().top})
			// $('html,body').animate({scrollTop: $($(this).attr("href")).offset().top})
		})
/*左侧定位的导航菜单*/
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		var floorid="";
		$('.main2').each(function(){
			var leavetop=$(this).offset().top
			if(top>leavetop-200){
				floorid="#"+$(this).attr('id')
			}
			else{
				$('.leftnav a').eq(0).addClass('style');
			}		
		});
		var floorlink=$('.leftnav').find('.style');
		if(floorlink.attr('href')!=floorid){
			floorlink.removeClass('style');
			$('.leftnav').find("[href="+floorid+"]").addClass('style')
		}
	})
/*head部分*/ 
	$('.headertop_right ul li').hover(function(){
		$(this).find('.gwc').stop().slideDown()
	},function(){
		$(this).find('.gwc').stop().slideUp()
	});
	$('.headertop_right ul li').hover(function(){
		$(this).find('.wzdh').stop().slideDown()
	},function(){
		$(this).find('.wzdh').stop().slideUp()
	});
	$('.qbfl dl dt').hover(function(){
		$(this).find('.qbfl_list').show()
	},function(){
		$(this).find('.qbfl_list').hide()
	})
	$('.qbfl dl dd').hover(function(){
		$(this).find('.qbfl_list').show()
	},function(){
		$(this).find('.qbfl_list').hide()
	})
	$('.left_navlist').first().show()
	$('.banner_left .left_nav ul li').hover(function(){
		$(this).find('.left_navlist').show()
	},function(){
		$(this).find('.left_navlist').hide()
	})
	/*$('.banner_left .left_nav').hover(function(){},function(){
		$('.left_navlist').last().show()
	})*/
});
//banner部分
$(function(){
	//右div点击
	$('.banner .num li').first().addClass('numon')
	var i=0
	$('.banner .btn_right').click(function(){
		i++
		if(i==4){
			i=0
		}
		$('.banner .img').animate({left:i*-1366},'slow')
		$('.banner .num li').eq(i).addClass('numon').siblings().removeClass('numon')
	})
    //下标的点击
	$('.banner .num li').click(function(){
		var a=$(this).index()
		$('.banner .img').animate({left:a*-1366},'slow')
		$('.banner .num li').eq(a).addClass('numon').siblings().removeClass('numon')
	})
	//左div点击
	$('.banner .btn_left').click(function(){
		i--
		if(i==-1){
			i=3
		}
		$('.banner .img').animate({left:i*-1366},'slow')
		$('.banner .num li').eq(i).addClass('numon').siblings().removeClass('numon')
	})
	//定时器的设定
	var j=0
	function moveself(){
		j++
		if(j==4){
			j=0
		}
		$('.banner .img').animate({left:j*-1366},'slow')
		$('.banner .num li').eq(j).addClass('numon').siblings().removeClass('numon')
	}
		t=setInterval(moveself,6000)
	$('.banner').hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(moveself,6000)
	})
	/*main区的表格轮播*/
	$('.show3 .xbtl ul li').first().addClass('lion');
	$('.show3_main').first().show();
	$('.show3_right').click(function(){
		i++
		if(i==3){
			i=0
		}
		$('.show3_main').eq(i).show().siblings().hide();
		$('.show3 .xbtl ul li').eq(i).addClass('lion').siblings().removeClass('lion');
	})
	$('.show3_left').click(function(){
		i--
		if(i==-1){
			i=2
		}
		$('.show3_main').eq(i).show().siblings().hide();
		$('.show3 .xbtl ul li').eq(i).addClass('lion').siblings().removeClass('lion');
	})
	$('.show3 .xbtl ul li').click(function(){
		var a=$(this).index()
		$('.show3_main').eq(a).show().siblings().hide();
		$('.show3 .xbtl ul li').eq(a).addClass('lion').siblings().removeClass('lion');
	})
	/*main区自我介绍部分*/
	$('.about_me').hover(function(){
		//$(this).find('.about_con').slideDown(2000,'easeInOutElastic')//slideDown({duration:1000,easing:'easeInOutElastic'})
		$(this).find(".about_fm").children().removeClass();
		$(this).find(".about_con").children().removeClass();
		$(this).find(".about_fm").children().addClass("test");
		$(this).find(".about_con").children().addClass('test2');
	},function(){
		$(this).find(".about_fm").children().removeClass();
		$(this).find(".about_con").children().removeClass();
		$(this).find(".about_fm").children().addClass("test2");
		$(this).find(".about_con").children().addClass('test');
	})
	/*show3广告轮播部分*/
	$('.show3').hover(function(){
		$('.show3_bottom_btnleft').fadeIn()
	},function(){
		$('.show3_bottom_btnleft').fadeOut()
	})
	$('.show3').hover(function(){
		$('.show3_bottom_btnright').fadeIn()
	},function(){
		$('.show3_bottom_btnright').fadeOut()
	})
	/*左按钮*/
	var i=0
	var clone=$('.show3_tplb li').first().clone();
	$('.show3_tplb').append(clone);
	$('.show3_bottom_btnleft').click(function(){
		i++
		if(i==5){
			$('.show3_tplb').css({left:0})
			i=1;
		}
		$('.show3_tplb').animate({left:i*-200})
	})
	/*右按钮*/

	$('.show3_bottom_btnright').click(function(){
		i--
		if(i==-1){
			$('.show3_tplb').css({left:5*-200})
			i=4
		}
		$('.show3_tplb').animate({left:i*-200})
	})

	/*main2部分*/
	$('.title ul li').last().css({"border":"none"})
	$('.main2 .xbtl ul li').first().addClass('lion');
	$('.main2 .contant').first().show();
	$('.main2 .contant').eq(0).find('.xiaoad').last().css({"margin-right":"0px"})
	$('.main2 .contant').eq(1).find('.xiaoad').last().css({"margin-right":"0px"})
	$('.main2 .contant').eq(2).find('.xiaoad').last().css({"margin-right":"0px"})
	$('.main2_right').click(function(){
		i++
		if(i==3){
			i=0
		}
		$('.main2 .contant').eq(i).show().siblings().hide();
		$('.main2 .xbtl ul li').eq(i).addClass('lion').siblings().removeClass('lion');
	})
	$('.main2_left').click(function(){
		i--
		if(i==-1){
			i=2
		}
		$('.main2 .contant').eq(i).show().siblings().hide();
		$('.main2 .xbtl ul li').eq(i).addClass('lion').siblings().removeClass('lion');
	})
	$('.main2 .xbtl ul li').click(function(){
		var a=$(this).index()
		$('.main2 .contant').eq(a).show().siblings().hide();
		$('.main2 .xbtl ul li').eq(a).addClass('lion').siblings().removeClass('lion');
	})
	/*XX直播hover部分*/
	$('.daad').hover(function(){
		$('.daad_con').stop().fadeIn()
	},function(){
		$('.daad_con').stop().fadeOut()
	})
	$('.zhongad').hover(function(){
		$(this).find('.zhongad_con').stop().slideDown({duration:1000,easing:'easeOutBounce'})
	},function(){
		$(this).find('.zhongad_con').stop().slideUp()
	})
	/*XX娱乐部分*/
	$('.yltplb .num li').first().addClass('on')
	var clone=$('.yltplb .img li').first().clone();
	$('.yltplb .img').append(clone);
	var i=0
	$('.yltplb .yl_right').click(function(){
		i++
		if(i==5){
			$('.yltplb .img').css({left:0})
			i=1
		}
		$('.yltplb .img').animate({left:i*-550})
	$('.yltplb .num li').eq(i).addClass('on').siblings().removeClass('on')	
	if (i==4) {
		$('.yltplb .num li').eq(0).addClass('on').siblings().removeClass('on')
	}
	})
	$('.yltplb .yl_left').click(function(){
		i--
		if(i==-1){
			$('.yltplb .img').css({left:4*-550})
			i=3
		}
		$('.yltplb .img').animate({left:i*-550})
	$('.yltplb .num li').eq(i).addClass('on').siblings().removeClass('on')
	})
	$('.yltplb .num li').click(function(){
		var i=$(this).index()
		$('.yltplb .img').animate({left:i*-550},'slow')
		$('.yltplb .num li').eq(i).addClass('on').siblings().removeClass('on');
	})
	//card-container-2
	var cc2 = $('.card-container-2');
	cc2.children('.right').on('click',function(){
  	var firstCard = $('.card-container-2 .card').first();
  	cc2.children('.card-holder').append(firstCard);
	})
	cc2.children('.left').on('click',function(){
  	var lastCard = $('.card-container-2 .card').last();
  	cc2.children('.card-holder').prepend(lastCard);
	})
	//card-container-5
	var cc5 = $('.card-container-5');
	cc5.click(function(){
  	var firstCard = cc5.children('.card').first(),
      cssRoll = {
        transform: 'rotate(-45deg)',
        opacity:0
     };
  	firstCard.css(cssRoll);
  	setTimeout(function(){
    cc5.append(firstCard);
    firstCard.attr('style','');
  	},300);
	})
})
/*show3定时器部分*/
$(function(){
	var x=0
	function show3_moveself(){
		x++
		if(x==5){
			$('.show3_tplb').css({left:0})
			x=1
		}
		$('.show3_tplb').animate({left:x*-200},'slow')
	}
	y=setInterval(show3_moveself,3000)
	$('.show3').hover(function(){
		clearInterval(y)
	},function(){
		y=setInterval(show3_moveself,3000)
	})
})