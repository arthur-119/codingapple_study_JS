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
$.get('https://codingapple1.github.io/hello.txt').then(function(data) {
    // console.log(data)
});

// 서버로 데이터를 보낼 수 있는 POST요청을 날리고 싶으면
$.post('url~~', {name : 'kim'})
// 이렇게 씀
// 당연히 얘도 .done 이런거 붙이기 가능

$.get('https://codingapple1.github.io/hello.txt')
  .done(function(data){
    // console.log(data)
  })
  .fail(function(error){
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

$.get('https://codingapple1.github.io/price.json ').done(function(data) {
    // console.log(data.price)
})

// 쌩자바스크립트는 fetch 이런거 써서 ajax요청 가능

fetch('https://codingapple1.github.io/price.json')
    .then(res => res.json()) // 얘는 받아온 json을 object로 바꿔주는 기능임
    .then(function(data) {
        // console.log(data)
    })
    .catch(function(error) {
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
$(document).ready(function() {
    $('.row').html('');
    updateProductList(products);

    $('#more').click(function() {
        btn_click += 1;

        if (btn_click == 1) {
            loadMoreProducts('https://codingapple1.github.io/js/more1.json');
        } else if (btn_click == 2) {
            $('.btn').addClass('btn-hide');
            loadMoreProducts('https://codingapple1.github.io/js/more2.json');
        }
    });
});

// 더 많은 제품을 로드하는 함수
function loadMoreProducts(url) {
    $.get(url).done(function(data) {
        updateProductList(data);
    });
}

