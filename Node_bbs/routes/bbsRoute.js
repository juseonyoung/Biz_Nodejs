var express = require("express");
var router = express.Router();

//현재까지 사용중인 프로그래밍 언어에서 날짜, 시간과 관련하여 수없이 많은 이슈들이
// 있다. JS(node) date라는 내장 클래스가 있다.
// 이 내장클래스도 이슈가 있어서 실제로 DB와 연동하여 사용할 때 문제들을 일으킨다
// 그래서 내장 date 클래스가 있음에도 불구하고 nodejs에서는 moment라는 외부모듈을 거의 표준적으로
// 사용하여 날짜와 시간을 관리한다
// 데이트 클래스를 날짜 숫자 형태 문자열로 변환하는 일을 수행하고
// 날짜와 관련된 여러 연산 수행하는 기능이 내장되어있음
const moment = require("moment");

// bbsmodel에 선언된 스키마를 가져와서 bbsVO 모델생성
var bbsVO = require("../models/bbsModel");

// localhost:3000/bbs/list url 접근했을 때
router.get("/list", function (req, res) {
  //bbaVO model통해서 데이터를 모두 읽어오고(find( 조건문))
  // find()가 정상적으로 수행되면 .then(function(bbsList){})
  bbsVO.find().then(function (bbsList) {
    // bbsList.pug 파일 읽어서 rendering하도록 설정
    // rendering할 때 bbsList파일을 modelattribute형식으로 담아전송
    // 현재버전인 14.x버전에서는 {bbsList} 라고 표현하면
    // 실제로 전달되는 방식은 {bbsList : bbsList}
    // 변수이름을 같이 해서 실어 보내는 방식( 이건 구버전)
    res.render("bbsList", { bbsList }); // bbsList :bbsList
  });
});

// host:3000/bbs/write url요청했을 때! 작성하기 눌러서 뜨는곳
router.get("/write", function (req, res) {
  //bbswrite.pug파일을 렌더링하여 요청전송
  // insert와 update를 write.pug 파일로 공통으로 사용하기 위해
  // insert수행할 때 비어있는 vo를 만들어 bbsWrite에 전달해주어야한다
  let data = new bbsVO();
  res.render("bbsWrite", { bbsVO: data });
});

// post는 폼에 데이터입력하고 전송버튼 눌렀을 때 호출되는 url
// form, input에 입력된 데이터를 담아서 보내면 그 데이터를
// 수신하는 함수이다.
router.post("/write", function (req, res) {
  let b_title = req.body.b_title;
  let b_write = req.body.b_write;
  let b_text = req.body.b_text;

  // req.body 객체에 input 의 name속성에 설정된 변수이름으로 자동으로 담겨서 전송된다
  // req.body 객체에 date time write count변수를 생성하고 각각의 변수에
  // 값을 세팅하라
  req.body.b_date = moment(new Date()).format("YYYY-MM-DD");
  req.body.b_time = moment(new Date()).format("HH:mm:ss");
  // req.body.b_write = '주선영';
  req.body.b_count = 0;

  // form 에 전송받은 데이터를 통째로 bbsVO객체로 생성
  // data에는 폼에서 입력하여 전송한 데이터(작성자,제목,내용)와 서버에서
  // 임의로 추가한 데이터(날짜,시간,카운트) 데이터를 모두 모아서
  // 하나의 vo객체로 생성을 하고 DB crud와 관련된 함수들을 함께 추가하여
  // 객체를 생성해준다.
  let data = new bbsVO(req.body);

  data
    .save() // 방금 생성한 bbsVO(data)에 저장된 데이터를 몽고디비테이블에 insert
    .then(function (bbsVO) {
      // insert 성공하면
      // res.json(bbsVO) //client에게 데이터보여라
      // 저장완료되면 리스트화면으로 점프하도록
      res.redirect("/bbs/list");
    })
    .catch(function (error) {
      //insert 실패하면?
      console.error(error); //오류메시지 보여라
    });

  //res.write(b_title);
  //res.write(b_write);
  //res.end(b_text);
  //res.json(req.body);
});

