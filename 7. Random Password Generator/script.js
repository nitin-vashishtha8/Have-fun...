const passwordBox = document.getElementById("password");
const button = document.getElementsByClassName('gtn')[0]; // Get the first element with the class 'gtn'

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^*()_{}[]-=?~";

const allChars = [...upperCase, ...lowerCase, ...num, ...symbol];

function createPassword() {
  let password = '';

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < 8) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
}

button.addEventListener('click', () => {
  const password = createPassword();
  passwordBox.value = password;
});