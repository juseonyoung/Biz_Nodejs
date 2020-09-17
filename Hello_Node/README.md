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
4. views폴더의 파일들 \*.pug로 이름변경
5. app.js로 가서 jade를 pug로 고치기

## pug view

1. 전통적인 html 코딩이 아닌 새로운 문법구조로 만드는 view파일
2. html 과 달리 tag가 열리기만 하고 닫히는 tag가 없다
3. 각 태그의 시작은 왼쪽정렬로 정확히 구조가 일치해야 한다.
4. tag에 태그를 포함할 때는 포함되는 태그의 앞에 tab을 눌러야 한다
5. pug nodejs에 의해서 transfiler(파일변환)가 되고 실제로는 html코드로 만들어져서 client에 전송된다.
6. nodejs에 설치한 pug 모듈에 의해서 파일이 변환된다.

## 2020-09-14

### MEAN Stack, MERN Stack

- 백엔드 프론트엔드 모두를 다루고 개발이 가능한 개발자를 풀스택 개발자라고한다
- Mean Stack 개발자 : 몽고디비, express, angular, nodejs
- Mern Stack 개발자 : 몽고디비, express, React, nodejs

### NodeJS + express project

- nodejs 설치 후 npm install express-generator 설치!
  express-generator는 express 프레임워크를 사용하는 웹 app의 기본 템플릿을 만들어주는 도구이다.
- express 프로젝트 : express 프레임워크를 사용하는 웹 app 생성
- npm install : express 프로젝트의 기본 dependency를 다운로드
- npm install pug : jade view 엔진을 pug로 업데이트
- npm uninstall jade
- app.js의 view 엔진을 jade에서 pug로 바꾸기
