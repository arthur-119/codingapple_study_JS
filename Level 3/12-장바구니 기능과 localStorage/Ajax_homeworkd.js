var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];



var allProducts = [...products]; // 모든 로드된 제품을 저장하는 배열
var btn_click = 0;

// 제품 HTML 템플릿 생성 함수
function generateTemplate(product) {
    return `
    <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${product.title}</h5>
    <p>가격 : ${product.price}</p>
    <button class="btn btn-primary" id="buy">구매하기</button>
    </div>
    `;
}

// 제품 목록 업데이트 함수
function updateProductList(products) {
    products.forEach((product) => {
        var template = generateTemplate(product);
        $('.row').append(template);
    });
}

// 초기 제품 목록 업데이트
$(document).ready(function () {
    $('.row').html('');
    updateProductList(products);
    // console.log(products)

    $('#more').click(function () {
        btn_click += 1;
        if (btn_click == 1) {
            loadMoreProducts('https://codingapple1.github.io/js/more1.json');
        } else if (btn_click == 2) {
            $('#more').addClass('btn-hide');
            loadMoreProducts('https://codingapple1.github.io/js/more2.json');
        }


        
    });

    // 가격순 정렬
    $('#sort_price').click(function () {
        allProducts.sort(function (a, b) {
            console.log(a, b)
            return a.price - b.price;
        });

        $('.row').html('');
        updateProductList(allProducts);
    });

    // 가나다 정렬
    $('#sort_msg').click(function () {
        allProducts.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
        })
        // console.log(allProducts)

        $('.row').html('');
        updateProductList(allProducts);
    })
    // 다나가 정렬
    $('#sort_gsm').click(function () {
        allProducts.sort(function (a, b) {
            if (a.title > b.title) {
                return -1;
            }
            if (a.title < b.title) {
                return 1;
            }
        })
        // console.log(allProducts)

        $('.row').html('');
        updateProductList(allProducts);
    })

    // 6만원 이하
    $('#filter').click(function () {
        var under6 = allProducts.filter(function (a) {
            return a.price <= 60000
        })
        // console.log(under6)

        $('.row').html('');
        updateProductList(under6)
    })

    ////////////////////////////// 장바구니

    $(document).on('click', '#buy', function (e) {
        
        // console.log('구매한데')
        var title = $(e.target).siblings('h5').html();
        // console.log(title)
        if (localStorage.getItem('cart') !== null) {

            // key: cart가 있으면 수정
            var key = JSON.parse(localStorage.getItem('cart'));
            
            console.log(key)
            key.push(title) // 배열에 값 추가하려먼 .push() 사용하면 됨

            localStorage.setItem('cart', JSON.stringify(key));

        } else {

            // key: cart가 없으면 추가
            localStorage.setItem('cart', JSON.stringify([title]));

        }
        
    })
    

});





// 더 많은 제품을 로드하는 함수
function loadMoreProducts(url) {
    $.get(url).done(function (data) {
        allProducts = allProducts.concat(data); // 새로운 데이터를 기존 데이터에 추가
        updateProductList(data);
    });
}

//////////////////////////////
// 응용
// 응용1. 가나다순 정렬버튼?  - 완료

// 응용2. <input>을 이용해 유저가 직접 가격을 입력해서 필터하는 기능? - 완강하고 만들어 보는거로

// 응용3. 원래 순서대로 되돌리기 버튼과 기능을 만들고 싶으면? - 완강하고 만들어 보는거로


// (응용2)
// 1. 같은 상품은 중복으로 추가되지 않게하고 싶으면? 
// 상품을 추가하기 전에 상품명이 이미 localStorage에 있는지 검사하면 되겠군요

// 2. 아니면 같은 상품 구매 누르면 상품 갯수가 올라가게?
// 상품명을 localStorage에 저장시 갯수도 저장하면 됩니다.
// [ '상품명a 2개', '상품명b 4개' ... ] 이렇게 저장해도 되겠지만 여러 정보를 한 곳에 넣고 싶으면 array/object 쓰면 됩니다.
// [ {title : '상품명a', num : 2}, {title : '상품명b', num : 4}  ... ] 이렇게 저장해놓으면 편리할듯요

// ----완강하고 만들어 보기!

////////////////////////////// localStorage 필기

localStorage.setItem('이름', '강승우');
// localStorage.getItem('이름');
localStorage.removeItem('이름');


var arr = [1, 2, 3];
var jsonarr = JSON.stringify(arr);
// localStorage.setItem('num', jsonarr);
var 꺼냄 = localStorage.getItem('num');

// console.log(JSON.parse(꺼냄))


if (localStorage.getItem('num') !== null) {
    // console.log('있음')
}



// sessionStorage 사용법은 localStorage 자리에 sessionStorage 넣으면 됨

// 만약 localStorage 데이터 수정하려면
// 1. 자료 꺼내고
// 2. 꺼낸거 수정하고
// 3. 자료 다시 저장하셈









