const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username)
  paintGreetings(username);
  
  //greeting.innerText = "Hello " + username; //이 코드와 아래 코드는 같은 기능이다.//
  //greeting.innerText = `Hello ${username}`;//위 코드와 같은 기능이지만, 반드시 ``(백틱) 이 기호로 시작해야한다.//
  g//reeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //show the form
} else {
  paintGreetings(savedUsername);
   //show the greetings
}



      //() = information about the event that just happened//

