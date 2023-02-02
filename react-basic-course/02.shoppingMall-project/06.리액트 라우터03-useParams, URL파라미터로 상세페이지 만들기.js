상세페이지에 상품명 넣기. 
prosp를 이용한다.
별도의 페이지에서 state를 쓰면 거기서 밖에 못 쓰기 때문에 props를 이용.

그리고 route 사용
그런데 1번 상품은 /detail/1 페이지 이런 식으로 구조를 짠다면 너무 많아진다.
<Route path="/detail/1" element={<Detail shoes={shoes}/>} />
<Route path="/detail/2" element={<Detail shoes={shoes}/>} />

페이지를 여러 개 만들고 싶다면
url파라미터를 쓰자.

<Route path="/detail/:id" element={<Detail shoes={shoes}/>} />

/detail/아무거나 했을 때 element 보여주세요. 라는 뜻임. 
:id는 파라미터다.
url파라미터 만들 때 여러 개 가능. 일반문자랑 섞어 쓸 수도 있음.
/detail/:id/:product/
/detail/:id/sdfsdf/:product 뭐 이런식으로 다 가능

근데 페이지는 다른데 같은 게 계속나옴.
detail.js 파일에서 수정.
유저가 URL파라미터에 입력한 거 가져오려면 useParams();

import { useParams } from "react-router-dom";

let {id} = useParams();
유저가 :id 자리에 적은 거 가져와 준다.
console.log(id); 해보면 나옴.

------------------------------------------------------------------

import { useParams } from "react-router-dom";
function Detail(props) {
    let {id} = useParams();
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/shoes" + id + ".jpg"}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id-1].title}</h4>
            <p>{props.shoes[id-1].content}</p>
            <p>{props.shoes[id-1].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
  }
export default Detail;

------------------------------------------------------------------

Q. 상품이 정렬되면?
상세페이지가 이상해진다.
/detail/0 으로 방문하면 기존에 첫번째 상품이 아니라 첫번째로 정렬이 된 상품으로 보인다.
그러니까 접속시 0번째 상품이 아니라 상품id가 0인걸 보여주는 것이 좋다.

.find를 사용한다.

------------------------------------------------------------------

  function Detail(props) {

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/shoes" + (찾은상품.id+1) + ".jpg"}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
  }

export default Detail;