// const loginForm = document.querySelector("div#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// localStorage.clear();

function onLoginBtnClick(){

    const value = loginInput.value;
    console.log(value);

    if(value === ""){
        alert("Plaese write your name");
    }else if(value.length > 15){
        alert("Your name is too long");
    }else{
        console.log("hello", value);
    }

    console.log("click");
    console.log("hello", loginInput.value);
    console.dir(loginInput);

}


function paintGreetings(){
    // greeting.innerText = "Hello " + username;
    // 파이썬의fstring이랑 같은거임
    const username = localStorage.getItem(USERNAME_KEY);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(event){
    event.preventDefault();

    // loginForm.classList.ADD(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // loginForm.classList.add("hidden");
     
    paintGreetings();

    console.log(username);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings();
}


// loginButton.addEventListener("click", onLoginBtnClick)