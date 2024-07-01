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



for (let i = 0; i < $('.tab-button').length; i++) {
    $('.tab-button').eq(i).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
      });
}

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