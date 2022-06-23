$(function(){
	$('.DeepDreamImg').each(function(){
		var card=$(this);
		var interval=2000;
		var timer;
		
		function imgSlide(){
			var img=card.find('img');
			var first=img.eq(0);
			var second=img.eq(1);
			
			first.fadeOut().appendTo(card);
			second.fadeIn();
		}
		function start(){
			timer=setInterval(imgSlide,interval);
		}
		function end(){
			clearInterval(timer);
		}
		start();
		card.find('img').hover(end,start);
	});
});