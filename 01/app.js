//コメントアウト

console.log("-------------consolelog--------------");
console.log("hoge");

console.log("四則演算");
console.log(1 + 1);
console.log(2 - 1);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log("5 % 2");//クォーテーションで囲むと文字列になる

console.log("------文字------");
console.log("ふじなみ" + "たいじゅ");

console.log("変数の作り方");

let name = "はしもと";

console.log(name);
let num = 2;
console.log(num);
num += 2;
console.log(num);


const age = 20;    //  constは定数の型
console.log(age);

console.log(`私の年齢は、${age}歳です`);

console.log("条件分岐");
console.log("if文");

let int = 5;
if (int > 3) {
	console.log(`${int}は3より大きいです`);
}


//true false で返す　真偽値

//論理演算子 &&　かつ 　　　||　または

console.log("else if----------------");

if(int >= 10){
	console.log(int + "は10以上です");
}else if(int > 3){
	console.log(int + "は3より大きいです");
}else{
	console.log(int + "は3以下です");
}

console.log("switch文--------------");
let signal = "green";

switch (signal){
	case "red":
		console.log("とまれ");
		break;
	case "green":
		console.log("すすめ");
		break;
	default:
		console.log("その他");
		break;	
}

console.log("--------------繰り返し処理ーーーーーーーーー");
console.log("for");

for (let  i = 1; i<= 10; i++){
	console.log(i);
}

console.log("while--------");

let j = 11;
while (j <= 20){
	console.log(j);
	j++;
}

console.log("fizzbuzz問題");
//3の倍数はfizz
//5の倍数はbuzz
//3と5の倍数はfizzbuzz

let num2 = 30;

let i=1;
/*while(i <= num2){
	if(i % 15 === 0){
		console.log("fizzbuzz");
		i++;
	}else if(i % 5 === 0){
		console.log("buzz");
		i++;
	}else if (i % 3 === 0){
		console.log("fizz");
		i++;
	}else{
		console.log(i);
	i++;
	}
}*/

for(i = 1;i <= num2; i++){
	if(i % 15 === 0){
		console.log("fizzbuzz");
	}else if(i % 5 === 0){
		console.log("buzz");
	}else if (i % 3 === 0){
		console.log("fizz");
	}else{
		console.log(i);
	}
}

console.log("-------関数-----------");

//関数とは複数の処理をまとめたもの

/*function greeting(){
	console.log("おはよう");
}
console.log();

greeting();
//変数名も、関数名の時もキャメルケースにする

*/
console.log("-------引数------------");

function greeting(say){
	console.log('佐藤さんが' + say + 'と言っています');
}
greeting('こんにちは');

console.log('ローカル変数-------------');

function local(name){
	let hoge = '私の名前は' + name + 'です';
	return hoge; //結果を返す
}
console.log(local('くによし'));


console.log('-----------------配列------------------');

let studentList = ['はしもとさん','三宅さん','佐藤さん'];
console.log(studentList);
console.log(studentList[1]);//2番目を表示
console.log(studentList[1] = 'フジナミ'); //値を上書きできる
console.log(studentList);

studentList.push('まつしまさん'); //値を追加
console.log(studentList);

studentList.pop(); //末尾の値を削除
studentList.push();// 先頭の値を削除
console.log(studentList);

console.log('-------------連想配列------------------');

//{キー1：値１,キー2：値2}

let user = {
	food:'ラーメン',
	age:30,
	from:'沖縄'
};

console.log(user);
console.log(user['food']);


let user2 = {
	food:'焼きそば',
	age:40,
	from:'おおさか'
};

console.log('-----------二次元配列--------------');

let users = [user , user2];
console.log(users);
console.log(users[0]['from']); //[0]は　usersの1番目 → user  
console.log(users[0].food); //連想配列は.でつなぐことが出kる

console.log('---------メソッド------');
let user3 = {
	food:'寿司',
	age:20,
	from: '千葉',
	greet: function(name){
		console.log('私の名前は' +name + 'です。' + this.from + 'から来ました。');
	}
}

user3.greet('さいとう');
console.log('--------日付---------');
let date = new Date();
console.log(date);



console.log('DOM---------------------------------------');

let test =document.getElementById('test');
test.style.color = 'blue';

test.className = 'addClass'; //id=""　の場所にclass="addClass"を追加
test.textContent ='変更';
document.getElementById('btn').addEventListener('click',
	function(){
		let tag = document.createElement('p');           //pタグを生成
		console.log(tag);
		let text = document.createTextNode('Hello js');//  テキストを生成
		document.body.appendChild(tag).appendChild(text);// htmlのbody内にtag(p)とtext(Hello js)を生成

})


















console.log();