import formControl1 from "./formControl.js";

function getUserName() {
  const username = localStorage.getItem("userName");
  const userNameElement = document.getElementById("username");
  const getNameSection = document.getElementById("getName");
  const choiceSection = document.getElementById("greeting");

  if (username) {
    getNameSection.style.display = "none";
    choiceSection.style.display = "block";
    userNameElement.textContent = username;
  }
}

getUserName();

window.setName = () => {
  const nameInput = document.getElementById("usernameField");
  localStorage.setItem("userName", nameInput.value);
  const getNameSection = document.getElementById("getName");
  const choiceSection = document.getElementById("greeting");

  getNameSection.style.display = "none";
  choiceSection.style.display = "block";
};

// const num1 = new NumberWork(24);
// num1.displayNumber();
// num1.pozOrNeg();

const numberInput = document.getElementById("calculate");
localStorage.setItem("lastName", "Ngobese");
let form1;

window.start = (event) => {
  event.preventDefault();
  const num = numberInput.value;
  const email = document.getElementById("email").value;
  form1 = new formControl1(num, email);
  form1.submithandler();
};

window.onYes = () => {
  showForm();
};

window.onNo = () => {
  hideForm();
};

const showForm = () => {
  document.getElementById("form").style.display = "block";
  document.getElementById("greeting").style.display = "none";
};
const hideForm = () => {
  document.getElementById("greeting").style.display = "none";
  document.getElementById("feedback").style.display = "block";
};
