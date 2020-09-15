var express = require("express");
var router = express.Router();
const moment =require("moment");

// bbsmodel에 선언된 스키마를 가져와서 bbsVO 모델생성
var bbsVO = require("../models/bbsModel");


router.get("/list",function(req,res){
    bbsVO.find().then(function(bbsList){
        res.render("bbsList",{bbsList}); // bbsList :bbsList
    });
   
});

router.get("/write",function(req,res){
    res.render('bbsWrite');
});

router.post("/write",function(req,res){
    let b_title= req.body.b_title;
    let b_write =req.body.b_write;
    let b_text =req.body.b_text;

    // req.body 객체에 date time write count변수를 생성하고 각각의 변수에
    // 값을 세팅하라
    req.body.b_date = moment(new Date()).format("YYYY-MM-DD");
    req.body.b_time = moment(new Date()).format("HH:mm:ss");
   // req.body.b_write = '주선영';
    req.body.b_count =0;

    // form 에 전송받은 데이터를 통째로 bbsVO객체로 생성
    let data = new bbsVO(req.body);


    data
    .save() // 방금 생성한 bbsVO(data)에 저장된 데이터를 몽고디비테이블에 insert
    .then(function(bbsVO) { // insert 성공하면
       // res.json(bbsVO) //client에게 데이터보여라
       // 저장완료되면 리스트화면으로 점프하도록
       res.redirect("/bbs/list");
    })
    .catch(function(error){ //insert 실패하면?
        console.error(error); //오류메시지 보여라
    });

    //res.write(b_title);
    //res.write(b_write);
    //res.end(b_text);
    //res.json(req.body);
});

module.exports =router;