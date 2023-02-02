// 똑같이 생긴 div ui들 반복문으로 줄이기

// map() 사용법

// array.map(함수)
// 1. array자료 갯수만큼 함수 안의 코드를 실행해 준다.

// [1,2,3].map(function(a){
//     console.log(a)
// });

// 1
// 2
// 3
// 출력

// 2. 함수의 파라미터는 array 안에 있던 자료다. 2개 사용 가능 (a, i) 자료, 반복문 실행 정수
// 3. retur에 뭐 적으면 array 각각에 담아준다.

// [1,2,3].map(function(a){
//     return '어쩌구'
// });

// ['어쩌구','어쩌구','어쩌구'] 출력


// - 같은 html 반복 생성하는 법 
// 보통 for 문법 쓰는데 html 중괄호 안에서는 for구문 쓸 수 없음. 
// -> map을 쓴다. 

// {
//     [1,2,3].map(function(){
//       return <div>안녕</div>
//     })
// }
// map을 쓰면 그 자리에 []가 남음. 
// 이렇게 들어있는 것과 같다.
// [<div>안녕</div>,<div>안녕</div>,<div>안녕</div>] 
// 리액트는 array안에 div담아도 잘 보여줌



// -글제목 수 만큼 생성해주세요.
// 파라미터 a는 array에 있는 자료, i는 반복문이 돌 때마다 0부터 1씩 증가하는 정수

// 글제목[i]로 써줘도 되고, 그냥 a로 써줘도 됨.
// {
//     글제목.map(function (a,i) {
//       return (
//         <div className="list" key="i">
//           <h4>{글제목[i]}</h4>   
//           <p>2월 17일 발행</p>
//         </div>
//       );
//     })
// }

// 참고 ) 반복문으로 html 생성하면 key={html마다 다른숫자} 추가해야함


// - 혼자해보기 
// 첫번째 따봉 기능 모달기능 map으로 추가하기.

let [따봉, 따봉변경] = useState([0,0,0,0]);

return (
<h4> 
  { 글제목[i] } 
   <span onClick={()=>{ 
      let copy = [...따봉];
      copy[i] = copy[i] + 1;
      따봉변경(copy)  
   }}>👍</span> {따봉[i]} 
</h4> 
)

