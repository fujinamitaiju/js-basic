document.addEventListener('DOMContentLoaded',function(){
	let elem = document.getElementById('elem');

	//mouseover　カーソルが要素に乗っているとき
	elem.addEventListener('mouseover',function(){
		this.style.color = '#ff0000';
	});
	//mouseout カーソルが離れたとき
	elem.addEventListener('mouseout',function(){
		this.style.color = '';
	});

    //マウスオーバーされたときクラス名をつける
	let elem2 = document.getElementById('elem2');
	elem2.addEventListener('mouseover',function(){
		this.className = 'blue';
	});
	//マウスアウトの時クラス名を取り外す
	/*let elem2 = document.getElementById('elem2');*/
	elem2.addEventListener('mouseout',function(){
		this.className = '';
	});
	//マウスアウトされたときクラス名の取り外し
	//document.addEventListener('click',function(){	

	/*document.getElementById('elem3').addEventListener('click',function(){
		if(.elem3 === blue){
       		this.className = 'blue';
    	}else{
    		this.className = '';
    	}
	});*/

	//this.className = 'blue';
	//});
	let elem3 = document.getElementById('elem3');
	elem3.addEventListener('click',function(){
    	if(this.className === 'blue'){
    		this.className = '';
    	}else{
    		this.className = 'blue';
    	}
	});
    //elem3を少ない行数で実行 toggle
	let elem4 = document.getElementById('elem4');
	elem4.addEventListener('click',function(){
		this.classList.toggle('blue');
	});


});
