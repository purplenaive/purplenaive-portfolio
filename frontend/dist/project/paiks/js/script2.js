$(function(){
	var res0=window.matchMedia('screen and (min-width: 1400px)');
	var res1=window.matchMedia('screen and (min-width: 1200px)');
	var res2=window.matchMedia('screen and (min-width: 1025px)');
	var res3=window.matchMedia('screen and (min-width: 320px)');
	
	res0.addListener(function(e){if(e.matches){location.reload();}});
	res1.addListener(function(e){if(e.matches){location.reload();}});
	res2.addListener(function(e){if(e.matches){location.reload();}});
	res3.addListener(function(e){if(e.matches){location.reload();}});
	
	/* 원뎁스 메뉴 설정 */
	var resD0=$('.res1400_').css('display');
	var resD1=$('.res1200_1339').css('display');
	var resD2=$('.res1025_1199').css('display');
	var resD3=$('.res1024').css('display');
	
	if(resD1=='block' || resD0=='block'){
		$('#topMenu>ul>li').each(function(){
			var tg=$(this);
			var td=tg.find('div.subMenu');
			var th=td.css('height','auto').height()+20;
			var bg=$('.menuBG');
			tg.hover(function(){
				if(tg.get(0)==$('#topMenu>ul>li:last').get(0)){return;}
				bg.stop().animate({'height': th+'px'},300,function(){
					td.stop().show();
				});
			},function(){
				if(tg.get(0)==$('#topMenu>ul>li:last').get(0)){return;}
				td.stop().hide();
				bg.stop().animate({'height': 0},300);
			});
		});
	}else if(resD2=='block' || resD3 =='block'){
		/* 메뉴 오른쪽에서 이동해서 나타남 */
		$('.menuClose').click(function(){
			var tg=$(this);
			if($(this).is('.on')==false){
				tg.find('.mid').hide();
				tg.find('.top').removeClass('off').addClass('on');
				tg.find('.bot').removeClass('off').addClass('on');
				
				tg.addClass('on');
				$('#topMenu').show();
				$('.overlay').stop().fadeIn(200);
				$('#topMenu>ul').stop().animate({'margin-right': 0},500);
			}else if($(this).is('.on')==true){
				tg.removeClass('on');
				$('.overlay').stop().fadeOut(200);
				$('#topMenu>ul').stop().animate({'margin-right': '-100%'},500,function(){
					$('#topMenu').hide();
				});
				tg.find('.mid').show();
				tg.find('.top').removeClass('on').addClass('off');
				tg.find('.bot').removeClass('on').addClass('off');
			}
		});
		
		/* 오른쪽 메뉴 클릭시 서브메뉴 아코디언 설정 */
		$('#topMenu>ul>li').each(function(){
			var tg=$(this);
			tg.click(function(event){
				if(tg.find('.subMenu').is('.on')==false){
					event.preventDefault();
					$('#topMenu>ul>li').find('.subMenu').removeClass('on');
					tg.find('.subMenu').addClass('on');
					$('#topMenu>ul>li').find('.subMenu').stop().slideUp(300);
					tg.find('.subMenu').stop().slideDown(300);
				}else if(tg.find('.subMenu').is('.on')==true){
					event.preventDefault();
					tg.find('.subMenu').removeClass('on');
					tg.find('.subMenu').stop().slideUp(300);
				}
			});
		});
	};

	/* 메인슬라이드 ul li 넓이 설정 */
	
		/* 모바일 이미지 주소 설정 */
		if(resD3 =='block'){
			$('#mainSlide>div>img').each(function(){
				var href=$(this).attr('src');
				var replace=href.replace('main_','mobile_main_');
				$(this).attr('src',replace);
			});
		};
		/* 메인슬라이드 펑션 설정 */
			var index=$('#mainSlide .slideTag').find('.on').index();
			function fake(i){
				$('#mainSlide>div>img.realSlide').stop().animate({marginLeft: -100*i+'%'},500);
		};
		
		$('#mainSlide .slideTag>li').each(function(){
			var tg=$(this);
			var i=tg.index();
			tg.click(function(){
				$('#mainSlide .slideTag>li').removeClass('on');
				tg.addClass('on');
				fake(i);
			});
		});
		
		/* 자동 이동 설정 */
		function autoMove(){
			var index=$('#mainSlide .slideTag').find('.on').index();
			if(index==2){index=-1;};
			$('#mainSlide .slideTag>li').eq(index+1).trigger('click');
		};
		setInterval(autoMove,5000);
	
	/* 화면 작을 때 빽스서치 어펜드투 */
	if(resD3 =='block'){
		$('#paiksSearch').appendTo('#middleContent');
	};

	/* 패밀리 사이트 클릭 설정 */
	$('.familySite').click(function(){
		var tg=$(this);
		var ul=tg.find('>ul');
		var span=tg.find('>span');
		
		if(tg.is('.on')==false){
			span.addClass('on');
			tg.addClass('on');
			ul.slideDown(500);
		}else{
			span.removeClass('on');
			ul.slideUp(500);
			tg.removeClass('on');
		}
	});
	/* 탑 버튼 클릭 설정 */
	$('#topBtn').hide();
	$(window).scroll(function(){
		if($('html, body').scrollTop()<100){
			$('#topBtn').hide();
		}else{
			$('#topBtn').show();
		};
	});
	
	$('#topBtn').click(function(){
		$('html, body').stop().animate({scrollTop: 0},500);
	});
});