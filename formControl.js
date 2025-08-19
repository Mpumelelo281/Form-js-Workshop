

export default class formControl1 {
  constructor(num1, email) {
    this.num1 = num1;
    this.email = email;
    let isValid = document.getElementById("email");
    // this.getName();
  }

  submithandler() {
    let errorMessage = document.getElementById("error-message");
    errorMessage.style.visibility = "hidden";
    if (this.checkIsNotNumber(this.num1)) {
      errorMessage.style.visibility = "visible";
    } else {
      alert("The number is " + this.num1);
    }
    if (!this.isValidEmail(this.email)) {
      alert("The email is not valid!");
    } else {
      alert("Email is valid.");
    }
  }

//   getName() {
//     console.log(localStorage.getItem("lastname"));
//   }

  checkIsNotNumber(number) {
    return isNaN(number) || !number;
  }

  isValidEmail(email) {
    const regex = /^[^s@]+@[^s@]+.[^s@]{2,}$/;
    console.log(email);
    return regex.test(email);
  }

  
}
