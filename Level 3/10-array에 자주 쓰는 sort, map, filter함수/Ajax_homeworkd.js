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
    <div class="col-sm-4"><img src="https://via.placeholder.com/600" class="w-100">
    <h5>${product.title}</h5>
    <p>가격 : ${product.price}</p></div>`;
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
    $('#filter').click(function() {
        var under6 = allProducts.filter(function(a) {
            return a.price <= 60000
        })
        // console.log(under6)

        $('.row').html('');
        updateProductList(under6)
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
