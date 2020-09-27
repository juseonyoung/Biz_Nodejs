var todo_list = [];
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn-save").addEventListener("click", function () {
    // let todo_input = document.querySelector("input"); // 가장먼저 선택되는 input태그
    let todo_input = document.querySelector(
      "section.todo_main form input[name='todo']"
    );
    // todo_input에 있는 값을 todo_value에 담기
    let todo_value = todo_input.value;

    if (todo_value === "") {
      alert("오늘의 할 일은?");

      todo_input.focus();

      return false;
    }
  });

  document.querySelector("#checkbox").addEventListener("click", function () {
    let todo_check = document.querySelector("#checkbox");

    if (todo_check.checked == true) {
      document.querySelector("#contents").style.textDecoration = "line-through";
      document.querySelector("#contents").style.fontStyle = "italic";
    } else {
      document.querySelector("#contents").style.textDecoration = "none";
      document.querySelector("#contents").style.fontStyle = "normal";
    }
  });

  // document.querySelector("#btn-update").addEventListener("click", function () {
  //   let todo_delete = document.querySelector("#btn-update");
  //   let delete_value = todo_delete.value;

  //   if (delete_value === "수정") {
  //     document.location.href = "/update";
  //     alert("삭제하시겠습니까?");
  //   }
  // });
});
