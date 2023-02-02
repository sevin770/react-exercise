- 웹사이트에서 앱을 설치하시겠습니까? 라는 팝업이 뜸.
설치하면 홈 화면에 아이콘이 생긴다. 
웹사이트 바로가기 추가 버튼이다. 근데 앱이랑 똑같아 보임
클릭하면 실제로 브라우저 상단바가 다 사라진 채로 뜨기 때문이다.

-> 이걸 PWA 라고 함.
웹사이트를 모바일 앱처럼 설치해서 쓸 수 있다. 

장점 : 1. 설치 마케팅 비용 적음
       2. 아날로그 유저들 배려
       3. html css js만으로 앱까지
       4. 푸시알림,센서등

◆ PWA가 셋팅된 새 리액트 프로젝트를 생성해야 함.

npx create-react-app 프로젝트명 --template cra-template-pwa

- 기존 프로젝트는 pwa로 못 만든다. 애초에 처음부터 이렇게 만들어야 함.
그러니까 만들어놨다면 새 pwa를 만들고 기존코드를 복붙해야 함.
필요한 라이브러리도 새로 설치.

◆ PWA의 조건 manifest.json, service-worker.js

1.manifest.json : 앱 설정파일. 
pubilc폴더에 있다. 

앱 이름, 아이콘등등 경로를 넣어서 설정 가능. 
안드로이드ios윈도우 등 플랫폼 마다 요구하는 아이콘 크기가 달라서 사이즈 별로 설정해서 넣어줘야 함. 
start_url : 앱 누르면 첫 화면 설정. ( .으로 해놓으면 기본적으로 index.html)
display : 앱 켜면 브라우저 상단바 제거할지 말지
상단테마색상, 배경색상등등

2.service-worker.js : 오프라인에서도 사이트 열 수 있게 도와줌. 
설정파일 외에 빌드하고 생성되는 게 필요한데
index.js 파일에서 serviceWorkerRegistration.unregister(); 에서 un을 없애준다 -> 이렇게 하고 빌드해줘야 생성된다. 
* 빌드하는 법
npm run build

모바일 앱은 오프라인 상태에서도 열린다. 웹사이트는 아님. 그래서 앱처럼 오프라인에서도 열리게 바꿔주는 것. html css js파일을 미리 하드에 저장해두고 접속할 때 다운이 아니라 하드에 저장되어 있는 거 쓰도록 하는 파일.
캐싱(미리 하드에 저장해놓는 행위) 
bulid폴더 안 asset-manifest.json 에 캐싱할 파일 목록에 적혀 있다. 


◆ 잘 작동하는지 확인하려면? 
build 된 걸 어딘가에 호스팅하거나
build폴더 안에 index.html를 vscode로 오픈해서 index.html 미리보기 띄운다. 
실행되면서 오른쪽 주소창에 설치버튼도 나오면 성공적.
설치버튼 강제로 띄우는 것도 구글링하면 나옴.

개발자도구 -> application 에서 pwa설정 확인 가능

cache storage에서 캐싱한 파일들을 확인할 수 있다. 
저곳에 캐싱된 파일들은 재접속했을 때 하드에서 불러와서 사용하기 때문에 오프라인에서도 잘 실행됨.


◆ 특정 파일은 캐싱이 되지 않도록 하려면?
node_modules/react-scripts/config/webpack.config.js
injectManifest 부분에 정규식을 이용해서 캐싱하고 싶지 않은 파일을 넣어준다. 

예시)index.html을 캐싱하고 싶지 않다?
/inext\.html/ 이런식으로 추가.

PWA는 구글 앱스토어에 올릴 수 있는 apk 파일로 변환할 수도 있다 (PWAbuilder이용)