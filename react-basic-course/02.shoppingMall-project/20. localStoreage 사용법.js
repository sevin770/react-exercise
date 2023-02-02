새로고침을 하면 state 초기값으로 돌아감.
서버로 보내서 DB에 영구저장할 수 있음.
서버가 없을 땐 반영구적으로 사용할 수 있는 저장소인 localStoreage가 있다.

localStoreage : 브라우저에서 제공하는 데이터 저장소
1. key:value 형태로 저장가능
2. 최대 5MB까지 문자만 가능
3. 유저가 브라우저를 청소하지 않는 이상 사이트 재접속해도 영구적으로 남아 있음.

◆ 데이터 저장 : 문자만 저장 가능.
localStorage.setItem('이름','값')

◆ 데이터 출력
localStorage.getItem('이름')

◆ 데이터 삭제
localStorage.removeItem('이름')

◆ 데이터 수정하는 법?
꺼내서 수정하고 다시 집어넣기

◆ array,object 저장하려면 JSON으로 변환해야 함.
하지만 꺼냈을 때 JSON이기 때문에 다시 array,object로 변환해줘야 함

array/object -> JSON변환
JSON.stringify()
JSON -> array/object변환
JSON.parse()

function App() {
    let obj = {name:'kim'}
    localStorage.setItem('data',JSON.stringify(obj) )
    let 꺼낸거 = localStorage.getItem('data')
    console.log(JSON.parse(꺼낸거));
}

* 누가 detail 페이지에 접속하면 그 페이지에 보이는 상품id가져와서 localStorage에 watched 항목에 추가
- 상세페이지에서 봤던 상품의 번호들을 localStorage에 저장하기. 

useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched');
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    꺼낸거.push(찾은상품.id)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  },[])

- 중복번호는 막기 (set자료형)
꺼낸거 = new Set(꺼낸거)
꺼낸거 = Array.from(꺼낸거)

Q. 모든 state를 localStorage에 자동저장?
redux-persist 라이브러리이용

redux : state관리 라이브러리. jotai, zustand등 비슷하고 더 쉬운게 많다.