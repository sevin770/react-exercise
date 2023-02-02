
src폴더 안에 원하는 사진 넣기. css에서 경로 불러온다. 
하지만 html에서 src폴더의 이미지를 넣고 싶을 땐?

import 작명 from '이미지경로'; 
이렇게 가져온 쓴다.
<div className="main-bg" style={{backgroundImage : `url(${작명})`}}></div>

import bg from "./imges/bg.png";
<div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>

그런데 이렇게 넣으면 이미지가 100개가 넘어가면 어떻게 함?
일일히 import하기 힘듦. -> public폴더를 이용한다.

public폴더 : 
리액트는 사이트 발행 전에 html js css파일을 압축한다.(bundling) 
하지만 public폴더에 있던 건 압축 안되고 보존.

public폴더 이미지 사용할 떈 그냥 "/이미지경로" 만 하면 된다.
<img src={"/logo192.png"} /> 

◆ public폴더 사용시 주의점 : ~~.com에 발행할 땐 문제가 없지만 ~~.com/어쩌구/ 경로에 발행 시에는 문제가 있다.
파일을 찾을 수 없다고 나올 수 있으므로 이미지 경로를 "/어쩌구/이미지경로"로 해줘야 한다.

그래서 /어쩌구/를 뜻하는 process.env.PUBLIC_URL를 더해줘야 한다. 

<img src={process.env.PUBLIC_URL + '/logo192.png'} /> 

* 참고
https://create-react-app.dev/docs/using-the-public-folder/#adding-assets-outside-of-the-module-system


