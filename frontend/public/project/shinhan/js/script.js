$(function(){
	/* 상단 메인메뉴 원덱스 관련 설정 */
	$('#oneDex>li').each(function(){
		$(this).toggle(function(){
			var Div=$(this).find('>div');
			var Divs=$('#oneDex>li>div');
			var DH=Div.css('height','auto').height();
			Divs.css('height',0).css('padding-bottom',0).css('border-bottom',0).css('border-top',0);
			Div.css('height',0).stop().animate({'height': DH, 'padding-bottom': '20px'},500).css('border-bottom','1px solid #dbdbdb').css('border-top','1px solid #dbdbdb');
			$('#oneDex>li').removeClass('hoverOn');
			$(this).addClass('hoverOn');
			//$('.menuOverlay').hide();
			$('.menuOverlay').fadeIn(300);
			$('.TMBcloseW').animate({'margin-top': DH+10+'px'},300);
			
			$('.TMBclose').click(function(){
				Div.stop().animate({'height': 0, 'padding-bottom': 0},500).css('border-bottom',0).css('border-top',0);
				$('#oneDex>li').removeClass('hoverOn');
				$('.menuOverlay').fadeOut(300);
			});
		},function(){
			var Div=$(this).find('>div');
			Div.stop().animate({'height': 0, 'padding-bottom': 0},500).css('border-bottom',0).css('border-top',0);
			$('#oneDex>li').removeClass('hoverOn');
			$('.menuOverlay').fadeOut(300);
		});
		
	});
	
	/* 가이드 텍스트 설정 시작 */
	var searchEL=$('#search .guideTextSearch');
	var searchTit=searchEL.attr('title');
	
	searchEL.val(searchTit).css('color','lightgray');
	searchEL.focus(function(){
		if(searchEL.val()==''){
			$(this).css('color','lightgray');
		}
		$(this).val('');
		$(this).css('color','black');
		
	});
	searchEL.blur(function(){
		searchEL.val(searchTit).css('color','lightgray');
	});
	
	



	/* 카드추천 이미지 탭 시작 */
	
	$('#card_reco_img').each(function(){
		var topDiv=$(this);
		var tapDex=topDiv.find('div.card_reco_img_menu ul li a');
		var tapContent=topDiv.find('#card_img_wrapper>div');
		
		var selectedDex;
		var selectedCont;
		
		
		tapDex.show();
		selectedDex=tapDex.filter('.selected');
		selectedCont=$(selectedDex.attr('href'));
		
		selectedDex.parent('li').addClass('selected').addClass('selectedB');
		
		tapContent.hide();
		selectedCont.show();
		
		
		tapDex.click(function(e){
			e.preventDefault();
			var currentDex=$(this);
			var currentCont=$(currentDex.attr('href'));
			
			tapDex.parent('li').removeClass('selected').removeClass('selectedB');
			selectedDex.parent('li').addClass('selected').removeClass('selectedB');
			currentDex.parent('li').removeClass('selected').addClass('selectedB');
			
			selectedCont.hide();
			currentCont.show();
			
			selectedDex=currentDex;
			selectedCont=currentCont;
		});
	});
	
	/* 식스메뉴 이미지 탭 설정 */
	
	/* 식스메뉴 금융탭 설정 */
	$('.kum_six .sixPage ul li').each(function(){
		var thisI=$(this).index();
		var nowLi=$('.kum_six .sixPage').find('.KTon');
		var nowI=nowLi.index();
		var divs=$('.kum_six .kumTab');
		
		divs.hide()
		divs.eq(nowI).show();
		$(this).click(function(){
			divs.not(divs.eq(thisI)).fadeOut(500);
			divs.eq(thisI).delay(500).fadeIn(500);
			$('.kum_six .sixPage ul li').removeClass('KTon');
			$(this).addClass('KTon');
		});
	});	
			var sixAuto=function(){
				var nowI=$('.sixPage li.KTon').index();
				var divs=$('.kumTabs>div');
				var size=divs.size();
				var lis=$('.kum_six .sixPage ul li');
				
				divs.fadeOut(500);
				lis.removeClass('KTon');
				nowI++
					if(nowI==size){
						nowI=0;
					}
				divs.eq(nowI).delay(500).fadeIn(500);
				lis.eq(nowI).addClass('KTon');
			}
			var timer=setInterval(sixAuto,10000);
			
			$('.kum_six .sixPage .pageStop').toggle(function(){
				clearInterval(timer);
				$(this).css('background','rgba(0,0,0,0.4)');
			},function(){
				timer=setInterval(sixAuto,10000)
				$(this).css('background','white');
			});
	/* 식스메뉴 올댓메뉴탭 설정 */
	$('.allthat_six .sixPage ul li').each(function(){
		var nowI=$('.sixPage ul').find('.ATon').index();
		var lis=$('.allthat_six .sixPage ul li');
		var divs=$('.allthat_six .ATtabs>div');
		
		divs.hide();
		divs.eq(nowI).show();
		$(this).click(function(){
			var thisI=$(this).index();
			
			divs.not(divs.eq(thisI)).fadeOut(500);
			lis.removeClass('ATon');
			divs.eq(thisI).delay(500).fadeIn(500);
			$(this).addClass('ATon');
		});
	});
			var sixAutoAT=function(index){
				var nowI=$('.sixPage ul').find('.ATon').index();
				var divs=$('.ATtabs>div');
				var lis=$('.allthat_six .sixPage ul li');
				var size=lis.size();
				
				divs.fadeOut(500);
				lis.removeClass('ATon');
				nowI++
					if(nowI==size){
						nowI=0;
					}
				divs.eq(nowI).delay(500).fadeIn(500);
				lis.eq(nowI).addClass('ATon');
			};
			var timerAT=setInterval(sixAutoAT,10000);
			$('.allthat_six .sixPage .pageStop').toggle(function(){
				clearInterval(timerAT);
				$(this).css('background','rgba(0,0,0,0.4)');
			},function(){
				setInterval(sixAutoAT,10000);
				$(this).css('background','white');
			});
	/* 식스메뉴 금융소비자보호탭 설정 */
	$('.protect_six .sixPage ul li').each(function(){
		var divs=$('.protect_six .protectTabs>div');
		var lis=$('.protect_six .sixPage ul li');
		var size=lis.size();
		var nowI=$('.protect_six .sixPage ul').find('.PROon').index();
		
		divs.hide();
		divs.eq(nowI).show();
		$(this).click(function(){
			var thisI=$(this).index();
			
			divs.not(divs.eq(thisI)).fadeOut(500);
			divs.eq(thisI).delay(500).fadeIn(500);
			lis.removeClass('PROon');
			$(this).addClass('PROon');
		});
	});
		var sixAutoPRO=function(index){
			var nowI=$('.protect_six .sixPage ul').find('.PROon').index();
			var lis=$('.protect_six .sixPage ul li');
			var divs=$('.protectTabs>div');
			var size=lis.size();
			
			divs.fadeOut(500);
			lis.removeClass('PROon');
			nowI++
				if(nowI==size){
					nowI=0;
				}
			divs.eq(nowI).delay(500).fadeIn(500);
			lis.eq(nowI).addClass('PROon');
		};
		var timerPRO=setInterval(sixAutoPRO,10000);
		$('.protect_six .sixPage .pageStop').toggle(function(){
			clearInterval(timerPRO);
			$(this).css('background','rgba(0,0,0,0.4)');
		},function(){
			timerPRO=setInterval(sixAutoPRO,10000);
			$(this).css('background','white');
		});
	
	
	/* 카드추천 이미지 탭 끝 */
	
	
	$('.card_img_basic>div').each(function(){
		var img=$(this).find('img');	
		var Div=$(this).find('div');
		
		Div.hide()
		$(this).hover(function(){
			Div.fadeIn(300);
		},function(){
			Div.fadeOut(300);
		});
	});
	
	/* 메인 이미지 슬라이드 */
	
	$('.event_paging ul li').each(function(){
		var divs=$('.BGS div');
		var showD=$('.BGS').find('.showBG');
		
		divs.hide();
		showD.show();
	
		$(this).click(function(){
			var thisI=$(this).index();
			var nextD=divs.eq(thisI);
			
			var beforeThis=$('.event_paging ul li.nowshow');
			var returnThis=$(this);
			if(beforeThis.get(0)==returnThis.get(0)){
				return;
			}
						
			divs.removeClass('showBG');
			$('.event_paging ul li').removeClass('nowshow');
			divs.fadeOut(500);
			nextD.fadeIn(500);
			nextD.addClass('showBG');
			$(this).addClass('nowshow');
			
		});
	});
	
	$('#page_left').click(function(){
		var nowD=$('.BGS').find('.showBG');
		var nowI=nowD.index();
		var prevD=nowD.prev('div');
		var prevI=prevD.index();
		var lis=$('.event_paging ul li');
		
			if(nowI==0){
				var size=$('.BGS div').size();
				prevD=$('.BGS div').last();
				prevI=size;
				lis.last().addClass('nowshow');
			}
		
		lis.eq(nowI).removeClass('nowshow');
		nowD.removeClass('showBG');
		nowD.fadeOut(500);
		prevD.fadeIn(500);
		lis.eq(prevI).addClass('nowshow');
		prevD.addClass('showBG');
	});
	
	$('#page_right').click(function(){
		var nowD=$('.BGS').find('.showBG');
		var nowI=nowD.index();
		var nextD=nowD.next('div');
		var nextI=nextD.index();
		var lis=$('.event_paging ul li');
		var size=$('.BGS div').size()-1;
				
			if(nowD.index()==size){
				nextD=$('.BGS div').first();
				nextI=0;
			}
		
		$('.BGS div').removeClass('showBG');
		lis.removeClass('nowshow');
		nowD.fadeOut(500);
		nextD.fadeIn(500);
		nextD.addClass('showBG');
		$('.event_paging ul li').eq(nextI).addClass('nowshow');
	});
	
	function slide(){
		var startN=$('.BGS').find('.showBG').index();
		var divs=$('.BGS div');
		var size=divs.size();
		var lis=$('.event_paging ul li');
		
		
		divs.removeClass('showBG');
		divs.eq(startN).fadeOut(700);
		lis.removeClass('nowshow');
		startN++
			if(startN>size-1){
				startN=0;
			}
		divs.eq(startN).fadeIn(700);
		divs.eq(startN).addClass('showBG');
		lis.eq(startN).addClass('nowshow');
		
	}
	
	var moove=setInterval(slide,2500);
	
	$('.EP_stop').toggle(function(){
		clearInterval(moove);
		$(this).css('background','white');
		
	},function(){
		moove=setInterval(slide,2500);
		$(this).css('background','transparent');
	})
	
	$('#event_menu .event_menu_left').hide();
	$('#event_menu .event_menu_left').click(function(){
		$('#event_menu .event_menu_right').fadeIn(300);
		$('#event_menu .event_menu_ul ul').stop().animate({marginLeft: 0},500);
		$(this).fadeOut(300);
	});
	$('#event_menu .event_menu_right').click(function(){
		$('#event_menu .event_menu_left').fadeIn(300);
		$('#event_menu .event_menu_ul ul').stop().animate({marginLeft: '-120px'},500);
		$(this).fadeOut(300);
	});
	
	/* 하단 탑으로 슬라이드 설정 */
	
	$('.j_customer>ul>li').hover(function(){
		var div=$(this).find('div');
		div.stop().slideDown(500);
	},function(){
		var div=$(this).find('div');
		div.stop().slideUp(500);
	});
	
	$('.s_group>ul>li').hover(function(){
		var div=$(this).find('div');
		div.stop().slideDown(500);
	},function(){
		var div=$(this).find('div');
		div.stop().slideUp(500);
	});
});