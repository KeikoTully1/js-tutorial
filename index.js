// Reference youtube: https://www.youtube.com/watch?v=QCjFPSO96RU 【JavaScript超入門講座】わずか50分で知識ゼロから基礎をマスター！

//変数
let sakura = 'Hello World!';
//sakura = '2Hello World!';
console.log(sakura);

//定数
const bigSakura = 'He..Hell...Hello World!';
console.log(bigSakura);

//配列
const inoki = ['いーち','にーい','さーん','ダーー！！'];
console.log(inoki[0]);

// //ループ文
// let index = 0;
// while(index < inoki.length){ //=4
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++; //index = 5
// }

// //if / else
// if(inoki.length > 3){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...！');
// }

//関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...！');
  }
};

test(3); //when you want to call and you can put the argument here

//オブジェクト
const soap = {
  color: 'pink',
  size: 'large',
   purfume: 'mint',
  goToilet: () => {
  console.log('Hello world!');
  }

};

//console.log(soap.size);  //You can call specific data by dot operation .size (property) such as (soap.goToilet())

document.getElementsByTagName('button')[0].addEventListener('click', ()=> { //when it is clicked then it will do ()=>
  //命令を書く
  window.alert('Hello World!');
});

console.log(window.innerHeight);
console.log(window.innerWidth);
window.alert('Hello World!');  //It will call popup with the text.  window is about browser as whole thing.
console.log(document);  //This is for the html
console.log(document.getElementsByTagName('button')[0]);  //this is for tag to call from the html





