
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/coke_can.jpg') {
      myImage.setAttribute ('src','images/coke_bottle.png');
    } else {
      myImage.setAttribute ('src','images/coke_can.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to CocaCola, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to CocaCola, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

