# Hello Node Project
## Nodejs를 사용하여 웹 어플리케이션을 생성하기
1. workspace / nodejs 폴더생성
2. nodejs 폴더에서 express 프레임워크 사용하여 프로젝트생성
3. cd Hello_Node : 프로젝트 폴더로 이동
4. npm install : dependency download
  - package.json 파일에 설정된 dependency들을 다운로드하여 node_modules 폴더에 저장 
5. 프로젝트시작
    가. npm start : 기본시작하기
    나. nodemon : 개발환경에서 파일이 변경(수정)하면 자동으로 서버를 재 시작하는 tool을 사용하기

## nodejs의 view 설정
1. nodejs의 탄생시점에서는 jade라는 view를 사용했다
2. 2.x로 버전업이 되면서 이름이 pug로 변경
3. npm install pug : view 단 도구 설치
4. views폴더의 파일들 *.pug로 이름변경
5. app.js로 가서 jade를 pug로 고치기