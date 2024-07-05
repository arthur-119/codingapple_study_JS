$(window).scroll(function(){
    var 높이 = $(window).scrollTop();
    console.log(높이);


    // 620~1010까지 스크롤바 내리면,
    // 첫째 카드의 opacity 1~0으로 서서히 변경해주셈
    // 높이가 620~1010일때 0~1이 되는 y는?

    var y = (-1/390) * 높이 + (101/39);
    // 1차 함수 하면 됨
    // y = a * 높이 + b;
    // 1 = a * 620 + b;
    // 0 = a * 1010 + b;
    $('.card-box').eq(0).css('opacity', y)

    // 스케일 바꾸기
    // 620~1010일때 1~0.9가 되는 z

    var z = (-1/3900) * 높이 + (226/195)
    $('.card-box').eq(0).css('transform', `scale( ${z} )`);

});