// $('.tab-button').eq(0).on('click', function(){ });
// 이런식으로 하나만 선택할 수 있음!

$('.tab-button').eq(0).on('click', function () {
    // orange 태그 추가/삭제
    $('.tab-button').removeClass("orange");
    $('.tab-button').eq(0).addClass("orange");

    // show 태그 추가/삭제
    $('.tab-content').removeClass("show");
    $('.tab-content').eq(0).addClass("show");
});

$('.tab-button').eq(1).on('click', function () {
    // orange 태그 추가/삭제
    $('.tab-button').removeClass("orange");
    $('.tab-button').eq(1).addClass("orange");

    // show 태그 추가/삭제
    $('.tab-content').removeClass("show");
    $('.tab-content').eq(1).addClass("show");
});

$('.tab-button').eq(2).on('click', function () {
    // orange 태그 추가/삭제
    $('.tab-button').removeClass("orange");
    $('.tab-button').eq(2).addClass("orange");

    // show 태그 추가/삭제
    $('.tab-content').removeClass("show");
    $('.tab-content').eq(2).addClass("show");
});
