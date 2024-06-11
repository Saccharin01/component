const getUserInfo = ()=>{
  return {
    name: "조우식",
    age : 30,
    job : "개발자",
  };
};
// ? 모듈 1 : Base Data


const formComponent = (action, method)=>{
  const userInfo = getUserInfo();
  return`<form action="${action}" method="${method}">
    <label for="name">이름:</label>
    <input type="text" name="name" id="name" value="${userInfo.name}" autocomplete = on required>
    <label for="age">나이:</label>
    <input type="number" id="age" name="age" value="${userInfo.age}" required>
    <label for="job">설명:</label>
    <input type="text" id="job" name="job" value="${userInfo.job}" required>
    <button type="submit">제출</button>
  </form>`;
};
// ? 모듈 2 :  html Template : 마이그레이션 필요함
// todo html Template에 위의 컴포넌트가 들어갈 수 있나?

const App = (formAction, formMethod)=>{
  return `<h1>함수의 리턴은</h1>
  <h2>사람의 머리를 맑게 해준다.</h2>
  ${formComponent(formAction,formMethod)}`
}
// ? 모듈 3  : 모듈 2의 마이그레이션 작업의 기본 비전으로 보임


const renderApp = (formAction,formMethod)=>{
  const appDiv = document.getElementById('root');
  appDiv.innerHTML = App(formAction, formMethod);
}
document.addEventListener('DOMContentLoaded', ()=>{
  renderApp("/submit", "post");
});
// ? 컴포넌트 콜링 파트 : 실질적으로 js에 들어가는 코드는 위의 한 블록 + 모듈 콜링
