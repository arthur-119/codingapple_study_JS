/* 
Ajax는 서버와 데이터주고받는 법 중 하나임

서버란?
유저가 데이터달라고 요정하면 데이터 보내주는 간단한 프로그램임

서버에 데이터를 요청할 때는 
1. 어떤 데이터인지 url로 잘 기재해야하고
2. 어떤 방법으로 요청할지 결정해야함 (GET/POST 등)

GET/POST 요청하는법은?
GET요청은 서버에 있던 데이터를 읽고싶을 때 주로 사용
POST요청은 서버로 데이터를 보내고 싶을 때 사용
(서버는 유저데이터를 DB에 저장해주는 역할도 함)
PUT, DELETE 요청도 있음

GET요청을 날리고 싶으면 가장 쉬운 방법은 브라우저 주소창임
거기에 url 적으면 그 곳으로 GET요청 날려줌

POST요청 날리고 싶으면
<form action="요청할url" method="post"> 태그 이용하면 됨
그럼 폼이 전송되었을 때 POST요청 날려줌

근데 GET/POST요청을 저렇게 날리면 브라우저가 새로고침된다는 단첨이 있음

AJAX란?
GET/POST요청할때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능임
*/

// jQuery로 Ajax 요청하기
$.get('https://codingapple1.github.io/hello.txt');
// 이러면 데이터 가져옴
// 근데 가져온 데이터가 어디 들어있냐면
// .done 아니면 .then 뒤에 붙이고 콜백함수넣고 파라미터 하나 만들면 거기에 들어있음
$.get('https://codingapple1.github.io/hello.txt').then(function (data) {
    // console.log(data)
});

// 서버로 데이터를 보낼 수 있는 POST요청을 날리고 싶으면
$.post('url~~', { name: 'kim' })
// 이렇게 씀
// 당연히 얘도 .done 이런거 붙이기 가능

$.get('https://codingapple1.github.io/hello.txt')
    .done(function (data) {
        // console.log(data)
    })
    .fail(function (error) {
        console.log('실패함')
    });

// ajax 요청 성공시 .done 안에 있는 코드 실행
// ajax 요청 실패시 .fail 안에 있는 코드 샐행
// error 저거 출력해보면 에러관련 정보를 출력해줌 그거보고 디버깅 하면 됨
// 예를 들어 404 이런 에러코드는 url이 잘못되었다는 뜻임

// done/fail 말고 then/catch 써도 됨

// Q. 다음 url로 GET요청을 해서 가격정보를 가져와 콘솔창에 출력해보십시오.
// https://codingapple1.github.io/price.json 여기로 GET요청하면 오늘의 상품가격을 알려줍니다.
// 콘솔창에 5000이 뜨면 성공이고 쉬우니 답은 없고 알아서 해봅시다.

$.get('https://codingapple1.github.io/price.json ').done(function (data) {
    // console.log(data.price)
})

// 쌩자바스크립트는 fetch 이런거 써서 ajax요청 가능

fetch('https://codingapple1.github.io/price.json')
    .then(res => res.json()) // 얘는 받아온 json을 object로 바꿔주는 기능임
    .then(function (data) {
        // console.log(data)
    })
    .catch(function (error) {
        console.log('실패함')
    })
/*
fetch 함수는 Edge 브라우저 이상에서만 동작함
근데 코드가 한줄 더 필요한 이유가 뭐나면

서버와 데이터를 주고받을 때는 문자만 주고받을 수 있음
arrow, object 이런거 전송 불가능
근데 아까 {price : 5000} 이런 object 무리없이 받아왔잖음?
어떻게 한거냐면 object를 json으로 바꿔서 전송해줘서 그럼

array나 object에 따옴표를 달아서 '{"price" : 5000}'대충 이렇게 만들면 JSON이라는 자료가 됨
json은 문자로 인식하기 때문에 서버와 데이터주고받기 가능

하지만
jQuery의 $.get() 이런건 JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔줌
기본함수 fetch() 이런건 JSON으로 자료가 도착하면 알아서 바꿔주지 않기때문에
res.json() 이런 코드 한줄 추가하면 됨

그게 귀찮으면 jQuery나 axios 이런 라이브러리 설치하면 ajax가 약간 간편해짐
*/


// 숙제 list.html에 상품목록 비우고 자바스크립트를 이용해서 카드레이아웃 3개 생성해오면 됨
// var products 에 있던 데이터 잘 들어있어야함


///////////////////////////////////////////////////////////
// 내가 짠 코드
/* 
var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

var btn_click = 0

$('.row').html('')

products.forEach((a, i)=> { 
    var template = `
    <div class="col-sm-4"><img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p></div>`
    $('.row').append(template)
})



$('#more').click(function() {
    btn_click = btn_click + 1

    if (btn_click == 1){
        $.get('https://codingapple1.github.io/js/more1.json').done(function(data) {
            console.log(data)
    
            data.forEach((a, i) => {
                // console.log(i)
                var template2 = `
                <div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${data[i].title}</h5>
                <p>가격 : ${data[i].price}</p></div>`
                $('.row').append(template2)
            })
            
        })
    }

    if (btn_click == 2) {
        $('.btn').addClass('btn-hide');
        $.get('https://codingapple1.github.io/js/more2.json').done(function(data) {
            console.log(data)
    
            data.forEach((a, i) => {
                // console.log(i)
                var template2 = `
                <div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${data[i].title}</h5>
                <p>가격 : ${data[i].price}</p></div>`
                $('.row').append(template2)
            })
            
        })
    }
        
    
    
})
*/



