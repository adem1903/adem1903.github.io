let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Lütfen Adını Gir!.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'STELLA' + myName;
  }
  myButton.onclick = function() {
    setUserName();
  }