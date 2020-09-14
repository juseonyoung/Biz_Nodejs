/*
Router 만드는 절차

//express의 routing기능을 활용하기 위해
// express 프레임워크에서 지원하는 routing 기능을사용하여
// 클라이언트의 mapping을 처리하기
// 1. express import
*/
var express = require("express");
// 2. express로부터 라우터 선언
var router = express.Router();

// 클라이언트의 request method
// requestMethod=GET선언한 함수
// function(req,res) 함수는 함수인데 이름이 없는 함수
// 함수라는 선언만 있고 이름이 없음
// 클라이언트에서 /로 요청하면 처리할 코드를 포함하는 곳
//call back 함수라고 한다
// url에 의해 호출되는 mapping
router.get("/", function(req,res) {
   // res.send("home GET mappig")
   res.render("div");
});

// form 의 submit에 의해 호출되는 mapping
router.post("/", function(req,res) {
    res.send("home POST mappig")
});
//router.put()
//router.delete()

// 현재 이파일에서 설정한 router 객체를 다른 js파일에서 import하여
// 사용하도록 선언함
module.exports =router;
