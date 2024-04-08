/*
const mediaScreen = () => {
  var imgsize = document.querySelector('.imgsize')
  var box = document.querySelector('.box')
  window.innerWidth < 450
    imgsize.style.height = '120px';
	box.style.height = '140px';
}
*/
function size(phone) {
  let imgsize = document.getElementsByClassName('.imgsize')
  let box = document.querySelector('.box')
  if (phone.matches) {
	imgsize.style.height = '120px';
	box.style.height = '140px';
  } else {
	imgsize.style.height = '165px';
	box.style.height = '200px';
  }
}
var phone = window.matchMedia("(max-width: 600px)")
size(phone);
phone.addEventListener("change", function() {
  size(phone);
});

$(window).scroll(function(){
    $(".bgbot").css("top", Math.max(0, 391 - $(this).scrollTop()));
});

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
var hidbtn = document.querySelector('.hidbtn');
var sharebox = document.querySelector('.shareBox');

hidbtn.addEventListener('click', () => {
  let fps = setTimeout(hidbtn.onclick = function () {
	var transform = "translateX(20px)";
	var opacity = "0";
	var display = "block";
	Object.assign(sharebox.style, {display});
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
	Object.assign(closebtn.style, {display});
  }, 1)
})
hidbtn.addEventListener('click', () => {
  let fps = setTimeout(hidbtn.onclick = function () {
	var transform = "translateX(0px)";
	var opacity = "1";
	var display = "none";
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
	Object.assign(hidbtn.style, {display});
  }, 250)
})
hidbtn.addEventListener('click', () => {
  let fps = setTimeout(hidbtn.onclick = function () {
	var opacity = "1";
	var transform = "translateX(0px)";
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
  }, 900)
})

/*
hidbtn.onclick = function () {
  var display = "block";
  Object.assign(sharebox.style, {display});
  Object.assign(closebtn.style, {display});
};
*/
/*
var closeShare = true;

function closeShare() {
  let closeShare = document.querySelector('.closebtn')
  if (closeShare == true) {
    sharebox.style.animation = "shareSlideFadeIn 1s forwards";
	closeShare = false;
  } else if (closeShare == false) {
	sharebox.style.animation = "shareSlideFadeOut 1s";
	closeShare = true;
  }
}
*/

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
	var display = "block";
	Object.assign(sharebox.style, {transform});
	Object.assign(sharebox.style, {opacity});
	Object.assign(hidbtn.style, {display});
  }, 250)
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
  }, 900)
})

var copybtn = document.querySelector('.copybtn')
var input = document.getElementById('shareText')

copybtn.addEventListener('click', function(event) {
  event.preventDefault();
  input.select();
  document.execCommand("copy");
})

const nextbtns = document.querySelectorAll('.next')
const backbtns = document.querySelectorAll('.back')

for (let nxt of nextbtns) {
	nxt.addEventListener("click", () => {
	  const con = nxt.getAttribute("data-con");
	  const target = nxt.getAttribute("data-scroll");
	  document.querySelector(`#${con}`).scrollLeft += parseInt(target, 10);
	});
}

for (let bck of backbtns) {
	bck.addEventListener("click", () => {
	  const con = bck.getAttribute("data-con");
	  const target = bck.getAttribute("data-scroll");
	  document.querySelector(`#${con}`).scrollLeft -= parseInt(target, 10);
	});
}

function search() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('searchRow');
  let h = document.querySelector('.homerow');
  let blr = document.querySelector('.bgblur');
  let vid = document.querySelector('.bgvid');
 
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.opacity = "0";
	  x[i].style.transform = "translateY(-10px)";
    }
    else {
      x[i].style.opacity = ".2";
	  x[i].style.transform = "translateY(-20px)";
	  h.style.transform = "translateY(-10px)";
	  h.style.opacity = ".2";
	  blr.style.transform = "translateY(-10px)";
	  blr.style.opacity = ".2";
	  vid.style.transform = "translateY(-10px)";
	  vid.style.opacity = ".2";
    }
  }
  let fps = setTimeout(() => {
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
		x[i].style.opacity = "1";
        x[i].style.display = "list-item";
		x[i].style.transform = "translateY(0)";
		h.style.transform = "translateY(0px)";
		h.style.opacity = "1";
		blr.style.transform = "translateY(0px)";
	    blr.style.opacity = ".5";
	    vid.style.transform = "translateY(0px)";
	    vid.style.opacity = "1";
     }
    }
  }, 500)
}
