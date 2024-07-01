// var car = '소나타';
// var carPrice = '50000';
// var carColor = 'white';
// 갑자기 여러 데이터들을 변수에 저장할 일이 생겼다면 위 방법말고 다른 방법도 있다

//Array 자료형
// var car = ['소나타', 50000, 'white'];
// 이렇게 하면 여러 자료를 엑셀처럼 저장 가능
// 데이터를 뽑아쓰려면
// console.log(car[1]);
//이렇게 쓰면 [x] x번째 자료를 출력해준다.

//array 자료를 수정하고 싶으면 등호 이용해서 수정하면 된다.
// car[1] = 60000;
// console.log(car[1]);

//-------//

// Object 자료형

// var car2 = { name : '소나타', price : 50000 };
// 중괄호를 열고 자료를 콤마로 구분해서 집어넣으면 됨
// 자료 왼쪽에 자료의 이름을 붙여서 저장해야함
// 자료의 이름은 key, 실제 자료는 value라고 부름
// 그래서 object 자료형은 key:value 형태로 자료를 저장할 수 있음

// var car2 = { name : '소나타', price : 50000 };
// console.log(car2['name']);
// console.log(car2.name);
// 자료 뽑아쓰려면 이렇게 하면 됨
// 방법 두개다 상관없음

// var car2 = { name : '소나타', price : 50000 };
// car2['name'] = '그랜저';
// console.log(car2['name']);
// object 자료를 수정하고 싶으면 등호 이용해서 수정하면 됨
// 자료 추가도 가능

//-------//

//Array/object 차이

// 둘중에 아무거나 골라 쓰면 되는데 자료가 존나 많을때는
// 나같으면 object 쓸것임

// var car = { name : '소나타', price : 50000, year : 2030 };
// 저장은 귀찮겠지만
// 가격뽑을 때 "가격의 key 이름이 뭐였지"를 기억하면 됨

//Array/object 차이2

// array는 순서개념이 있음, 왼쪽에 적을 수록 더 앞에 있는 자료임
// object는 순서 개념이 없음
// array는 순서개념이 있다보니
// -가나다순 정렬
// -x번 자료부터 x번 자료까지 자르기
// -맨 뒤, 맨 앞에 자료 넣기
// -원하는 자료가 들어있나 검색
// 순서개념이 필요한 많은 것들을 할 수 있음

// array자료.sort()하면 가나다순 정렬
// array자료.slice(x, y)하면 x번부터 y번 전까지 자를 수 있고
// array자료.push(x)하면 x를 맨 뒤에 입력
// 이런 기본함수들이 준비되어 있음

// 숙제
// <div class="container mt-3">
//   <div class="card p-3">
//   <span>상품명</span>
//   <span>가격</span>
// </div>
// </div> 

// <script>
// var car2 = { name : '소나타', price : 50000 } 
// </script>
// car2에 저장된 소나타라는 상품명과 50000이라는 가격을 뽑아서 html에 넣어라

var car2 = {name : '소나타', price : 50000}
document.querySelector('.car-name').innerHTML = car2.name
document.querySelector('.car-price').innerHTML = car2.price