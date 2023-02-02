
데이터를 다른js파일에 넣어두고 가져오기.
변수를 export하고 import해서 가져온다.
일반 자료, 함수 등등도 다 export 가능하다.
(ex) 모달같은 거 컴포넌트가 너무 길면 따로 파일 만들어서 가져오면 된다. 

export default 변수명;
import 작명 from './data.js'


◆ export 
let a = 10;
let b = 100;
export default a

여러개 하려면??
export {a, b}

◆ import
import 작명 from './data.js';

여러개 하려면??
import {a,b} from './data.js';


◆ 이렇게 연결하고 state로 사용하면 된다.

let [배열작명] = useState(import작명);


1.상품목록 컴포넌트화
2.상품명 데이터바인딩
3.map반복문사용

<Item shoes={shoes}/> 로 밑에 함수를 가져다 씀.


function Item(props) {
    return (
      <div className="row">
          { props.shoes.map((a,i)=>{
              return(
                  <div className="col-md-4" key={i}>
                      <img src={process.env.PUBLIC_URL + "/shoes" + (i+1) + ".jpg"} width="80%" />
                      <h4>{props.shoes[i].title}</h4>
                      <p>{props.shoes[i].price}</p>
                  </div>
              )
          })
          }
      </div>
      )
    }