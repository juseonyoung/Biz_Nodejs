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
  res.json(req.body); //json형태로 보내는 게 더 좋음
});

module.exports = router;
