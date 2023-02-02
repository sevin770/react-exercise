
전환애니메이션
부착하면 애니메이션 나오는 className만든 후 탈부착하기.

1. 애니메이션 동작 전 className만들기
2. 애니메이션 동작 후 className만들기
3. className에 transition 속성 추가
4. 2번 className탈부착


function TabContent({탭}){
  return (
    <div className="start">
      [<div>내용0</div>, <div>내용0</div>, <div>내용0</div>][탭]
    </div>
  ) 
}

- {탭} state가 변할 때마다 end라는 className을 붙였다 뗏다 하기
state가 업데이트 될 때마다 실행하는 건 useEffect 이용
useEffect(()=>{}, [탭])


----------------------------------------------------------------
function TabContent({탭}){
  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeOut(()=>{
      setFade('end')
    },100)
    return ()=>{
        clearTimeout(a)
        setFade('')
    }
  },[탭])

  return (
    <div className={'start ' + fade}>
      [<div>내용0</div>, <div>내용0</div>, <div>내용0</div>][탭]
    </div>
  ) 
}
-----------------------------------------------------------------

setTimeOut(()=>{},100) 주는 이유?

리액트의 automatic batching
state변경한 함수가 근처에 있다면 하나로 합쳐서 최종적으로 한 번만 변경해준다.
여러번 변경하면 마지막에 재랜더링 한번만 해준다는 것.

그래서 딜레이를 준다.  setTimeOut