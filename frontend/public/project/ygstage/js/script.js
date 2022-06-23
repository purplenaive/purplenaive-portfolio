$(function(){
	$('#right .topTit').css('transform','rotate()90deg').css('transform-origin','right top');
	/* 왼쪽 메인 메뉴 설정 */
	$('.leftMenu>ul>li').each(function(){
		$(this).toggle(function(){
			var TD=$(this).find('.TD');
			var size=TD.find('li').size();
			
				TD.stop().show();
				TD.find('li').removeClass();
				TD.find('li').eq(0).fadeIn(300,function(){					
					$(this).addClass('flip');
				});
				TD.find('li').delay(300).eq(1).fadeIn(300,function(){
					$(this).addClass('flip');
				});
					if(size<3){
						return;
					}else{
							TD.find('li').delay(300).eq(2).fadeIn(300,function(){
								$(this).addClass('flip');
							});
					}
		},function(){
			var TD=$(this).find('.TD');			
			var size=TD.find('li').size();
			
			if(size<3){				
				TD.find('li').eq(1).removeClass().addClass('flip2').animate({'opacity':0},300,function(){
					TD.find('li').eq(0).removeClass().addClass('flip2').animate({'opacity':0},300,function(){
						TD.find('li').hide();
						TD.find('li').css('opacity',1);
						TD.stop().hide();				
					});
				});
			}else{
				TD.find('li').eq(2).removeClass().addClass('flip2').animate({'opacity':0},300,function(){
					TD.find('li').eq(1).removeClass().addClass('flip2').animate({'opacity':0},300,function(){
						TD.find('li').eq(0).removeClass().addClass('flip2').animate({'opacity':0},300,function(){
							TD.find('li').hide();
							TD.find('li').css('opacity',1);
							TD.stop().hide();
						});					
					});
				});
			}
		});
	});
	
	/* 메인메뉴 아래 서브메뉴 클릭시 나오는 컨텐츠 설정 */
	$('.leftMenu>ul>li').each(function(){
		var parentI=$(this).index();
		$(this).find('div ul li').each(function(){
			var thisI=$(this).index();
			
			$(this).click(function(){
					/* if($('.leftMenu>ul>li').eq(parentI).find('div ul li').eq(thisI).get(0)==$(this).get(0)){return false;} */
				
				$('#content>div:not($("#content>div").eq(parentI))').hide();
				$('#content>div>div.TDiv').stop().animate({width: '0px'},500,function(){
					$('#content>div').eq(parentI).show();
					$('#content>div').eq(parentI).find('.TDiv').eq(thisI).stop().animate({width: '100%'},500);		

						$('#content>div').eq(parentI).find('.TDiv').eq(thisI).find('.widthZero').click(function(){
							$('#content>div').eq(parentI).find('.TDiv').eq(thisI).stop().animate({width: 0},500,function(){
								$('#content>div').eq(parentI).hide();
							});														
						});
				})
			});
		});

	});
	
	/* 컨텐츠 안에 이미지 슬라이스 설정 */
	$('.before').css('opacity','0.6');
	$('.next').css('opacity','0.6');
	$('.TDiv .contReal').each(function(){
		var This=$(this);
		var before=$(this).find('.before');
		var next=$(this).find('.next');
		var uls=$(this).find('.ContUL ul');
		
		before.off().click(function(){
			uls.stop().animate({'top': '-600px'},500,function(){
				uls.find('li').eq(0).appendTo(uls);
				uls.css('top',0);
			});
		});
		next.off().click(function(){
			uls.find('li:last').prependTo(uls);
			uls.css('top','-600px');
			uls.stop().animate({'top': 0},500);
		});
	});
	
	/* subscribe 버튼 설정 */
	
	$('li.icon').click(function(){
		$('#popup').fadeIn(500);
	});
	$('p.closeBtn').click(function(){
		$('#popup').fadeOut(500);
	});
})