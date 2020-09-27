const express = require("express");
const router = express.Router(); // 상수로..
const moment = require("moment");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// client에서 데이터를 보낼 때 3가지 방법이 있다
/*
1. query String 방식이용 - 주소창 뒤에 ?변수=변수값으로 보내는 형식
  http://localhost:3000/?변수=변수값&변수2=변수값
  let 변수1 = req.query.변수1 -->값 뽑아낼때

2. Path Varriable방식- 주소창에 /값1/값2/값3
  router.get("/:변수1/:변수2")
  let 변수1 = req.params.변수1

3. form에 input에 값을 담아서 post로 보내는 방법
  let 변수1 = req.body.변수1
  let 변수2 = req.body.변수2

  form(method="POST")
    input(name="변수1")
    input(name="변수2")

  let 변수1= req.body.변수1
    
*/
router.post("/", function (req, res) {
  let todo = req.body.todo;

  let to_date = moment().format("YYYY-MM-DD");
  let to_time = moment().format("HH:mm:ss");

  req.body.to_date = to_date;
  req.body.to_time = to_time;

  //res.send(todo); 웹브라우저에서 보고싶으면 send보다는
  //res.json(req.body); //json형태로 보내는 게 더 좋음
  res.render("index", { todo_data: req.body });
});

// get("insert"): 입력받기위해 클라이언트에게 입력 form을 보여주는 urll용도

router.get("/insert", function (req, res) {
  res.render("write");
});

// post ("insert"): form 에서 입력받은 내용 서버로 전송했을 떄
// 수신하여 처리할 용도의 url
// write.pug의 form에 액션을 지정하지 않아도 된다.
router.post("/insert", function (req, res) {
  res.redirect("/");
});
router.get("/update", function (req, res) {
  res.render("write");
});

router.post("/update", function (req, res) {
  // 데이터 수정 코드
  res.redirect("/");
});

module.exports = router;
