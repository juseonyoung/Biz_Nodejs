const mongoose = require("mongoose");
const { model } = require("../../Node_bbs/models/bbsModel");

var schema = mongoose.Schema;

var todoVO = new schema({
  t_check: Boolean,
  t_text: String,
  t_data: String,
  t_time: String,
});

module.exports = mongoose.model("tbl_todo", todoVO);
