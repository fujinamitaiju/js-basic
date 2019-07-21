$(function(){
	//ここでidの#のマークを書く
	$('#js-click-btn').on('click',function(){
		$(this).addClass('large-btn');
	});
	$('#js-hover-btn').mouseover(function(){
		
		$(this).addClass('opacity');
	//メソッドとはこの時にこの働きを実行するというかたまりのこと	
    //↓メソッドチェーン　つなげて書ける
	}).mouseout(function(){
		$(this).removeClass('opacity');
	});

	/*$('#js-hide-btn').on('click',function(){
		$('box').hide('box');
	});*/
	$('#js-hide-btn').click(function(){
		//.on('ここにいろいろな働きを入れることができる')
		$('#js-target-element').fadeOut(1000);
	});
	$('#js-show-btn').click(function(){
		$('#js-target-element').fadeIn(1000);

	});

	$('#js-add-btn').on('click',function(){
		$(this).before('<li class="btn">追加された</li>');
		$(this).after('<li class="btn">追加された</li>');
	});
	//子要素として追加
	$('#js-add-btn2').on('click',function(){
		$(this).prepend('<li>前</li>');
		$(this).append('<li>後</li>');

	});

	$('.js-toggle').on('click', function(){
		$(this).toggleClass('on');//onクラスの付け替えをすることで要素の付け替えcssの装飾を付け替えている
		$(this).siblings().slideToggle();
	});
	$('.js-hamburger').on('click', function(){
		$(this).toggleClass('on');
	});

	//スムーズスクロール
	$('.js-scroll').on('click', function(){
		$('body, html').animate({scrollTop: 0},1000);//animate({何をしたいか},時間) //
	});

	$('.js-mordal').on('click', function(){
		$('.modal-content').fadeIn(1000);
		$('#modal-bg').fadeIn(1000);
	});
	$('.js-modal-close').on('click', function(){
		$('.modal-content').fadeOut(1000);
		$('#modal-bg').fadeOut(1000);
	});








});