/*

// 축약 버전
var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

var btn_click = 0;

// 제품 HTML 템플릿 생성 함수
function generateTemplate(product) {
    return `
    <div class="col-sm-4"><img src="https://via.placeholder.com/600" class="w-100">
    <h5>${product.title}</h5>
    <p>가격 : ${product.price}</p></div>`;
}

// 제품 목록 업데이트 함수
function updateProductList(products) {
    products.forEach((product) => {
        // console.log(product)
        var template = generateTemplate(product);
        $('.row').append(template);
    });
}


// 초기 제품 목록 업데이트
$(document).ready(function () {
    $('.row').html('');
    updateProductList(products);

    $('#more').click(function () {
        btn_click += 1;
        console.log(btn_click)

        if (btn_click == 1) {
            loadMoreProducts('https://codingapple1.github.io/js/more1.json');
        } else if (btn_click == 2) {
            $('#more').addClass('btn-hide');
            loadMoreProducts('https://codingapple1.github.io/js/more2.json');
        }
    });

    $('#sort').click(function () {
    
        // products 가격순 정렬
        products.sort(function (a, b) {
            return a.price - b.price
        });
        console.log(products)
    
        $('.row').html('');
        updateProductList(products)
    })
});

if (btn_click == 0) {
    $('#more').removeClass('btn-hide')
}

// 더 많은 제품을 로드하는 함수
function loadMoreProducts(url) {
    $.get(url).done(function (data) {
        updateProductList(data);
    });
}

*/


// array 정렬하는 법
// array 자료는 순서개념이 있다보니 정렬도 가능한데
// 그냥 문자 가나다순으로 정렬하려면 .sort() 붙이면 되는데
// 숫자정렬은 이렇게 코드짜면 됨

var 어레이 = [2, 3, 40, 70, 5];
어레이.sort();
// console.log(어레이);
// 이렇게 짜면 뭔가 좀 이상함

어레이.sort(function (a, b) {
    return a - b
});
// console.log(어레이);

// 동작원리를 알아보자
// 1. a,b 는 array안의 자료들이다
// 2. return 오른쪽이 양수면 a를 오른쪽으로 정렬
// 3. return 오른쪽이 음수면 b를 오른쪽으로 정렬
// 4. 그리고 array 안의 자료들을 계속 뽑아서 a,b에 넣어줌
// 이렇게 동작해서 a-b 저렇게 쓰면 숫자순 정렬이 된ㄴ것임

// 내림차순은 b - a 하면 됨

// Q. 문자정렬과 문자역순정렬은 어떻게 할까요?
var 어레이2 = ['다', '가', '나'];

// 이런 자료가 있을 때 가나다순, 다나가순 정렬은 각각 어떻게 할지도 고민해봅시다.
// 실은 오늘 숙제임 

// 오름차순
어레이2.sort();
// console.log(어레이2)

// 내림차순
어레이2.sort(function(a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }  
})
console.log(어레이2)

// array에 자주 쓰는 filter 함수
// array 자료에서 원하는 자료만 필터링하고 싶으면 filter 함수 사용

// var 어레이3 = [7,3,5,2,40];
// var 새어레이 = 어레이3.filter(function(a) {
//     return 조건식
// })

// 1. a라고 작명한건 array에 있던 데이터를 뜻함
// 2. return 우측에 조건식을 넣으면 조건식에 맞는 a만 남겨줌
// 3. 그리고 filter는 원본을 변형시키지 않는 고마운 함수이기 때문에 새로운 변수에 담아써야함

var 어레이 = [7,3,5,2,40];

var 새어레이 = 어레이.filter(function(a){
  return a < 4
}); 
// console.log(새어레이)

// 이런거 응용하면 쇼핑몰에서 "6만원 이하 상품만 보기"이런 필터기능도 만들 수 있음

// array에서 자주 쓰는 map함수
// array 안의 자료들을 전부 변형하려면 map 함수 사용함

// var 맵어레이 = [7,3,5,2,40];

// var 새맵어레이 = 맵어레이.map(function(a){
//   return 수식같은거
// }); 

// 1. a라고 작명한건 array 에 있던 데이터를 뜻하고
// 2. return 우측에 변경될 수식같은걸 넣으면 됩니다. 
// 3. 그리고 filter는 원본을 변형시키지 않는 고마운 함수기 때문에 새로운 변수에 담아써야합니다. 

var 맵어레이 = [7,3,5,2,40];

var 새맵어레이 = 맵어레이.map(function(a){
  return a * 4
}); 
console.log(새맵어레이)

// 예를들어 array안의 숫자들을 전부 4를 곱해주고 싶으면 이렇게 코드 짜면 됨

// 이런거 응용하면 쇼핑몰에서 "달러 -> 원화로 변환" 이런 기능도 만들 수 있겠네

// 참고!
// sort함수는 원본을 변형시켜버림
// 원본을 변형시켜버리면 나중에 원본으로 되돌아갈 수 없으니까 귀찮아질 수 있어서
// array/object자료 조작시엔 원본을 따로 복사해두고 조작하는 경우도 있음

