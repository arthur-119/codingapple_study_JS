1. Swiper
캐러셀(이미지 슬라이드) 이런거 만들고 싶으면 코드 짜도 되지만
swiper라이브러리 사용해도 됨.
https://swiperjs.com/get-started#use-swiper-from-cdn
여기서 튜토리얼 그대로 js, css 파일 다운 받아서 첨부하고 예제코드 복붙하면 됨.


2. Chart.js
웹페이지에서 차트만들고 싶으면 쓰면 됨
실제 서비스라면 관리자, admin페이지 만들 때도 많을텐데 거기서 통계를 이쁘게 보여줄 때 유용하겠네
div 박스에 css 스타일 넣어서 그래프 만들고 그림그리고 해도 되겠지만 그럴 바엔 저거 쓰는게 나음
코인거래소 같은 곳에는 더 프로페셔널한 유료 차트라이브러리 같은걸 쓰기도 함.

https://cdnjs.com/libraries/Chart.js
이런데 가서 js 파일 다운받거나 cdn 버전으로 구해서 html 파일에 넣으면 설치끝입니다.

https://www.chartjs.org/docs/latest/
그리고 Chart.js 홈페이지 예제 코드 아무데나 붙여넣기 하면 차트나옴

3. Animate On Scroll
스크롤 내리면 요소가 서서히 등장하는 애니메이션을 만들고 싶을 때 쓰면 좋습니다.
유저가 스크롤바를 ... div 박스 현재 y좌표만큼 내리면 애니메이션 보여달라고 코드짜면 되긴 하는데 귀찮으니까요 
https://github.com/michalsnik/aos
여기서 css파일, js 파일 cdn버전 찾아서 html 파일에 넣고

그 다음에 밑에 <script> 태그 열어서 
<script>
  AOS.init();
</script>
이러면 설치 끝이라는군요 

https://michalsnik.github.io/aos/
그 다음에 위 사이트에서 예제 코드 따라서 복붙하면 구현 끝인듯요 
<div data-aos="fade-up"></div>
원하는 박스에 이런거 추가하면 된다고합니다. 
시간, 방향 설정가능하고 원하는 클래스명 부착도 되는군요 


4. EmailJS

원래 이메일 전송은 서버가 해야하지만 Gmail 이런거 서버를 잠깐 빌리면
자바스크립트만으로 이메일 전송이 가능함
유저가 내 이메일 계정으로 이메일 전송도 가능하고
내 이메일 계정으로 남에게 이메일 전송도 가능함

https://www.emailjs.com/docs/introduction/how-does-emailjs-work/
이 사이트 가서 가입하고 계정 만들고
튜토리얼 그대로 복붙하고 거기에 내가 방금 만든 EmailJS계정 아이디만 잘 채우면 됨

5. Lodash
array, object, 문자, 숫자 자료를 다루기 편해지는 기본함수들 제공
예를 들어 array 자료에 있는 마음에 안드는 'a'라는 문자를 제거하고 싶으면
직접 반복문 돌리거나 filter 함수 쓰거나 그러면 되는건데
Lodash 설치해놨으면 _.pull(어레이자료, 'a'); 쓰면 됨

https://lodash.com/
하지만 초보라면 저런거 의존하기 보다 직접 어렵게 반복문 써서 알고리즘 짜는 것도 좋은 연습이 될것임

6. React 아니면 Vue 
페이지가 너무 많아서 UI 재활용이 자주 필요한 사이트나
모바일 앱처럼 페이지 이동없이 동작하는 Single Page Application을 만들 때 유용한 자바스크립트 라이브러리입니다. 
요즘은 원래 용도와 관계없이 마구잡이로 씁니다. 안쓰면 큰일나는줄 아는 사람이 많음
사용법은 길어서 홈페이지 내 무료강의 들어보든가 하십시오

7. Fullpage.js
웹페이지를 PPT처럼 만들어줍니다.
버튼누르면 다음 슬라이드보여주는데 하지만 이런 UI는 유행이 지났습니다.
상업적 이용은 아마 유료임 

https://alvarotrigo.com/fullPage/
이건 동작예시

https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs
여기서 css, js 파일을 cdn 식으로 설치하거나 그러면 되고
예시 html과 js 코드를 복사붙여넣기하면 완성입니다. 



