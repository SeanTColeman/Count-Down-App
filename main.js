var today = new Date();
var  toggleStatus = false;
var main = document.getElementById('main');

var toggleSlideMenu = () => {
  var sideBar = document.getElementById('side-menu');
  var sideMenuItems = document.getElementById('side-list');
  var sideListItems = document.querySelectorAll('#side-list li');

  if (toggleStatus === false) {
    sideBar.style.margin = '0 0 0 0';
    sideMenuItems.style.visibility =  'visible';

    toggleStatus = true;
  } else if (toggleStatus === true) {
    // sideBar.style.width = '0px';
    sideBar.style.margin = '0 0 0 -400px'
    sideMenuItems.style.visibility =  'hidden';

    toggleStatus = false;
  }
}

var daysTillChristmas = () => {
  var christmas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() >= 11 && today.getDate() >= 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
  }
  var oneDay = 1000 * 60 * 60 * 24;
  var daysTillC = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);
  document.querySelector('.countdown').innerHTML = daysTillC;
  document.querySelector('.countdown-msg').innerHTML = 'Days until </br>Christmas!'
}

var christmasStyles = () => {
  main.style.background = 'linear-gradient(#34a65f, #0f8a5f)';
  main.style.color = 'white';
}

var christmas = () => {
  daysTillChristmas();
  christmasStyles();
}


var daysTillNewYear = () => {
  var newYear = new Date(today.getFullYear() + 1, 0, 1);
  var oneDay = 1000 * 60 * 60 * 24;
  var daysTillNewYear = Math.ceil((newYear.getTime() - today.getTime()) / oneDay);
  document.querySelector('.countdown').innerHTML = daysTillNewYear;
  document.querySelector('.countdown-msg').innerHTML = 'Days until </br>the New Year!'
}

var newYearsStyles = () => {
  main.style.background = 'linear-gradient(rgb(223, 14, 12), rgb(255, 0, 0))';
  main.style.color = 'white';
}

var newYear = () => {
  daysTillNewYear();
  newYearsStyles();
}

var daysTillThanksgiving = () => {
  var thanksgiving = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() >= 11 && today.getDate() >= 25) {
  thanksgiving.setFullYear(thanksgiving.getFullYear() + 1);
  }
  var oneDay = 1000 * 60 * 60 * 24;
  var daysTillThanksgiving = Math.ceil((thanksgiving.getTime() - today.getTime()) / oneDay);
  document.querySelector('.countdown').innerHTML = daysTillThanksgiving;
  document.querySelector('.countdown-msg').innerHTML = 'Days until </br>Thanksgiving!'
}

var thanksgivingStyles = () => {
  main.style.background = 'linear-gradient(orange, rgb(255, 130, 57))';
  main.style.color = 'black';
}

var thanksgiving = () => {
  daysTillThanksgiving();
  thanksgivingStyles();
}

var daysTillHalloween = () => {
  var halloween = new Date(today.getFullYear(), 9, 31);
  if (today.getMonth() >= 9 && today.getDate() >= 31) {
  halloween.setFullYear(halloween.getFullYear() + 1);
  }
  var oneDay = 1000 * 60 * 60 * 24;
  var daysTillHalloween = Math.ceil((halloween.getTime() - today.getTime()) / oneDay);
  document.querySelector('.countdown').innerHTML = daysTillHalloween;
  document.querySelector('.countdown-msg').innerHTML = 'Days until </br>Halloween!'
}

var halloweenStyles = () => {
  main.style.background = 'linear-gradient(rgb(255, 130, 57), black)';
  main.style.color = 'orange';
}

var halloween = () => {
  daysTillHalloween();
  halloweenStyles();
}

