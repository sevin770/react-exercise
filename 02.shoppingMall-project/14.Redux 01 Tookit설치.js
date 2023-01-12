

Redux 사용하면 컴포넌트들이 props없이 state공유 가능하다.
컴포넌트간 state 공유 편해짐.
redux store.js에 state들이 저장되어 있고 다른 컴포넌트에서 자유롭게 꺼내쓸 수 있다. 
package.json 에서 react와 recat-dom버전이 18.1 버전 이상에서만 redux가 작동한다.  

1. 설치
npm install @reduxjs/toolkit react-redux

2.tptxld

(1)store.js파일 생성
state를 저장할 통 만들기. 
파일에 아래와 같이 작성

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { }
}) 

(2) index.js 에서 <Provider store={store}> 쓰기

import { Provider } from "react-redux";
import store from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
); 