Q. react, angular, vue, svelte
전부 html 예쁘게 만들어 주는 툴.

node로 서버를 만들어서 리액트와 연동해보자.

◆ 임시로 node로 서버 만들기

1. 구글검색해서 nodejs 설치
2. 작업폴더만들고 에디터로 오픈
3. server.js 파일을 만들고 아래 코드 작성

const { Router } = require('express')
const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

4. 터미널을 열어서 npm init -y 입력 
5. npm install express 이것도 입력  

서버 미리보기 띄우고 싶으면 터미널열어서 nodemon server.js를 입력
nodemon 이런게 없으면 node server.js 입력해야함.


◆ 리액트 파일을 만들어서 잘 개발한다.

-개발 완료되면 리액트 프로젝트 터미널에 npm run build를 입력하면 리액트 완성본 html 파일이 build 폴더내에 생성됨.
* npm run build(컴파일 작업)
그 html 파일을 서버에서 필요할 때 유저에게 보내주는 것이다. 

build폴더 안에 유저한테 보내줄 html이 들어있다.


◆ 리액트로 만든 HTML 전송하는법
누가 페이지에 접속하면,
리액트로 개발한 html파일을 고객에게 보내주면 그게 서버랑 리액트 합치는거 끝.

1. 노드로 만든 서버파일 안에 리액트를 넣어준다.

2. server.js에 아래와 같이 추가한다. (파일 경로 잘 확인하기)

app.use(express.static(path.join(__dirname, 'react-project/build')));
//이 코드가 있어야 특정 폴더의 파일들 전송 가능

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
}); // 메인 페이지에 접속하면 html파일을 보내줘라.

-----------------------------------------------------------

Q. 여러 페이지 만들고 싶으면? 
서버에서 /detail, /about 등 페이지와 연결하면 되지만,
리액트에서도 react-Router를 이용해서 연결할 수 있다. 

그런데 라우터를 이용하면, 
브라우저 주소창에 /detail 검색하면 경로가 없다고 나올 수도 있다. 
왜냐하면 주소창에 검색하는 건 리액트라우터가 아니라 서버에게 요청하는 것이기 때문이다.
그래서 저 입력한 걸 리액트라우터가 처리하도록 하려면 sever.js최하단에 

app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
  });

이걸 추가해야 한다. *는 모든 문자라는 뜻.
"고객이 URL란에 아무거나 입력하면 걍 리액트 프로젝트나 보내주셈"이라는 뜻인데 이렇게 하면 리액트 라우팅 잘 된다.
이 코드는 항상 가장 하단에 놓아야 잘 작동함

-----------------------------------------------------------

Q. DB데이터는 리액트에서 어떻게 보여주나?

DB데이터를 꺼내서 html으로 보내주는 방식 2가지
1. server-side rendering : html을 서버가 만들어서 보내주는 것
DB에서 데이터 뽑아서 -> 글목록.html 파일에 꽂아넣고 -> 그 html 파일을 서버에서 보내주는 것

2. client-side rendering : html을 리액트가 브라우저안에서 만드는 것
리액트가 서버에 GET요청으로 DB데이터를 가져와서 -> 그걸 html로 만들어서 보여주는 것
리액트는 서버와의 통신은 거의 ajax로 진행한다.

◆ 순서
a) DB데이터 뽑아서 보내주는 API작성
b) 리액트는 여기로 get요청

예시) DB에 있던 상품명 보여주기 

app.get('/product', function(요청,응답){
    응답.json({name:'black shoes'})
});
이렇게 작성하고 리액트 파일에서 /product로 get요청하면 끝

* 리액트와 nodejs 서버간 ajax 요청 잘 되려면 아래와 같은 작업이 꼭 필요함.
1. npm install cors 설치
2. node.js서버파일 상단에 아래와 같이 작성
app.use(express.json());
var cors = require('cors');
app.use(cors());

express.json() 은 유저가 보낸 array/object 데이터를 출력해보기 위해 필요하고
cors는 다른 도메인주소끼리 ajax 요청 주고받을 때 필요하다.

Q. 리액트코드 수정할 때마다 build 해야하나?
그냥 리액트 로컬호스트, 서버 로컬호스트 두개 같이 미리보기 켜놓고 작업하면 됨.
나중에 아마존 같은 웹서버에 올릴 때 빌드하면 된다.

- 다만 리액트 -> 서버 ajax 요청시 /product 이렇게 말고 http://서버주소/product 잘 입력해야 함. 
서버주소 어쩌구 쓰기가 귀찮으면 아래 사이트 참고.
https://create-react-app.dev/docs/proxying-api-requests-in-development/ 
- 서버에 cors 옵션 잘 켜놓아야 함.
