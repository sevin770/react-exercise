props를 보냈는데 출력이 안된다거나
이미지를 넣었는데 안보이는 버그같은게 생기면
개발자도구를 켜서 Elements 탭 살펴보면 되는데
여기선 내가 짠 코드가 실제 html css로 변환되어서 보여진다.

그게 싫고 컴포넌트로 미리보고 싶으면 리액트 개발자도구를 설치해서 켜보면 됨.

◆ React Developer Tools (크롬 개발자 툴)

- f12창에 components 탭
state 확인,수정등등 가능
오른쪽 위에 <> 아이콘 누르면 소스코드 확인 가능.

-profiler 탭 : 성능 저하되는 컴포넌트 범인 찾기
왼쪽 위 녹화버튼 누른 후 페이지 조작.
성능 저하되는게 컴포넌트가 뭔지 찾을 수 있다.
대부분의 지연시간은 서버에서 데이터가 늦게와서 그런 거라서 서버가 느린 문제가 보편적이다.

◆ Redux Developer Tools (크롬 개발자 툴)
- 다운하면 redux탭이 생성된다.

state를 한 눈에 보여줌.
state변경한 내역 알려줌. 업데이트 될 때마다 표시된다.

◆ lazy import 
리액트로 만든 페이지는 single Page Application 
특징 : 발행하면 js파일 하나에 모든 코드 다 쑤셔넣음. 사이즈가 매우 크다.
유저가 메인 페이지 접속 시 1.html 2.css 3.큰 js파일 다운받게 됨 -> 로딩속도가 느리다.

이 js파일을 잘게 분할하고 싶다면?

메인페이지에서 먼저 로드할 필요 없는 컴포넌트들은 lazy import 를 사용한다.
필요할 때 import 해주세요.


import Detail from './Pages/Detail.js'
import Cart from './Pages/Cart.js'

위에 꺼를 아래형식으로 수정.

import {lazy, Suspense, useEffect, useState} from 'react'

const Detail = lazy( () => import('./Pages/Detail.js') )
const Cart = lazy( () => import('./Pages/Cart.js') )

function App(){} 

사이트 발행할 때 별도의 js파일로 분리된다. 

단점 : 유저가 해당 페이지로 방문할 때 로딩시간이 발생한다. 
-> 로딩바 같은 걸 생성해주는 게 좋다. 

*Suspense로 감싸면 로딩중 UI넣기 가능

import {lazy, Suspense, useEffect, useState} from 'react'
const Detail = lazy( () => import('./Pages/Detail.js') )
const Cart = lazy( () => import('./Pages/Cart.js') )

function App() {
     return(
        <Route path="/detail/:id" element={
            <Suspense fallback={<div>로딩중임</div>}>
              <Detail2 shoes={shoes}/>
            </Suspense>
      } />
     )
}

대부분 Routes 안에 있는 모든 컴포넌트들을 lazy import 하기 때문에
전체를 Suspense로 감싸도 무방하다. 

* 기본적으로 lazt import 는 default로 export 한 경우만 가능한다.
다른 이름으로 export했다면 이렇게 따로 설정해준다. 

const Detail1 = lazy( () => import('./Pages/Detail.js').then(module => ({ default: module.Detail1 })) )
const Detail2 = lazy( () => import('./Pages/Detail.js').then(module => ({ default: module.Detail2 })) )
const Cart = lazy( () => import('./Pages/Cart.js') ) 

참고
https://ko.reactjs.org/docs/code-splitting.html
https://dev.to/iamandrewluca/react-lazy-without-default-export-4b65 




