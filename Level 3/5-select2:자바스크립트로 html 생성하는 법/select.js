// Q. 유저가 셔츠를 선택하면 하단에 95, 100을 선택할 수 있는 <select> 박스가 등장하려면 코드를 어떻게 짜야할까?
// console.log(document.querySelectorAll('.form-select')[0].value)

// if (document.querySelectorAll('.form-select')[0].value == '셔츠') {
//     $('.form-select').eq(1).removeClass('form-hide');
//     document.querySelectorAll('.form-select')[1].classList.remove('form-hide')
// }

// 근데 이렇게 써도 작동안함
// 왜냐면
// script 안에 대충 적은 코드는 페이지 로드시 1회 실행됨
// <input> 이나 <select> 조작할 때 input 이벤트가 발생하기때문에
// 이벤트리스너 부착해야함

// document.querySelector('.form-select').addEventListener('input', function () {
//     if (document.querySelectorAll('.form-select')[0].value == '셔츠') {
//         document.querySelectorAll('.form-select')[1].classList.remove('form-hide')
//     } else {
//         document.querySelectorAll('.form-select')[1].classList.add('form-hide')
//     }
// })

// 위에 짠 코드는 확장성이 떨어짐
// 셔츠 사이즈를 95, 100이라고 하드코딩 해놓고 보여주기만 하기 때문임
// 실제 쇼핑몰이라면 셔츠 사이즈가 매일 바뀔것인데
// 이럴 경우 서버에서 보낸 데ㅣ터 갯수에 맞게 <option> 태그 생성해줘야 할듯

// html 생성하는 법 1
// div 안에 <p> 태그 생성하려면
// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);
// 이러면 생성됨
// -document.createElement() 쓰면 html자료를 하나 더 생성해줌
// -그걸 맘대로 조작한 다음 appendChild() 써서 아무데나 넣으면 생성됨


// html 생성하는 법 2
// <div id="test"> </div>

// var a = '<p>안녕</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', a);

// 이래도 생성됨
// 문자자료로 html을 만든 다음
// insertAdjacentHTML()안에 넣으면 됨
// 'beforeend' 이건 안쪽 맨 밑에 추가하라는 뜻, 싫으면 맘대로 변경가능

// 1번 방법은 코드가 너무 길고 복잡하기 때문에 특별한 이유 없으면 2번 방법을 쓰자
// 실은 1번이 더 빠르게 도작하는데 0.00000x초 차이임


// var a = '<p>안녕</p>';
// $('#test').append(a);
// 이래도 됨
// append는 안쪽 맨 밑에 추가하라는 뜻


// Q. 저는 안쪽에 추가하는게 아니라 아예 바꾸고 싶은데
// div 찾아서 innerHTML = '<p></p>' 쓰셈

// 바지옵션 누르면 다른 사이즈가 나와야하는데


document.querySelector('.form-select').addEventListener('input', function() {
    console.log('hello11')
    var value = document.querySelectorAll('.form-select')[0].value;
    if ( value == '셔츠' ) {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        var 셔츠옵션 = `<option>95</option><option>100</option>`;
        document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', 셔츠옵션);
    } else if ( value == '바지') {
        console.log('hello')
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        var 바지옵션 = `<option>28</option><option>30</option>`;
        document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', 바지옵션);
    }
})

