
window.onload = function() {

  for (var i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    document.getElementById('days').appendChild(option);
  }

 
  for (var i = 1; i <= 12; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    document.getElementById('months').appendChild(option);
  }

  
  for (var i = 1960; i <= 2025; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    document.getElementById('years').appendChild(option);
  }
};


let correctName = "mohamed";
let correctEmail = "mohamed@example.com";
let correctPassword = "12345";
let correctData = [correctName, correctEmail, correctPassword];


function loginForm() {
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let year = Number(document.getElementById("years").value);
  let month = Number(document.getElementById("months").value);
  let day = Number(document.getElementById("days").value);

  let userData = [name, email, password];

  let isCorrect = true;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i] !== correctData[i]) {
      isCorrect = false;
      break;
    }
  }

  let totalDays = (2025 - year) * 365 + (12 - month) * 30 + (31 - day);

  if (isCorrect) {
    alert("✅ تسجيل الدخول ناجح! عمرك التقريبي بالأيام: " + totalDays + " يوم");
  } else {
    alert("❌ الاسم أو الإيميل أو الباسورد غلط!");
  }

  return false;
}
