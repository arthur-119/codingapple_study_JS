// Q. 유저가 셔츠를 선택하면 하단에 95, 100을 선택할 수 있는 <select> 박스가 등장하려면 코드를 어떻게 짜야할까?
// console.log(document.querySelectorAll('.form-select')[0].value)

if ( document.querySelectorAll('.form-select')[0].value == '셔츠') {
    $('.form-select').eq(1).removeClass('form-hide');
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide')
}
// 근데 이렇게 써도 작동안함
// 왜냐면
// script 안에 대충 적은 코드는 페이지 로드시 1회 실행됨
// <input> 이나 <select> 조작할 때 input 이벤트가 발생하기때문에
// 이벤트리스너 부착해야함

document.querySelector('.form-select').addEventListener('input', function() {
    if (document.querySelectorAll('.form-select')[0].value == '셔츠') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide')
    } else {
        document.querySelectorAll('.form-select')[1].classList.add('form-hide')
    }
})