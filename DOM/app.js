/*let hoge = document.getElementById('hoge');//
hoge.textContent = date.toLocaleString();// hogeのtextContentの箱にdateのLocaleStringを代入


let list = document.getElementsByTagName('a');//aタグを取得
console.log(list);

console.log(list.length);//配列の中身の数を取得できる。


for(let i=0; i < list.length; i++){
console.log(list[i].href);
}

function btna_click(){
	window.alert('クリックした');// windowは
}



// コンテンツ　＋　画像がロードされたら 発火 window.onload
window.onload = function(){
	document.getElementById('btnB').onclick = function(){
		window.alert('ボタンがクリックされた');
		console.log('test');
	}
}

//コンテンツのみのロードが終わり次第実行
//DOMContentLoaded　コンテンツのロードが終わり次第実行
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('btnC').addEventListener('click',function(){
		window.alert('ボタンCがクリック');
	});
});*/


//getElementByClassName
//戻り値はnodeListオブジェクト documentを配列化したもの
//クラス名は指定したクラス分だけ
//クラスを複数指定すると、すべてを含んでいるものだけ実行

let fuga = document.getElementsByClassName('fuga');
for ( i = 0; i < fuga.length; i++) {
	console.log(fuga[i].textContent);
	
}

//textContent , innerHTMLの違い
document.addEventListener('DOMContentLoaded' , function(){
	//値をセット
	document.getElementById('text').innerHTML = '<a href="https//amazon.com">Amazon</a>';
});

//入力内容の取得と出力
/*document.addEventListener('DOMContentLoaded',function(){
	document.getElementById('addbtn').addEventListener('click', funciton(){
		//変数にNodeLIstに格納
		let url = document.getElementById('url');
		let site = document.getElementById('site');
        //必要なタグを生成し		
        let anchor = document.createElement('a');
		//くっつける
		anchor.href = url.value;
		let text = document.createTextNode(site.value);//valueはinputタグに入力された文字 string型の値
		anchor.appendChild(text);
		console.log(url.value);
        //HTNLにタグを追加

        let list = document.getElementById('list');
        list.appendChild(anchor);


        //改行処理
        //削除ボタンを追加したアンカーを1つずつ削除
	});
});*/

// 入力内容の取得と出力
// 検索内容をジャヴァスクリプトで取得　→　じゃらんとかに送る　→帰ってきたデータをジャヴァスクリプトで返す
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('addbtn').addEventListener('click',function(){
        // 変数にNodeListを格納
        let url = document.getElementById('url');
        let site = document.getElementById('site');
        
        // 必要なタグを生成し、変数に格納
        let anchor = document.createElement ('a');
        // がっちゃんこ
        anchor.href = url.value;
        let text = document.createTextNode(site.value);
        anchor.appendChild(text);
        console.log(url.value);
        // HTMLにがっちゃんこしたタグを追加
        let list = document.getElementById('list');
        list.appendChild(anchor);
        // 改行処理を入れる
        let br = document.createElement('br');

        list.appendChild(br);
        // list.appendChild br;
    });
    // 削除ボタンを押して追加したanchorを1つづつ削除できるようにする
    //id取得してclickしたときしょりできるようにする

    document.getElementById('delbtn').addEventListener('click',function(){
    	
        list.removeChild(list.firstChild);
    });
});