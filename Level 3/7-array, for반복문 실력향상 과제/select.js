// var pants = [28, 30, 32]

/*
document.querySelector('.form-select').addEventListener('input', function() {

    var value = document.querySelectorAll('.form-select')[0].value;
    if ( value == '셔츠' ) {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        // document.querySelectorAll('.form-select')[1].innerHTML = '';
    } else if ( value == '바지') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        // 여기 서버에서 데이터 가져와서 그 갯수만큼 option 생성
        // 반복문 쓰면 될듯
        for (let i = 0; i < pants.length; i++) {
            let 바지옵션 = `<option>${pants[i]}</option>`
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', 바지옵션)
        }
        // 이렇게 쓰면 됨

    }
})
*/

// forEach 반복문

// array 자료 뒤에 붙일 수 있는 forEach() 라는 기본 함수가 있다
// 이거도 반복문임

// var pants2 = [28, 30, 32];
// pants2.forEach(function() {
//     console.log('안녕');
// 이러면 안녕 3번 출력해줌
// 그래서 array자료 다룰 때 for 반복문 쓰기 귀찮으면 forEach 뒤에 붙여도 됨
// }) 
// 근데 여기서 콜백함수는 왜 써야하는가?
// 개발자가 그렇게 쓰란다.

// pants2.forEach(function(a, i) {
//     console.log(a)
// });
// 콜백함수 안에 파라미터 2개까지 작명이 가능한데 (실은 3개까진데 몰라도 됨;)
// 첫 파라미터는 반복문 돌 때 마다 array 안에 있던 하나하나의 데이터가 되고
// 둘 째 파라미터는 반복문 돌 때마다 0부터 1씩 증가하는 정수가 된다

// forEach 사용해서 코드 수정
var shirts = [95, 100, 105, 110]
var pants = [28, 30, 32]

document.querySelector('.form-select').addEventListener('input', function () {

    var value = document.querySelectorAll('.form-select')[0].value;
    if (value == '셔츠') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        shirts.forEach(function (shirts_size) {
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', `<option>${shirts_size}</option>`)
        })
    } else if (value == '바지') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        pants.forEach(function (pants_size) {
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', `<option>${pants_size}</option>`)
        })

    }
})


// object 자료를 다룰 때 for in 반복문 가능

// object 자료 갯수만큼 반복문을 돌리고 싶으면
var obj = { name : 'kim', age : 20 }

for (var key in obj) {
    console.log(obj[key])
}
// for in 반복문 사용하면
// 콘솔창에 '안녕' 2회 출력되겠네
// 그리고 for in 반복문 쓰면 object 자료 안에 있는 key와 value를 다 출력해볼 수 있음
// 지금 key라고 작명하는 부분은 반복문이 돌 때마다 object자료 안에 있던 key값이 된다

// key를 출력하고 싶으면 console.log(key)
// value를 출력하고 싶으면 console.log(obj[key])

// 반복문의 용도 2가지
// 실은 코드 복사붙여넣기용으로 쓰는데 for 반복문이라 했는데
// array나 object 자료 전부 꺼내서 쓰고 싶을 때도 반복문을 쓰면 유용하다.
// 그래서
// 1. 코드 복붙하고 싶으면
// 2. array, object자료 다 꺼내고 싶을 때
// 반복문 사용하면 유용함


// arrow function 문법
// 함수 만드는 다른 문법이 있음. 특히 콜백함수만들 때 자주 쓰는 방법

var pants = [28, 30, 32];
pants.forEach(function(a){
  console.log(a)
});

pants.forEach((a) => {
  console.log(a)
});

// function 키워드 대신 => 화살표를 () 우측에 부착해도 똑같이 함수 만들 수 있음
// 저걸 arrow function이라고 함

pants.forEach( a => {
    console.log(this)
});
// arrow function은 파라미터가 하나면 () 소괄호 생략해도 봐줌
// 함수 중괄호 안에 ruturn 한 줄 밖에 없으면 {} 중괄호화 return 동시에 생략해도 봐줌
// 그래서 간결하니 콜백함수에 자주 사용하는 사용하는 사람들이 있음

let 함수 = function() { console.log('안녕') }
let 함수1 = () => { console.log('안녕') } 

// 그냥 함수와 arrow function의 기능차이는 하나 있는데
// 함수 안에서 this를 써야할 경우
// -그냥 함수는 함수 안에서 this를 알맞게 재정의 해줍니다
// -arrow function은 함수 안에서 this를 재정의해주지 않고 바깥에 있던 this를 그대로 씀.
// 그래서 이벤트리스너 콜백함수안에서 this를 써야하면 rrow function쓰면 의도와 다르게 동작할 수도 있음
