$(function(){
	/* 메인 이미지 새로고침 시 애니메이션 설정 */
	function mainImg(alt1,alt2,alt3,folder){
		$('img:[alt="'+alt1+'"]').css('margin-top','-70px').css('opacity',0);
		$('img:[alt="'+alt2+'"]').css('margin-left','-100px').css('opacity', 0);
		$('img:[alt="'+alt3+'"]').css('margin-right','-100px').css('opacity',0);
		$('.TitText span').css('margin-top','50px').css('opacity',0);
		$(folder+' .TitleBorder>div').css('width',0);
		
		$('img:[alt="'+alt1+'"]').animate({'margin-top': 0 ,'opacity': 1},800,function(){
			$('img:[alt="'+alt2+'"]').animate({'margin-left': 0, 'opacity': 1},800,function(){
				$('img:[alt="'+alt3+'"]').animate({'margin-right': 0, 'opacity': 1},800,function(){
					$(folder+' .TitleBorder>div').animate({'width': '10%'},500);
					$(folder+' .TitText span').animate({'margin-top':0, 'opacity': 1},800);		
				});
			});		
		});
	};
	function mainImg2(alt1,alt3,folder){
		$('img:[alt="'+alt1+'"]').css('margin-top','-70px').css('opacity',0);
		$('img:[alt="'+alt3+'"]').css('margin-right','-100px').css('opacity',0);
		$('.TitText span').css('margin-top','50px').css('opacity',0);
		$(folder+' .TitleBorder>div').css('width',0);
		
		$('img:[alt="'+alt1+'"]').animate({'margin-top': 0 ,'opacity': 1},800,function(){
			$('img:[alt="'+alt3+'"]').animate({'margin-right': 0, 'opacity': 1},800,function(){
				$(folder+' .TitleBorder>div').animate({'width': '10%'},500);
				$(folder+' .TitText span').animate({'margin-top':0, 'opacity': 1},800);		
			});		
		});
	};
	mainImg('More than food','Beyond','Korea','.maeilInheritance');	
		/* 메인 이미지 탭 기능 설정 */
		$('#mainImgBtn #mainImgBtn2 ul>li').each(function(){
			var tg=$(this);
			var i=tg.index();
			var cont=$('#mainImg>div.mainImgCont');
			
			tg.click(function(event){
				event.preventDefault();
				cont.hide();
				$('#mainImgBtn #mainImgBtn2 ul>li').removeClass('on');
				cont.eq(i).show();
				tg.addClass('on');
					if(i==1){
						mainImg('Together','Share','Maeil Everyday','.everydayMaeil');	
					}else if(i==2){
						mainImg2('global','Maeil globe','.globeMaeil');	
					}else if(i==0){
						mainImg('More than food','Beyond','Korea','.maeilInheritance');	
					};
			});
		});
		
	/* 메인 드롭 메뉴 설정 */

		$('#topLogoMenu>ul').toggle(function(){
			$('#topLogoMenuBg').stop().animate({'height': '356px'},500);
			$('#topLogoMenuBg').addClass('toggleBg');
			$('#topLogoMenuBg>div').stop().animate({'height': '50px'},500);
			$('#topLogoMenuBg>div').addClass('toogleBgD');
			$('#topLogoMenu>ul>li>ul').stop().animate({'height': '305px'},500);
		},function(){
			$('#topLogoMenu>ul>li>ul').stop().animate({'height': '0px'},500);
			$('#topLogoMenuBg').stop().animate({'height': '0px'},500);
			$('#topLogoMenuBg').removeClass('toggleBg');
			$('#topLogoMenuBg>div').stop().animate({'height': 0},500);
			$('#topLogoMenuBg>div').removeClass('toogleBgD');
		});

	
	/* 아래 float circle 설정 */
	
	$('.fourStuffBox').each(function(){
		$(this).hover(function(){
			var viewBsite=$(this).find('.viewBsite');
			var viewDtail=$(this).find('.viewDtail');
			
			viewBsite.css('opacity',0);
			viewDtail.css('opacity',0);
			viewBsite.stop().animate({'left': '10px', 'opacity': 1},500);
			viewDtail.stop().animate({'right': '10px', 'opacity': 1},500);
		},function(){
			var viewBsite=$(this).find('.viewBsite');
			var viewDtail=$(this).find('.viewDtail');
			
			viewBsite.stop().animate({'left': '-110px', 'opacity': 0},500);
			viewDtail.stop().animate({'right': '-110px', 'opacity': 0},500);
		});
	});
	
	/* 아래 fourstuff box 배경 설정 */
	
	$('.bottomImgBG>div').hide();
	$('.bottomImgBG>div.nowBG').show();
	var fourBG=function(){
		var nowI=$('.bottomImgBG').find('>div.nowBG').index();
		var divs=$('.bottomImgBG>div');
		var size=$('.bottomImgBG').find('>div').size();
			if(nowI==size-1){
				nowI=-1;
			}
		divs.eq(nowI).fadeOut(500);
		divs.removeClass('nowBG');
		nowI++;
		divs.eq(nowI).delay(200).fadeIn(500);
		divs.eq(nowI).addClass('nowBG');
		
	}
	var bottomBGauto=setInterval(fourBG,3000);
	
	/* 하단 스터프 브랜드 자동 스크롤 설정 */
	
	$('.stuffBrandAfter').click(function(){
		var uls=$('.stuffBulW>ul');
		var lis=uls.find('li');
		
		uls.stop().animate({'left': '-160px'},300,function(){
			lis.first().appendTo(uls);
			$(this).css('left',0);
		})
	});
	$('.stuffBrandBefore').click(function(){
		var uls=$('.stuffBulW>ul');
		var lis=uls.find('li');
		
		uls.stop().animate({'left': '160px'},300,function(){
			lis.last().prependTo(uls);
			$(this).css('left',0);
		});
	});
	
	var stuffAuto= function(){
		var uls=$('.stuffBulW>ul');
		var lis=uls.find('li');
		
		uls.stop().animate({'left': '-160px'},300,function(){
			lis.first().appendTo(uls);
			$(this).css('left',0);
		})
	};
	
	var stuffAutoTimer=setInterval(stuffAuto,5000);
	
	$('.stuffBulW').hover(function(){
		clearInterval(stuffAutoTimer);
	},function(){
		stuffAutoTimer=setInterval(stuffAuto,5000);
	});
});