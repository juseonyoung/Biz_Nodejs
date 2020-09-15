var mongoose = require("mongoose");


/*
Nosql인 몽고DB를 RDBMS처럼 사용하기 위해서 schema를 생성
테이블구조를 생성하는 형태
VO객체로서 역할을 수행하게 된다. 

*/
var schema = mongoose.Schema;

// bbsVO 생성하기!
//json 데이터구조로 bbsVO의 스키마를 생성하기 위한 객체선언
var bbsVO = new schema({
    // 테이블의 칼럼이름 : 데이터 type
    b_date : String,
    b_time : String,
    b_title : String,
    b_write : String,
    b_text : String,
    b_count: Number,
});

// mongoose의 model()함수 사용하여 테이블만들고 그 구조를 bbsVO에 선언된 형태로 만들겠다
// model을 다른 모듈에서 사용할수있도록 export한다
// tbl_bbs라는 이름으로 테이블 만들겠다 라고 선언
// 실제 mongodb에 생성된 테이블은 복수형으로 이름이 선언된다
module.exports =mongoose.model("tbl_bbs",bbsVO);