// :3000/bbs/view/id값 요청하면 url요청에 응답
// id값 : bbs의 각 라인(item)의 pk값이 된다
// pk값을 가지고 tbl_bbs에서 1개의 아이템 값을 추출하여 detail
// view에 보여주기
router.get("/view/:id", function (req, res) {
  let id = req.params.id;

  // table의 아이디값이 리스트에서 전달받은 id값과 일치하는 아이템이 있는지
  // 검사하는 코드
  bbsVO
    // pk(_id)값이 id와 일치하는 데이터가 있는지 찾아라
    // 그 데이터가 있으면 그 값을 result에 담아
    // bbsview.pug를 렌더링할때 bbsVO이름으로 전달하여 넣어라
    .findOne({ _id: id })
    .then(function (result) {
      //pk값과 일치하는 item이 있으면 그 결과를 result에 담음
      //res.json(result);
      res.render("bbsView", { bbsVO: result });
    })
    .catch(function (error) {
      console.error(error);
    });

  //res.send(id);
});

/*
데이터를 삭제할 때 mongoDB 3.x이하에서는 remove(조건문)함수사용
조건문없이 remove()를 실행하면 모든 테이블의 모든 데이터를 삭제해버림
mongoDB 4.x 이상에서는 이걸 방지하기위해 deleteOne() deleteMany()라는 함수만듦
one(조건문)은 조건에 일치하는 데이터 중 첫번째 한개만삭제
many(조건)은 조건에 맞으면 데이터 모두삭제

*/
router.get("/delete/:id", function (req, res) {
  let id = req.params.id;
  bbsVO
    // mongoDB의 item(1개)삭제
    //.deleteOne({ _id: id })
    .findOneAndDelete({ _id: id })
    .then(function (result) {
      //일반적인 crud프로젝트는
      // 삭제 동작이 완료되면 list보기로 redirect를 수행함
      //res.json(result);
      res.redirect("/bbs/list");
    })

    .catch(function (error) {
      console.error(error);
    });
});

// 전달받은 pk값으로 한개의 아이템을 조회하고 write 폼에 보여주고
// 데이터를 입력한 다음 저장을 하면 post("/update")로 보내서 데이터를 수정하도록 수행함

router.get("/update/:id", function (req, res) {
  let id = req.params.id;
  bbsVO
    .findOne({ _id: id }) //앞에는 vo에 담긴거 뒤에 id는 웹에서 넘겨온것
    .then(function (result) {
      res.render("bbsWrite", { bbsVO: result });
    });
});

// 한개의 아이템 조회하여 write form 으로 보낸 후 데이터 받았을때
// req.body에는 id가 사라진 상태로 전달된다
// 하지만 update수행할 때 id값을 url에 전달하여 보냈기때문에
// method ="post",action="/bbs/update/id값" 형태의 url이 만들어지고
// post method는 params에 아이디값을 받아서 수신하는 결과가된다
// params로 부터 아이디를 추출하여 강제로 req.body에 추가해준다
router.post("/update/:id", function (req, res) {
  let id = req.params.id;
  req.body._id = id;

  bbsVO
    .updateOne(
      { _id: id }, //where 조건문
      {
        //input box에 입력한 데이터만 변경하도록 수행하는 코드
        // set에 해당하는 방법
        // 주의해야할 코드!
        // $set {req.body}
        // update 수행하는데 실제로 form에서 전달된 데이터 외에
        // 나머지 데이터는 모두 삭제해버리는 문제가 있다
        b_title: req.body.b_title,
        b_write: req.body.b_write,
        b_text: req.body.b_text,
      }
    )
    .then(function (result) {
      //res.json(result);
      res.redirect("/bbs/list");
    });
});

module.exports = router;
