/*
var 버튼 = $('.tab-button');
var 내용 = $('.tab-content');

버튼.eq(0).on('click', function () {
    // orange 태그 추가/삭제
    버튼.removeClass("orange");
    버튼.eq(0).addClass("orange");

    // show 태그 추가/삭제
    내용.removeClass("show");
    내용.eq(0).addClass("show");
});

버튼.eq(1).on('click', function () {
    // orange 태그 추가/삭제
    버튼.removeClass("orange");
    버튼.eq(1).addClass("orange");

    // show 태그 추가/삭제
    내용.removeClass("show");
    내용.eq(1).addClass("show");
});

버튼.eq(2).on('click', function () {
    // orange 태그 추가/삭제
    버튼.removeClass("orange");
    버튼.eq(2).addClass("orange");

    // show 태그 추가/삭제
    내용.removeClass("show");
    내용.eq(2).addClass("show");
});
*/

/*
코드 복붙하고 싶으면 for 반복문
비슷한 코드 덩아리 6줄 있제? 3번이나 반복된다
for 문 쓰면 쉽게 복붙해준다

for (횟수) {
    복붙할 코드
}
*/



// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//       });
// }

/*
반복문 안에는 var 대신 let 써야함
 */

/*
Q. 지금 탭이 3개면 잘 동작하지만 4개 5개가 되면 잘 동작하지 않는다 우째 수정할까?

지금 반복문에는 3이라고 하드코딩 해놔서 탭이 몇개있든 3개만 작동함 그래서 이걸 수정하려면
3이라는 숫자 대신 "지금 html에 있는 탭 버튼의 갯수"를 넣으면 됨.

A.
for (let i = 0; i < $('.tab-button').length; i++){

  $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  })

});

요소 찾은다음 .length 붙이면 갯수 세어줌
*/


//탭 기능 함수로 축약하기
//이렇게 하면 재사용이 편리하고, 나중에 남이 읽었을 때도 뭔가 이해가 쉬울 수 있다.

// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button').eq(i).on('click', function() {
//     tab_open(i)
//   })
// }

// function tab_open(구멍) {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(구멍).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(구멍).addClass('show');
// }

/*
구멍 왜 뚫음?
함수로 코드를 싸맬 때 안에 변수가 들어있으면 변수를 전부 파라미터로 바꾸는게 좋다.
그래야 잘 동작한다. 그래서 i 부분을 전부 파라미터로 바꿨습니다.
이제 함수 사용할 때
tab_open(0) -> 0번 탭 열림
tab_open(1) -> 1번 탭 열림
tab_open(2) -> 2번 탭 열림
*/


/*
이벤트버블링을 알면 이벤트리스너 줄일 수 있음

지금 탭을 만들 때 이벤트리스너 3개 부착함
근데 잘 생각해보면 이벤트리스너 1개만 써도 충분히 기능구현 가능.

버튼 3개의 부모인 <ul class="list"></ul> 여기에 이벤트리스너 1개만 있어도 탭기능 만들 수 있을듯
버튼 뭘 누르든 간에 ul 에 붙은 이벤트리스너도 동작하니까
왜냐면 이벤트 버블링이 항상 일어나기 때문임

$('.list).click(function() {
  지금 누른게 버튼 0이면 탭열기(0) 실행
  지금 누른게 버튼 1이면 탭열기(1) 실행
  지금 누른게 버튼 2이면 탭열기(2) 실행
})
그래서 이렇게 탭기능 만들어도 잘 동작한다는 소리

이렇게 사용하면 덜 복잡하고
램용량 절약할 수 있슴
*/

// $('.list').click(function(e) {
//   if (e.target == document.querySelectorAll('.tab-button')[0]) {
//     tab_open(0)
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[1]) {
//     tab_open(1)
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[2]) {
//     tab_open(2)
//   }
// })


// function tab_open(구멍) {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(구멍).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(구멍).addClass('show');
// }

/*
dataset 문법 알면 더 줄일 수 있음

<div data-데이터이름="값"></div>
html안에 유저 몰래 정보를 숨겨놓을 수 있음
데이터 이름 아무렇게나 작명하고 값도 넣으면 됨
일반 유저들은 모름

document.querySelector().dataset.데이터이름;
이러면 html요소에 숨겨놨던 데이터가 이 자리에 남음
*/

$('.list').click(function(e) {
  tab_open(e.target.dataset.id)
})

function tab_open(구멍) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(구멍).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(구멍).addClass('show');
}