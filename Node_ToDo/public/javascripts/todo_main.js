/*
바닐라 JS 코딩
Jquery등 front 라이브러리, 프레임워크
*/
function btn_click() {
  //alert("버튼이 클릭됨");

  let todo = document.getElementById("todo").value;
  //alert(todo);
}

function main_title_click() {
  let text = document.getElementById("main_title").innerText;
  alert(text);
}
// dom이 없으면 나머지 코드가 무조건 실행되어 많은 오류범함
document.addEventListener("DOMContentLoaded", function () {
  let todo = document.getElementById("todo");
  //todo.value = "반갑습니다";

  //   document.getElementById("todo").value = "반갑습니다";

  // tag에 id값 지정했을 때 나타나는 코드

  // $("#btn-save") 와 같은 코드임
  // js의 쿼리선택자
  // document.querySelector() : id가 지정된 태그를 선택할 때 =결과1개
  // document.querySelector("#id값")
  // 태그와 클래스 사용할 때 조건에 맞으면 첫번째 element만 가져올 수 있다

  // document.querySelectorAll() : class가 지정된 태그를 선택할 때=결과가 배열로 나타남
  // document.querySelectorAll("tag이름")
  // document.querySelectorAll(".class값")

  document.querySelector("#btn-save").addEventListener("click", function () {
    // 만약 html문서내에 같은 태그가 1개만 있거나
    // 같은 클래스가 지정된 태그가 1개만 있을 경우
    // 쿼리셀렉터() 사용해서 조회할 수 있다
    let todo_input = document.querySelector("input")[0];

    // 객체.value : input box일 경우 에만 사용가능한 속성
    // input box에 사용자가 문자열을 입력하면 입력한 내용이 value에 담긴다
    // 객체.value 값을 todo_value라는 변수에 옮겨담기
    let todo_value = todo_input.value;

    if (todo_value === "") {
      alert("할일 반드시 입력ㅎh!");

      // input tag모두 읽어서 배열로 처리하는 방법
      document.querySelectorAll("input")[0].focus();

      //정확히 필요한 input 을 select하여 처리하는방법(추천)
      document
        .querySelector("section.todo_main form input[name='todo']")
        .focus();
      return false;
    }
    if (confirm("저장할까요?")) {
      //화면에 form이 1개뿐
      // 만약 화면에 여러개의 form이 있으면 id를 부여 select하는 것이좋다
      // 입력한 데이터를 서버로 전송하라
      document.querySelector("form").submit();
    }
  });

  /* document.getElementById("btn-save").addEventListener("click", function () {
    // alert(todo.value);

    let todo_value = todo.value;
    if (todo_value == "") {
      alert("하고싶은일 내용은 반드시 입력하세요");
      todo.focus();
      return;
    }

    if (confirm("저장할까요?")) {
      // 서버로 데이터전송하라
      document.getElementsByTagName("form")[0].submit();
    }

    //id가 지정되지 않았을 때
    // tag이름으로 찾을 경우는 같은이름의 tag가 여러개 있을 수 있기때문에
    // 무조건 배열로 값이 추출된다
    // 태그이름으로 getElements를 수행한다음에는 배열요소를 지정하여
    // 어떤 태그를 선택할 지 지정을 해주어야 한다.
    /*let btn_save = document.getElementsByTagName("button")[0];
    btn_save.addEventListener("click", function () {
      let inputs = document.getElementsByTagName("input");
      let todo_input = inputs[0];
      let todo_value = todo.value;

      if (todo_value === "") {
        alert("할일은 반드시 입력해라");
        document.getElementsByName("todo")[0].focus();
        return false;
      }

      if (confirm("저장할까요")) {
        document.getElementsByName("form")[0].submit();
      }
      alert("todo_value");
    });
  */
});
//});
