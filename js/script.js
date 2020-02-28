// スライドダウンメニュー
$(function(){
    $('.categories').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $(".dropdwn_menu",this).hide();
    });
});
// カラーバリエーション
$(function(){
    $('.item_photo').hover(function(){
        $(".popup", this).show();
    }, function(){
        $(".popup",this).hide();
    });
});
$(function(){
	$('#loopslider').each(function(){
		var loopsliderWidth = $(this).width();
		var loopsliderHeight = $(this).height();
		$(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');

		var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
		var listCount = $('#loopslider_wrap').children('ul').children('li').length;

		var loopWidth = (listWidth)*(listCount);

		$('#loopslider_wrap').css({
			top: '0',
			left: '0',
			width: ((loopWidth) * 2),
			height: (loopsliderHeight),
			overflow: 'hidden',
			position: 'absolute'
		});

		$('#loopslider_wrap ul').css({
			width: (loopWidth)
		});
		loopsliderPosition();

		function loopsliderPosition(){
			$('#loopslider_wrap').css({left:'0'});
			$('#loopslider_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},40000,'linear');
			setTimeout(function(){
				loopsliderPosition();
			},40000);
		};

        $('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');
        });
        $("#loopslider").hover(function(){
            clearInterval(timerID);
            }, function(){
            timerID = setInterval(show, $interval);
		});
		
});