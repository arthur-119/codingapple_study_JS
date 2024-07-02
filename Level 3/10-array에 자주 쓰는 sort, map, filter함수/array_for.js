// Q. Array에서 철수라는 자료를 찾고 싶음!
// arrayㅔ서 이름을 찾아주는 함수를 만들고 있음
// 함수 안에 파라미터로 이름을 집어넣으면
// 그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어보자

var 출석부 = ['흥민', '영희', '철수', '재석'];

// 내코드

// function 이름찾기(name) {
//     출석부.forEach( (a, b) => {
//         // console.log(b)
//         if (name == 출석부[b]) {
//             console.log("있어요")
//         } else {
//             console.log('없어요')
//         }
//     })
// }

// 지피티 수정코드
function 이름찾기(name) {
    var found = false; // 이름이 출석부에 있는지 여부를 추적하는 변수
    출석부.forEach( (a) => {
        if (name == a) {
            found = true;
        }
    });
    if (found) {
        console.log(name + " 있어요");
    } else {
        console.log(name + " 없어요");
    }
}

// 이름찾기('철수'); // "있어요"
// 이름찾기('지민'); // "없어요"

// 해설코드
// function 이름찾기(name) {
//     for (var i = 0; i < 출석부.length; i++) {
//         if (name == 출석부[i]) {
//             console.log('있어요')
//         } else {
//             console.log('없어요.')
//         }
//     }
// }

// 이름찾기('철수');

//---------------------------------------------------//

// 구구단 출력하기

for (let i = 2; i < 10; i++) {
    for (let e =1; e < 10; e++){
        // console.log(i * e)
    }
    
}

//---------------------------------------------------//

// 평균점수 계산기 만들기

function score(now, last) {
    var result = 0;

    // for (let i=0; i<now.length; i++) {
    //     result = result + now[i]
    // }

    now.forEach((a) => {
        result += a
    })

    // console.log(result)
    var avr = result / now.length
    console.log(`평균점수 : ${avr}`)
    if (avr > last) {
        console.log(`점수가 ${avr - last}점이나 올랐네 깔삼하네!!`)
    } else if ( avr < last ) {
        console.log(`점수 꼬라지가 이게 뭐냐 ${last - avr}점이나 떨어졌네`)
    } else if (avr = last) {
        console.log(`점수가 고냥 작년이랑 똑같구만!`)
    }
 
}

score([2,3,4,5,6,100], 10);

