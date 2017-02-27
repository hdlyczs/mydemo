window.onload = function(){
	// 搜索栏颜色变换
	change();
	// 图片轮播
	move();
	// 倒计时
	downtime();
}

function change(){
	var a = document.querySelector('.banner').offsetHeight+document.querySelector('.nav').offsetHeight
     window.onscroll = function(){
     	var b = window.document.body.scrollTop
     	var c = 0
     	if(b<a){
     		c = b/a*0.85
     	}
     	else{
     		c = 0.85
     	}
     	document.querySelector('.wapper').style.background="rgba(201,21,35,"+c+")"
     }
}

function move(){
	var moveul = document.querySelector('.banner ul:first-child');
	var width = document.querySelector('.banner').offsetWidth
	var pointarry = document.querySelectorAll('.banner ul:last-child li')
	var index = 1
	var movetimer = setInterval(function(){
		index++;
		// if(index>9){
		// 	index=1
		// }
		moveul.style.transform = "translateX(-"+index*width+"px)";
		moveul.style.transition = " all .3s"
		// moveicon 部分
	},2000)
	moveul.addEventListener("transitionend",function(){
		if (index>=9){
			index=1;
			moveul.style.transition = "";
			moveul.style.transform = "translateX(-"+index*width+"px)";
		}else if(index<=0){
			index=8
			moveul.style.transition = "";
			moveul.style.transform = "translateX(-"+index*width+"px)";
		}	
	 	for(var i=0;i<pointarry.length;i++){
			pointarry[i].className = "";
		}
		pointarry[index-1].className = "active";
	})
	
	var startX = 0
	var moveX = 0
	var moveEND = 0
	moveul.addEventListener("touchstart",function(event){
		clearInterval(movetimer);
		startX = event.touches[0].clientX;
	})
	moveul.addEventListener("touchmove",function(event){
		moveX = event.touches[0].clientX
		moveEND = moveX-startX
		moveul.style.transition = "";
		moveul.style.transform = "translateX("+(moveEND+index*width*-1)+"px)"
	})
	moveul.addEventListener("touchend",function(event){
		if(Math.abs(moveEND)>width/3){
			if(moveEND>0){
				index--
			}else{
				index++
			}
			moveul.style.transition = " all .3s"
			moveul.style.transform = "translateX(-"+index*width+"px)";
		}else{
			moveul.style.transition = " all .3s"
			moveul.style.transform = "translateX(-"+index*width+"px)";
		}
		movetimer = setInterval(function(){
			index++;	
			moveul.style.transform = "translateX(-"+index*width+"px)";
			moveul.style.transition = " all .3s"
	   	},2000)
	})
}

function downtime(){
	var time = 2*60*60
	var spantag = document.querySelectorAll('.product_box:nth-child(1) .ms_time span')
	var timer = setInterval(function(){
		time--;
		if(time<=0){
			clearInterval(timer);
			console.log("活动结束啦，你来迟啦")
			return;
		}
		var hour = Math.floor(time/3600);
		var min = Math.floor(time%3600/60)
		var sec = time%60

		spantag[0].innerHTML = Math.floor(hour/10)
		spantag[1].innerHTML = hour%10
		spantag[3].innerHTML = Math.floor(min/10)
		spantag[4].innerHTML = min%10
		spantag[6].innerHTML = Math.floor(sec/10)
		spantag[7].innerHTML = sec%10

	},1000)
}