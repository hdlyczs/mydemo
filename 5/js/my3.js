window.onload =function(){
	var page1 =document.getElementById('page1');
	var page2 =document.getElementById('page2');
	var page3 =document.getElementById('page3');
	var music =document.getElementById('musicimg');
	var audio =document.getElementsByTagName('audio')[0];
	//当音乐播放停止后，自动停止图片动画效果，这里用到了一个监听事件
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);

	//点击图片，控制音乐暂停和图片动画效果
	musicimg.onclick = function(){
		if(audio.paused){
			audio.play();
			this.style.animationPlayState="running"
		}
		else{
			audio.pause();
			this.style.animationPlayState="paused"
		}
	};
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		}, 5500)
	},false)
};