var daysTillIndependence = () => {
  var independence = new Date(today.getFullYear(), 6, 4);
  if (today.getMonth() >= 6 && today.getDate() >= 4) {
  independence.setFullYear(independence.getFullYear() + 1);
  }
  var oneDay = 1000 * 60 * 60 * 24;
  var daysTillJuly4 = Math.ceil((independence.getTime() - today.getTime()) / oneDay);
  document.querySelector('.countdown').innerHTML = daysTillJuly4;
  document.querySelector('.countdown-msg').innerHTML = 'Days until </br>Independence Day!'
}

var independenceDayStyles = () => {
  main.style.background = 'linear-gradient(red, white)';
  main.style.color = 'white;'
}

var independenceDay = () => {
  daysTillIndependence();
  independenceDayStyles();
}

var daysTillValentines = () => {
  var vDay = new Date(today.getFullYear(), 1, 14);
  if (today.getMonth() >= 1 && today.getDate() >= 14) {
  vDay.setFullYear(vDay.getFullYear() + 1);
  }
  var oneDay = 1000 * 60 * 60 * 24;
  var daysTillVDay = Math.ceil((vDay.getTime() - today.getTime()) / oneDay);
  document.querySelector('.countdown').innerHTML = daysTillVDay;
  document.querySelector('.countdown-msg').innerHTML = 'Days until</br>Valentines Day!'
}

var vDayStyles = () => {
  main.style.background = 'linear-gradient(red, pink)';
  main.style.color = 'white';
}

var valentinesDay = () => {
  daysTillValentines();
  vDayStyles();
}

var daysTillStPattysDay = () => {
  var stPattys = new Date(today.getFullYear(), 2, 17);
  if (today.getMonth() >= 2 && today.getDate() >= 17) {
  stPattys.setFullYear(stPattys.getFullYear() + 1);
  }
  var oneDay = 1000 * 60 * 60 * 24;
  var daysTillStPats = Math.ceil((stPattys.getTime() - today.getTime()) / oneDay);
  document.querySelector('.countdown').innerHTML = daysTillStPats;
  document.querySelector('.countdown-msg').innerHTML = 'Days until </br> St. Patricks Day!'
}

var stPattysStyles = () => {
  main.style.background = 'green';
}

var stPatricksDay = () => {
  daysTillStPattysDay();
  stPattysStyles();
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var particlesOnScreen = 245;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min, max) {
  return min = Math.random() * (max - min + 1);
};

function clientResize(ev) {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
};

window.addEventListener('resize', clientResize);

function createSnowFlake() {
  for(var i = 0; i < particlesOnScreen; i++) {
    particlesArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      opacity: Math.random(),
      speedX: random(-11, 11),
      speedY: random(7, 15),
      radius: random(0.5, 4.2),
    })
  }
};

function drawSnowFlakes(){
  for (var i = 0; i < particlesArray.length; i++) {
      var gradient = ctx.createRadialGradient(
        particlesArray[i].x,
        particlesArray[i].y,
        0,
        particlesArray[i].x,
        particlesArray[i].y,
        particlesArray[i].radius
      );

      gradient.addColorStop(0, 'rgba(255,255,255,' + particlesArray[i].opacity + ')');
      gradient.addColorStop(.8, 'rgba(210,236,242,' + particlesArray[i].opacity + ')');
      gradient.addColorStop(1, 'rgba(237,247,249,' + particlesArray[i].opacity + ')');

      ctx.beginPath();
      ctx.arc(
      particlesArray[i].x,
      particlesArray[i].y,
      particlesArray[i].radius,
      0,
      Math.PI*2,
      false
      );

      ctx.fillStyle = gradient;
      ctx.fill();
  }
};

function moveSnowFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    particlesArray[i].x += particlesArray[i].speedX;
    particlesArray[i].y += particlesArray[i].speedY;

    if (particlesArray[i].y > h) {
      particlesArray[i].x = Math.random() * w * 1.5;
      particlesArray[i].y = -50;
    }
  }
};

function updateSnowFall () {
  ctx.clearRect(0, 0, w, h);
  drawSnowFlakes();
  moveSnowFlakes();
};

setInterval(updateSnowFall, 50);
createSnowFlake();
