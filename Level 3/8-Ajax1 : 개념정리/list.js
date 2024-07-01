var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

// document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title
// document.querySelectorAll('.card-body p')[0].innerHTML = products[0].price

// document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title
// document.querySelectorAll('.card-body p')[1].innerHTML = products[1].price

// document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title
// document.querySelectorAll('.card-body p')[2].innerHTML = products[2].price

// console.log(document.querySelectorAll('.card-body h5').length);

// 반복문 사용해봄
for (let i = 0; i < document.querySelectorAll('.card-body h5').length; i++) {
    document.querySelectorAll('.card-body h5')[i].innerHTML = products[i].title
    document.querySelectorAll('.card-body p')[i].innerHTML = products[i].price
}


// 문자 중간에 변수 쉽게 넣기
// 자바스크립트 덧셈기호 쓰면 문자이어붙이기 쉬움
// 숫자 + 숫자는 숫자 덧셈해주는데
// 문자 + 숫자처럼 적어도 1개가 문자면 문자 덧셈을 해준다
// 문자덧셈은 그냥 문자2개 이어붙여줌

// 문자 중간에 변수 넣고싶으면 덧셈기호 이렇게 활용하면 됨
var a = '안녕';
console.log('문자' + a + '문자');

// 귀찮다면 백틱기호 쓰면 됨 ``
// 백틱기호도 문자 만들어주는데
// 1. 문자 중간에 엔터키 칠 수 있음
// 2. 중간에 ${변수명} 문법이용 가능함

console.log(`문자 ${a} 문자`);
// 이건 일반 따옴표안에서는 사용불가능