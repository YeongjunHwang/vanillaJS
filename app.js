const loginInput = document.querySelector("#login-form input"); //html 태그인 input
const loginButton = document.querySelector("#login-form button"); //html 태그인 button

function onLoginBtnClick() {
    console.log(loginInput.value);
}

loginButton.addEventListener("click",onLoginBtnClick)