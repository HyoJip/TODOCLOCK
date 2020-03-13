const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    username = document.querySelector(".username"),
    formLabel = form.querySelector("label");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function handleFocus() {
    formLabel.className = FADE_CN;
}

function askFormName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    username.classList.add(SHOWING_CN);
    username.innerHTML = `Hello, ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askFormName();
    } else {
        paintGreeting(currentUser)
    }
}

function init(){
    loadName();
    input.addEventListener("focus", handleFocus);
}

init();