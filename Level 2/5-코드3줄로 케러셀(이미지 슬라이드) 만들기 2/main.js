// 리스트
$('.navbar-toggler').on('click', function () {
    $('.list-group').toggleClass('show')
})

// 모달창 열기
$('#login-modal').on('click', function () {
    $('.black-bg').addClass('show-modal')
})

// 모달창 닫기
$('#close').on('click', function () {
    $('.black-bg').removeClass('show-modal')
})

// esc 눌렀을때 모달창 닫기 궁금해서 구글 찾아서 해봄
$(document).keydown(function () {
    if (event.keyCode == 27 || event.which == 27) {
        $('.black-bg').removeClass('show-modal')
    }
})

// 자바스크립트 공백알림 & 이메일형식 확인 & 비밀번호 형식확인 
// document.querySelector('#submit').addEventListener('click', function (e) {
//     if (document.querySelector('#email').value == '') {
//         e.preventDefault();
//         alert('이메일를 입력해라');
//     } if (document.querySelector('#password').value == '') {
//         e.preventDefault();
//         alert('비밀번호를 입력해라');
//     } if (document.querySelector('#password').value.length < 6) {
//         e.preventDefault();
//         alert('비밀번호는 6글자 이상');
//     } 
// })

// jQuery로 공백알림 & 이메일형식 확인 & 비밀번호 형식확인 
$('form').on('submit', function (e) {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    if (email == '') {
        e.preventDefault();
        alert('이메일 입력해라');
    } else if ( /\S+@\S+\.\S+/.test(email) == false ) {
        e.preventDefault();
        alert('이메일 형식이 맞지 않습니다')
    } else if (password == '') {
        e.preventDefault();
        alert('비밀번호 입력해라');
        console.log('비밀번호 입력해라')
    } else if (password.length < 6){
        e.preventDefault();
        alert('비밀번호는 6글자 이상이어야 한다')
        console.log('비밀번호 6글자 이상')
    } else if ( /[A-Z]/.test(password) == false ) {
        e.preventDefault();
        alert('비밀번호에는 대문자가 1개 이상 들어가야 합니다.')
    }
})

// $('#submit').on('click', function (e) {

//     var 입력한값 = document.getElementById('email').value;
//     if (/\S+@\S+\.\S+/.test(입력한값) == false) {
//         e.preventDefault();
//         alert('이메일형식아님')
        
//     }

// });


// 다크모드
let count = 0;

document.getElementById('darkmode').addEventListener('click', function(e) {
    
    count ++
    console.log(count);

    if (count % 2 == 1) {
        console.log('홀수 / 다크') //다크모드
        document.getElementById('darkmode').classList.add('dark-btn');
        document.body.style.background = 'rgb(77, 76, 76)';
        document.getElementById('darkmode').innerHTML = "☀ 라이트 모드로 보기";

    } else {
        console.log('짝수 / 라이트') //라이트모드
        document.getElementById('darkmode').classList.remove('dark-btn');
        document.body.style.background = 'white';
        document.getElementById('darkmode').innerHTML = "🌙다크 모드로 보기";
    }
})

// 캐러셀 (이미지 슬라이드)
$('.slide-1').on('click', function() {
    $('.slide-container').css('transform', 'translateX(0)');
});

$('.slide-2').on('click', function() {
    $('.slide-container').css('transform', 'translateX(-100vw)');
});

$('.slide-3').on('click', function() {
    $('.slide-container').css('transform', 'translateX(-200vw)');
});

// 캐러셀 이전/다음버튼 if문 사용

// var now = 1

// $('.next').on('click', function() {
//     if ( now == 1 ) {
//         $('.slide-container').css('transform', 'translateX(-100vw)');
//         now++
//     } else if ( now == 2 ) {
//         $('.slide-container').css('transform', 'translateX(-200vw)');
//         now++
//     }
// })

// $('.before').on('click', function() {
//     if ( now == 2 ) {
//         $('.slide-container').css('transform', 'translateX(0vw)');
//         now--
//     } else if ( now == 3 ) {
//         $('.slide-container').css('transform', 'translateX(-100vw)');
//         now--
//     }
// })

//캐러셀 코드 줄인 버전 (코딩할때 이렇게 해야 편하다)

var now = 1 < 3;

$('.next').on('click', function() {
    $('.slide-container').css('transform', `translateX(-${now}00vw)`);
    now++;
})

$('.before').on('click', function() {
    $('.slide-container').css('transform', `translateX(-${now-2}00vw)`);
    now--;
})




