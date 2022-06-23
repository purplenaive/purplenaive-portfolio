$(function(){
    var lis=$('#slideBottomPage>ul>li');
    var divs=$('.slideImgBG>div');
    var nowI=$('#slideBottomPage>ul').find('.nowpage').index();
    var Des=$('.slideImgs>ul>li');
    var menus=$('div.slideMenu>ul>li');

        function basicMove(i){
            Des.eq(i).find('.deviceName').stop().animate({'margin-left': 0},600);
            Des.eq(i).find('.deviceDes').stop().animate({'margin-left': '5px'},700);
            Des.eq(i).find('.deviceText').stop().animate({'margin-left': '5px'},800);
            Des.eq(i).find('.learnMore').stop().animate({'margin-left': '5px'},900);
        };
        function resetPosition(i){
            Des.not(Des.eq(i)).find('.deviceName').css('margin-left','800px');
            Des.not(Des.eq(i)).find('.deviceDes').css('margin-left','805px');
            Des.not(Des.eq(i)).find('.deviceText').css('margin-left','805px');
            Des.not(Des.eq(i)).find('.learnMore').css('margin-left','805px');
        };
        function fadeOut(i,second,second2){
            divs.eq(i).delay(second).stop().fadeOut(second2);
            Des.eq(i).delay(second).stop().fadeOut(second2);
        }
        function fadeIn(i,second,second2){
            divs.eq(i).delay(second).stop().fadeIn(second2);
            Des.eq(i).delay(second).stop().fadeIn(second2);
        }
		
		divs.hide();
		divs.eq(nowI).show();
		basicMove(nowI);
	/* 메인 이미지 슬라이드 설정 */
    $('#slideBottomPage>ul>li').on({
        click: function(){
            var thisI=$(this).index();

            divs.not(divs.eq(nowI)).fadeOut(300);
            Des.not(divs.eq(nowI)).fadeOut(300);			
            basicMove(thisI);

            fadeOut(nowI,300,500);
            fadeIn(thisI,800,800);

            lis.removeClass('nowpage');
            $(this).addClass('nowpage');

            resetPosition(thisI);              
                if(thisI==2 || thisI==6){
                    menus.css('color','white');                
                }else{menus.css('color','black');}
        }
    });
    
    menus.on({
        mouseenter: function(){
            $(this).addClass('on');
        },
        mouseleave: function(){
             var i=$('#slideBottomPage>ul').find('.nowpage').index();
            var tg=$(this);
            if(i==2 || i==6){
               tg.removeClass('on');
                menus.css('color','white');
            }else{
                tg.removeClass('on');               
            }
        }
    });
})

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
	
	
	/* 로고 호버 효과 설정 */
	$('.logo').hover(function(){
		$(this).find('img').stop().animate({'margin-left': 0},300);
	},function(){
		$(this).find('img').stop().animate({'margin-left': '-60px'},300);
	});
	
	/* 메인 이미지 페이지 제어 설정 */
        function autoClick(){
            var startI=$('#slideBottomPage>ul').find('.nowpage').index();
            var lis=$('#slideBottomPage>ul>li');
            var size=$('#slideBottomPage>ul>li').size();

                if(startI+1==size){startI=-1;}
            lis.eq(startI+1).trigger('click');	
        };
	$('.rightPage').click(function(){
		var startI=$('#slideBottomPage>ul').find('.nowpage').index();
		var lis=$('#slideBottomPage>ul>li');
		var size=$('#slideBottomPage>ul>li').size();
		
			if(startI+1==size){startI=-1;}
		lis.eq(startI+1).trigger('click');	
	});
	
	$('.leftPage').click(function(){
		var startI=$('#slideBottomPage>ul').find('.nowpage').index();
		var lis=$('#slideBottomPage>ul>li');
		var size=$('#slideBottomPage>ul>li').size();		
	
			if(startI==0){startI=size;}
		lis.eq(startI-1).trigger('click');
	});
	
	/* 메인 이미지 페이지 자동스크롤 설정 */
	var autoMove=setInterval(function(){$('.rightPage').trigger('click');},5000);	
	
		/* 호버시 멈춤 설정 */
		$('.slideImgs').hover(function(){clearInterval(autoMove);},function(){autoMove=setInterval(function(){$('.rightPage').trigger('click');},5000);});
	
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
	$('.DecoBox').parent('div').stop().hover(function(){
		var tg=$(this);
		tg.find('.DecoBox').stop(false,true).fadeIn(200,function(){
			tg.find('.topL').animate({'width': '80%'},200,function(){
				tg.find('.rightL').animate({'height': '80%'},200,function(){
					tg.find('.bottomL').animate({'width': '80%'},200,function(){
						tg.find('.leftL').animate({'height': '80%'},200);
						tg.find('.decoText').fadeIn(300);						
					});				
				}); 
			});
		});		
	},function(){
		var tg=$(this);
		tg.find('.DecoBox').stop(false,true).fadeOut(200,function(){
			tg.find('.topL').css('width',0);
			tg.find('.rightL').css('height',0);
			tg.find('.bottomL').css('width',0);
			tg.find('.leftL').css('height',0);
			tg.find('.decoText').hide();
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