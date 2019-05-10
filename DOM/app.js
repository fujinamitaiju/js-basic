let date = new Date();
let hoge = document.getElementById('hoge');//
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