

리액트에서는 ajax를 이용해서 서버와 통신한다.

◆ 더보기 누르면 서버에서 ajax요청으로 데이터를 가져와서 더 추가하는 기능만들기.

서버 : 요청하면 보내주는 프로그램.

서버와 데이터를 주고받으려면

1. 방법 : get (데이터 요청) / post (데이터 전달)
2. 어떤 자료? : url형식(서버 만든 사람한테 물어보면 됨)

get 요청하는 곳 : 브라우저 주소창

get/post요청시 새로고침된다. 
ajax사용하면 새로고침 없이 get/post가능

ajax 사용하려면 옵션 3가지

1.XMLHttpRequest (예전 자바스크립트 문법)
2.fetch(요즘 자바스크립트 문법)
3.axios(외부라이브러리)


◆ axios 사용하기

1. npm install axios

2. import axios from 'axios'

get요청 
axios.get('url') 

요청결과
axios.get('url').then()
ajax요청이 실패할 경우 catch

button onClick={
    axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
      console.log(결과.data)
    })
    .catch(()=>{
      console.log('실패함')
    })
}>버튼</button>


◆ 여러 곳으로 요청하고 싶을 때?
동시에 ajax요청

Promis.all([ axios.get('/url1'), axios.get('/url1') ])
.then(()=>{})
두 개 다 성공했을 때 전송해주세요.


-원래 서버와는 문자만 주고 받을 수 있다. 
따옴표를 쳐놓으면 문자로 인식해서 array와 abject로 주고받기 가능 : json데이터

axios는 array로 자동으로 변경해준다. 
js는 json파일로 변환문법을 써줘야함.
fetch().then(결과=>결과.json()).then(data=>{})