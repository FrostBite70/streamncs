var hid = document.querySelector('.hid');
var navbtn = document.querySelector('.navbtn');
var navbtn1 = document.querySelector('.navbtn1');
let home = document.getElementById('#home');
let artists = document.getElementById('#artists');
let about = document.getElementById('#about');
let contact = document.getElementById('#contact');
var spinIn = document.querySelector('.spinIn');
var spinOut = document.querySelector('.spinOut');

navbtn.addEventListener('click', () => {
  let fps = setTimeout(navbtn.onclick = function () {
    this.contact.style.padding = '0px 15px';
    this.contact.style.opacity = '0';
  }, 0)
})
navbtn.addEventListener('click', () => {
  let fps = setTimeout(navbtn.onclick = function () {
    this.about.style.padding = '0px 15px';
    this.about.style.opacity = '0';
  }, 100)
})
navbtn.addEventListener('click', () => {
  let fps = setTimeout(navbtn.onclick = function () {
    this.artists.style.padding = '0px 15px';
    this.artists.style.opacity = '0';
	this.navbtn.style.backgroundColor = '#323232';
  }, 200)
})
navbtn.addEventListener('click', () => {
  let fps = setTimeout(navbtn.onclick = function () {
    this.home.style.padding = '0px 15px';
    this.home.style.opacity = '0';
	this.spinIn.style.transform = 'rotate(-180deg)';
  }, 300)
})
navbtn.addEventListener('click', () => {
  let fps = setTimeout(navbtn.onclick = function () {
    this.navbtn.style.backgroundColor = '#111111';
  }, 400)
})
navbtn.addEventListener('click', () => {
  let fps = setTimeout(navbtn.onclick = function () {
    this.navbtn.style.display = 'none';
	this.navbtn1.style.display = 'block';
	this.spinIn.style.transform = 'rotate(0deg)';
	this.hid.style.display = 'none';
  }, 700)
})

navbtn1.addEventListener('click', () => {
  let fps = setTimeout(navbtn1.onclick = function () {
	this.hid.style.display = 'block';
	this.spinOut.style.marginTop = '1px'
  }, 0)
})
navbtn1.addEventListener('click', () => {
  let fps = setTimeout(navbtn1.onclick = function () {
	this.spinOut.style.transform = 'rotate(0deg)'
    this.home.style.padding = '0px 50px';
    this.home.style.opacity = '1';
  }, 100)
})
navbtn1.addEventListener('click', () => {
  let fps = setTimeout(navbtn1.onclick = function () {
    this.artists.style.padding = '0px 50px';
    this.artists.style.opacity = '1';
  }, 200)
})
navbtn1.addEventListener('click', () => {
  let fps = setTimeout(navbtn1.onclick = function () {
    this.about.style.padding = '0px 50px';
    this.about.style.opacity = '1';
	this.navbtn1.style.backgroundColor = '#323232';
  }, 300)
})
navbtn1.addEventListener('click', () => {
  let fps = setTimeout(navbtn1.onclick = function () {
    this.contact.style.padding = '0px 50px';
    this.contact.style.opacity = '1';
  }, 400)
})
navbtn1.addEventListener('click', () => {
  let fps = setTimeout(navbtn1.onclick = function () {
    this.navbtn1.style.backgroundColor = '#111111';
  }, 500)
})
navbtn1.addEventListener('click', () => {
  let fps = setTimeout(navbtn1.onclick = function () {
	this.navbtn.style.display = 'block';
	this.navbtn1.style.display = 'none';
	this.spinOut.style.transform = 'rotate(-180deg)';
	this.spinOut.style.marginTop = '-4px'
  }, 700)
})

var closebtn = document.querySelector('.closebtn');
var sharebtn = document.querySelector('.sharebtn');
var sharebox = document.querySelector('.shareBox');

sharebtn.addEventListener('click', () => {
  let fps = setTimeout(sharebtn.onclick = function () {
	var transform = "translateX(20px)";
	var opacity = "0";
	var display = "block";
	Object.assign(sharebox.style, {display});
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
	Object.assign(closebtn.style, {display});
  }, 1)
})
sharebtn.addEventListener('click', () => {
  let fps = setTimeout(sharebtn.onclick = function () {
	var opacity = "1";
	var display = "none";
	Object.assign(sharebtn.style, {opacity});
	Object.assign(sharebtn.style, {display});
  }, 1)
})
sharebtn.addEventListener('click', () => {
  let fps = setTimeout(sharebtn.onclick = function () {
	var display = "block";
	Object.assign(sharebtn.style, {display});
  }, 2)
})
sharebtn.addEventListener('click', () => {
  let fps = setTimeout(sharebtn.onclick = function () {
	var opacity = "0";
	Object.assign(sharebtn.style, {opacity});
  }, 250)
})
sharebtn.addEventListener('click', () => {
  let fps = setTimeout(sharebtn.onclick = function () {
	var transform = "translateX(0px)";
	var opacity = "1";
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
  }, 250)
})
sharebtn.addEventListener('click', () => {
  let fps = setTimeout(sharebtn.onclick = function () {
	var opacity = "1"
	var transform = "translateX(0px)";
	var display = "none";
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
	Object.assign(sharebtn.style, {display});
  }, 900)
})

closebtn.addEventListener('click', () => {
  let fps = setTimeout(closebtn.onclick = function () {
	var transform = "translateX(0px)";
	var opacity = "1";
	var display = "none";
	Object.assign(sharebox.style, {display});
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
  }, 1)
})
closebtn.addEventListener('click', () => {
  let fps = setTimeout(closebtn.onclick = function () {
	var display = "block";
	Object.assign(sharebox.style, {display});
  }, 1)
})
closebtn.addEventListener('click', () => {
  let fps = setTimeout(closebtn.onclick = function () {
	var transform = "translateX(20px)";
	var opacity = "0";
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
  }, 250)
})
closebtn.addEventListener('click', () => {
  let fps = setTimeout(closebtn.onclick = function () {
	var display = "block";
	var opacity = "0";
	Object.assign(sharebtn.style, {opacity});
	Object.assign(sharebtn.style, {display});
  }, 700)
})
closebtn.addEventListener('click', () => {
  let fps = setTimeout(closebtn.onclick = function () {
	var opacity = "1"
	var display = "none";
	var transform = "translateX(0px)";
	Object.assign(sharebox.style, {display});
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
	Object.assign(closebtn.style, {display});
	Object.assign(sharebtn.style, {opacity});
  }, 900)
})

var copybtn = document.querySelector('.copybtn')
var input = document.getElementById('shareText')

copybtn.addEventListener('click', function(event) {
	event.preventDefault();
	input.select();
	document.execCommand("copy");
})