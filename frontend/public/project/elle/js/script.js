$(function(){
    //메인슬라이드 자동으로 꽉차게 및 각 이미지 넓이값 자동 조정
    var windowH = parseInt($('body, html').css('height','100%').css('height')), windowW = parseInt($('body, html').css('width')), bodyPercent = ((windowH / windowW)*100).toFixed(2);
    $('#mainSlide').css('padding-top',bodyPercent+'%');
    $('.mainImg').find('li').css('height',windowH+'px');
});

$(document).ready(function(){
    
    //메인슬라이드 설정
    $('#mainSlide').find('.paginate > li').on({
        click: function(){
            var tg = $(this), page = tg.parent('.paginate') , pageLi = page.find('> li'), i = tg.index(),
                ul = $('.mainImg'), li = ul.find('> li');

            pageLi.removeClass('active');
            li.stop().fadeOut(500);
            li.eq(i).stop().fadeIn(500);
            tg.addClass('active');

            return false;
        }
    })
    $('.mainControl').click(function(){
        var tg = $(this), page = $('.paginate'), pageLi = page.find('> li') , leng = pageLi.length , i = page.find('> li.active').index();
        
        if( tg.is('.next') ){ if( i === leng-1 ){ i = -1; } pageLi.eq(i+1).trigger('click'); }
        else if ( tg.is('.prev') ){ if( i === 0 ){ i = leng; } pageLi.eq( i-1 ).trigger('click'); }
    });
    
    setInterval(function(){ $('.next').trigger('click'); },10000);
    
    //side 설정
    $(window).scroll(function(){
        var st = $(window).scrollTop()-980;
        if( st > 200 ){ $('#side').stop().animate({'margin-top' : st+'px'},500); };
    });
    
    //gallery 설정 
    $('.Gnext').click(function(){
        var ul = $('.galleryUl').find('.grid5'), li = ul.find('> li'), liw = parseInt(li.css('width')) + parseInt(li.css('margin-right'));
        ul.stop().animate({ 'margin-left': -liw+'px'},500,function(){
            li.eq(0).appendTo(ul);
            ul.css('margin-left',0);
        });
        return false;
    });
    $('.Gprev').click(function(){
        var ul = $('.galleryUl').find('.grid5'), li = ul.find('> li'), size = li.length - 1, liw = parseInt(li.css('width')) + parseInt(li.css('margin-right'));
        ul.css('margin-left',-liw+'px');
        li.eq(size).prependTo(ul);
        ul.stop().animate({ 'margin-left' : 0 },500);
        return false;
    });
    setInterval(function(){ $('.Gnext').trigger('click'); },10000);
});