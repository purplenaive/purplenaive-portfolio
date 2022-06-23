$(function(){
	/* 탑 영역 언어 선택 설정 */
	$('li.international').hover(function(){
		var autoH=$('.internationalBox').css('height','auto').height();
		
		$('.internationalBox').addClass('interHover').css('height',0).stop().animate({height : autoH+7+'px'},500);
		$('.dropBtn').css('background','url(images/internationalArrowH.png) no-repeat center')
	},function(){
		$('.internationalBox').removeClass('interHover').stop().animate({'height' : 0},300);
		$('.dropBtn').css('background','url(images/internationalArrow.png) no-repeat center')
	});
	
	/* 메인 이미지 슬라이드 설정 */
		
	$('#slideBottomPage>ul>li').each(function(){
		//var size=$('#slideBottomPage>ul>li').size();
		var lis=$('#slideBottomPage>ul>li');
		var divs=$('.slideImgBG>div');
		var nowI=$('#slideBottomPage>ul').find('.nowpage').index();
		var Des=$('.slideImgs>ul>li');
		var menus=$('div.slideMenu>ul>li');
		divs.hide();
		divs.eq(nowI).show();
		Des.eq(nowI).find('.deviceName').stop().animate({'margin-left': 0},600);
		Des.eq(nowI).find('.deviceDes').stop().animate({'margin-left': '5px'},700);
		Des.eq(nowI).find('.deviceText').stop().animate({'margin-left': '5px'},800);
		Des.eq(nowI).find('.learnMore').stop().animate({'margin-left': '5px'},900);
		$(this).click(function(){
			var thisI=$(this).index();
			
			divs.not(divs.eq(nowI)).fadeOut(300);
			Des.not(divs.eq(nowI)).fadeOut(300);
			Des.eq(thisI).find('.deviceName').stop().animate({'margin-left': 0},600);
			Des.eq(thisI).find('.deviceDes').stop().animate({'margin-left': '5px'},700);
			Des.eq(thisI).find('.deviceText').stop().animate({'margin-left': '5px'},800);
			Des.eq(thisI).find('.learnMore').stop().animate({'margin-left': '5px'},900);
			
			divs.eq(nowI).delay(300).stop().fadeOut(500);
			Des.eq(nowI).delay(300).stop().fadeOut(500);
			
			divs.eq(thisI).delay(800).stop().fadeIn(800);
			Des.eq(thisI).delay(800).stop().fadeIn(800);
			
			lis.removeClass('nowpage');
			$(this).addClass('nowpage');
			
			Des.not(Des.eq(thisI)).find('.deviceName').css('margin-left','800px');
			Des.not(Des.eq(thisI)).find('.deviceDes').css('margin-left','805px');
			Des.not(Des.eq(thisI)).find('.deviceText').css('margin-left','805px');
			Des.not(Des.eq(thisI)).find('.learnMore').css('margin-left','805px');
		
			if($(this).index()==2){
				menus.css('color','white');
				$('div.slideMenu>ul>li:not(".allP")').css('color','white');
					$('div.slideMenu>ul>li').hover(function(){
						$('div.slideMenu>ul>li').css('color','black');
					},function(){
						$('div.slideMenu>ul>li').css('color','white');
					});
				menus.find('>ul').css('color','black');				
			}else if($(this).index()==6){
				menus.css('color','white');
					$('div.slideMenu>ul>li:not(".allP")').hover(function(){
						$('div.slideMenu>ul>li').css('color','black');
					},function(){
						$('div.slideMenu>ul>li').css('color','white');
					});
				menus.find('>ul').css('color','black');
			}else{
				$('div.slideMenu>ul>li').css('color','black');
			}
		
		});
	});
	/* 로고 호버 효과 설정 */
	$('.logo').hover(function(){
		$(this).find('img').stop().animate({'margin-left': 0},300);
	},function(){
		$(this).find('img').stop().animate({'margin-left': '-60px'},300);
	});
	
	/* 메인 이미지 페이지 제어 설정 */
	$('.rightPage').off().click(function(){
		var startI=$('#slideBottomPage>ul').find('.nowpage').index();
		var lis=$('#slideBottomPage>ul>li');
		var divs=$('.slideImgBG>div');
		var Des=$('.slideImgs>ul>li');
		var size=$('#slideBottomPage>ul>li').size();
		
		
		lis.removeClass('nowpage');
		Des.eq(startI).fadeOut(300);
		divs.eq(startI).stop().fadeOut(500);
			if(startI==size-1){
				startI=-1;
				
				divs.eq(startI+1).stop().delay(300).fadeIn(500);
				lis.eq(startI+1).addClass('nowpage');
				Des.eq(startI+1).stop().fadeIn(300);
				
				Des.eq(startI+1).find('.deviceName').stop().animate({'margin-left': 0},600);
				Des.eq(startI+1).find('.deviceDes').stop().animate({'margin-left': '5px'},700);
				Des.eq(startI+1).find('.deviceText').stop().animate({'margin-left': '5px'},800);
				Des.eq(startI+1).find('.learnMore').stop().animate({'margin-left': '5px'},900);
				
				Des.not(Des.eq(startI+1)).find('.deviceName').css('margin-left','800px');
				Des.not(Des.eq(startI+1)).find('.deviceDes').css('margin-left','805px');
				Des.not(Des.eq(startI+1)).find('.deviceText').css('margin-left','805px');
				Des.not(Des.eq(startI+1)).find('.learnMore').css('margin-left','805px');
				
				return false;
			}
			
		divs.eq(startI+1).stop().delay(300).fadeIn(500);
		lis.eq(startI+1).addClass('nowpage');
		Des.eq(startI+1).stop().fadeIn(300);
		
		Des.eq(startI+1).find('.deviceName').stop().animate({'margin-left': 0},600);
		Des.eq(startI+1).find('.deviceDes').stop().animate({'margin-left': '5px'},700);
		Des.eq(startI+1).find('.deviceText').stop().animate({'margin-left': '5px'},800);
		Des.eq(startI+1).find('.learnMore').stop().animate({'margin-left': '5px'},900);
		
		Des.not(Des.eq(startI+1)).find('.deviceName').css('margin-left','800px');
		Des.not(Des.eq(startI+1)).find('.deviceDes').css('margin-left','805px');
		Des.not(Des.eq(startI+1)).find('.deviceText').css('margin-left','805px');
		Des.not(Des.eq(startI+1)).find('.learnMore').css('margin-left','805px');
		
			if(startI+1==2){
				$('div.slideMenu>ul>li').css('color','white');
					$('div.slideMenu>ul>li:not(".allP")').hover(function(){
						$('div.slideMenu>ul>li').css('color','black');
					},function(){
						$('div.slideMenu>ul>li').css('color','white');
					});
				$('div.slideMenu>ul>li>ul').css('color','black');
			}else if(startI+1==6){
				$('div.slideMenu>ul>li').css('color','white');
					$('div.slideMenu>ul>li:not(".allP")').hover(function(){
						$('div.slideMenu>ul>li').css('color','black');
					},function(){
						$('div.slideMenu>ul>li').css('color','white');
					});
				$('div.slideMenu>ul>li>ul').css('color','black');
			}else{
				$('div.slideMenu>ul>li').css('color','black');
			}
		
	});
	$('.leftPage').off().click(function(){
		var startI=$('#slideBottomPage>ul').find('.nowpage').index();
		var lis=$('#slideBottomPage>ul>li');
		var divs=$('.slideImgBG>div');
		var Des=$('.slideImgs>ul>li');
		var size=$('#slideBottomPage>ul>li').size();		
	
			if(startI==size-1){
				lis.removeClass('nowpage');
				divs.eq(startI).stop().fadeOut(500);
				Des.stop().fadeOut(300);
				
				divs.eq(size-1).stop().delay(300).fadeIn(500);
				lis.eq(size-1).addClass('nowpage');
				Des.eq(size-1).stop().fadeIn(300);
				
				Des.eq(size-1).find('.deviceName').stop().animate({'margin-left': 0},600);
				Des.eq(size-1).find('.deviceDes').stop().animate({'margin-left': '5px'},700);
				Des.eq(size-1).find('.deviceText').stop().animate({'margin-left': '5px'},800);
				Des.eq(size-1).find('.learnMore').stop().animate({'margin-left': '5px'},900);
				
				Des.not(Des.eq(size-1)).find('.deviceName').css('margin-left','800px');
				Des.not(Des.eq(size-1)).find('.deviceDes').css('margin-left','805px');
				Des.not(Des.eq(size-1)).find('.deviceText').css('margin-left','805px');
				Des.not(Des.eq(size-1)).find('.learnMore').css('margin-left','805px')
			}

		lis.removeClass('nowpage');
		divs.eq(startI).stop().fadeOut(500);
		Des.stop().fadeOut(300);
		divs.eq(startI-1).stop().delay(300).fadeIn(500);
		lis.eq(startI-1).addClass('nowpage');
		Des.eq(startI-1).stop().fadeIn(300);
		
		Des.eq(startI-1).find('.deviceName').stop().animate({'margin-left': 0},600);
		Des.eq(startI-1).find('.deviceDes').stop().animate({'margin-left': '5px'},700);
		Des.eq(startI-1).find('.deviceText').stop().animate({'margin-left': '5px'},800);
		Des.eq(startI-1).find('.learnMore').stop().animate({'margin-left': '5px'},900);
		
		Des.not(Des.eq(startI-1)).find('.deviceName').css('margin-left','800px');
		Des.not(Des.eq(startI-1)).find('.deviceDes').css('margin-left','805px');
		Des.not(Des.eq(startI-1)).find('.deviceText').css('margin-left','805px');
		Des.not(Des.eq(startI-1)).find('.learnMore').css('margin-left','805px');
			
		/* var nowpageIndex=$('#slideBottomPage>ul>li.nowpage').index(); */
			if(startI-1==2){
				$('div.slideMenu>ul>li').css('color','white');
					$('div.slideMenu>ul>li:not(".allP")').hover(function(){
						$('div.slideMenu>ul>li').css('color','black');
					},function(){
						$('div.slideMenu>ul>li').css('color','white');
					});
				$('div.slideMenu>ul>li>ul').css('color','black');
			}else if(startI==0){
				$('div.slideMenu>ul>li').css('color','white');
					$('div.slideMenu>ul>li:not(".allP")').hover(function(){
						$('div.slideMenu>ul>li').css('color','black');
					},function(){
						$('div.slideMenu>ul>li').css('color','white');
					});
				$('div.slideMenu>ul>li>ul').css('color','black');
			}else{
				$('div.slideMenu>ul>li').css('color','black');
			}
	});
	/* 메인 이미지 페이지 자동스크롤 설정 */
	var autoScroll=function(){
		var startI=$('#slideBottomPage>ul').find('.nowpage').index();
		var lis=$('#slideBottomPage>ul>li');
		var divs=$('.slideImgBG>div');
		var Des=$('.slideImgs>ul>li');
		var size=$('#slideBottomPage>ul>li').size();
		lis.removeClass('nowpage');
		divs.eq(startI).stop().fadeOut(500);
		Des.fadeOut(300);
		
			if(startI==size-1){
				startI=-1;
			}
			
		startI++
		lis.eq(startI).addClass('nowpage');
		divs.eq(startI).stop().delay(300).fadeIn(500);
		Des.fadeIn(300)
		
		Des.eq(startI).find('.deviceName').stop().animate({'margin-left': 0},600);
		Des.eq(startI).find('.deviceDes').stop().animate({'margin-left': '5px'},700);
		Des.eq(startI).find('.deviceText').stop().animate({'margin-left': '5px'},800);
		Des.eq(startI).find('.learnMore').stop().animate({'margin-left': '5px'},900);
		
		Des.not(Des.eq(startI)).find('.deviceName').css('margin-left','800px');
		Des.not(Des.eq(startI)).find('.deviceDes').css('margin-left','805px');
		Des.not(Des.eq(startI)).find('.deviceText').css('margin-left','805px');
		Des.not(Des.eq(startI)).find('.learnMore').css('margin-left','805px')
				
			if(startI==2){
				$('div.slideMenu>ul>li').css('color','white');
				$('div.slideMenu>ul>li>ul').css('color','black');
			}else if(startI==6){
				$('div.slideMenu>ul>li').css('color','white');					
			}else{
				$('div.slideMenu>ul>li').css('color','black');
			}
	}
	var autoMove=setInterval(autoScroll,5000);
	
	/* 자동 슬라이드 멈춤 제어 */
	$('.leftPage').hover(function(){
		clearInterval(autoMove);
	},function(){
		autoMove=setInterval(autoScroll,5000);
	});
	$('.rightPage').hover(function(){
		clearInterval(autoMove);
	},function(){
		autoMove=setInterval(autoScroll,5000);
	});
	$('#slideBottomPage').hover(function(){
		clearInterval(autoMove);
	},function(){
		autoMove=setInterval(autoScroll,5000);
	});
	
	
	/* 메인 이미지 상단 메뉴 설정 */
	$('.slideMenu>ul>li:not(".allP")').each(function(){
		
		$('.slideMenu>ul>li>ul').hide();
		$(this).hover(function(){
			var thisTD=$(this).find('>ul');
			
			$('.slideMenu>ul>li').css('color','black');
			$('.TDbg').stop().animate({'height': '305px'},300,function(){
				$('.TDbg').css('border-bottom','1px solid #dbdbdb');
				thisTD.slideDown(200);
			});
		},function(){
			var thisTD=$(this).find('>ul');			
			
			$('.TDbg').stop().animate({'height': 0},300);
			$('.TDbg').css('border-bottom','0px');
			thisTD.fadeOut(100);
		});
	});
	/* 데코박스 설정 */
	
	$('.DecoBox').parent('div').hover(function(){
		$(this).find('.DecoBox').stop().fadeIn(200,function(){
			$(this).find('.topL').stop().animate({'width': '80%'},200);
			$(this).find('.rightL').stop().delay(200).animate({'height': '80%'},200);
			$(this).find('.bottomL').stop().delay(400).animate({'width': '80%'},200);
			$(this).find('.leftL').stop().delay(600).animate({'height': '80%'},200);
			$(this).find('.decoText').stop().delay(600).fadeIn(300);
		});
	},function(){
		$(this).find('.DecoBox').stop().fadeOut(200,function(){
			$(this).find('.DecoBox>span').hide();
			$(this).find('.topL').css('width',0);
			$(this).find('.rightL').css('height',0);
			$(this).find('.bottomL').css('width',0);
			$(this).find('.leftL').css('height',0);
			$(this).find('.decoText').hide();
		});
	});
	
	/* enter your email 전용 가이드 텍스트 설정 */
	var EEAtit=$('.EEA').attr('title');
	var EEAvalue=$('.EEA').val();
	
	if(EEAvalue==''){
		$('.EEA').css('color','gray');
		$('.EEA').val(EEAtit);
	}
	$('.EEA').focus(function(){
		$('.EEA').val('');
		$('.EEA').css('color','black');
	}).blur(function(){
		$('.EEA').css('color','gray');
		$('.EEA').val(EEAtit);
	});
	
	/* 툴팁 말풍선 설정 */
	
	var balloon=$('<div class="balloon"></div>').appendTo('body');
	function moveBalloon(x,y){
		balloon.css({left: x+35, top: y});
	};
	$('.tooltip').each(function(){
		var target=$(this);
		var thisTit=target.attr('title');
		
		target.attr('title','');
		target.hover(function(event){
			balloon.text(thisTit);
			moveBalloon(event.pageX,event.pageY);
			balloon.show();
		},function(){
			balloon.hide();
		});	
		target.mousemove(function(event){
			moveBalloon(event.pageX,event.pageY);
		});
	});
	
	/* 추가한 탭바 설정 */
	
	$('.hotAccTap>ul>li').each(function(){
		var lis=$('.hotAccTap>ul>li');
		var divs=$('.hotAccTapCont>div');
		var nowI=$('.hotAccTap>ul').find('.nowTap').index();
		
		divs.hide();
		divs.eq(nowI).show();
		
		$(this).click(function(){
			var thisI=$(this).index();
			
			lis.removeClass('nowTap');
			divs.stop().fadeOut(300);	
			$(this).addClass('nowTap');
			divs.eq(thisI).stop().delay(300).fadeIn(300);
		});
	});
});