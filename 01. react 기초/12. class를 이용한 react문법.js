//요즘은 다 function을 이용하기 때문에 참고만 해도 됨. 

class Modal2 extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>안녕</div>
    )
  }
}

1. class 어쩌구 작성하고 컴포넌트 이름 작명.
2. constructor, super, render 함수 3개 채워넣음. 기본 템플릿같은 것임 
3. 컴포넌트는 길고 복잡한 html 축약할 때 씀. return 안에 축약할 html 작성.
그럼 이제 <Modal2></Modal2>라고 쓸 때 마다 <div>안녕</div> 이게 남는다. 

◆ state를 만드려면?
this.state = {} 하고 오브젝트 형식으로 저장

class Modal2 extends React.Component {
  constructor(){
    super()
    this.state = {
        name : 'kim',
        age : 20
    }
  }

  render(){
    return (
      <div>안녕{this.state.name}</div>
    )
  }
}

◆ state를 변경하려면?
기존 state에 변경사항만 갖다 쓰면 됨.

class Modal2 extends React.Component {
    constructor(){
      super()
      this.state = {
          name : 'kim',
          age : 20
      }
    }
  
    render(){
      return (
        <div>안녕{this.state.name}</div>
        <button onClick={()=>{
            this.setState({age : 21})
        }}></button>
      )
    }
  }


◆ props쓰는 법?
constructor, super에 써주면 됨.

class Modal2 extends React.Component {
    constructor(props){
      super(props)
    }
  
    render(){
      return (
        <div>안녕</div>
      )
    }
  
  }