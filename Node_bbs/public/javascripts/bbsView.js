$(function () {
  // class가 view-btn인 버튼이 클릭되면
  $("button.view-btn").click(function () {
    let text = $(this).text(); //클릭된 버튼의 text 문자열을 참조하여

    let id = $(this).data("id");
    // jquery버전이 낮은경우 data()함수가 작동 안될때도 있다
    // let id =$(this).attr("data-id") 안되면 이 구버전으로

    // 문자열에 따라 각각 버튼의 역할수행하도록한다
    if (text == "본문수정") {
      document.location.href = "/bbs/update/" + id;
    } else if (text == "삭제") {
      if (confirm("정말 삭제할까요?")) {
        // 삭제할때는 replace함수를 쓴다
        // 삭제가 완료된 후 브라우저의 뒤로가기버튼 눌렀을 때
        // 이전에 이미 삭제된 데이터가 다시 보이는 것을 방지하기위해
        document.location.replace("/bbs/delete/" + id);
      }
    } else if (text == "목록으로") {
      document.location.href = "/bbs/list";
    }
  });
});
