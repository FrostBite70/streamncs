/*
const mediaScreen = () => {
  var imgsize = document.querySelector('.imgsize')
  var box = document.querySelector('.box')
  window.innerWidth < 450
    imgsize.style.height = '120px';
	box.style.height = '140px';
}
*/

$(window).scroll(function(){
    $(".bgbot").css("top", Math.max(0, 391 - $(this).scrollTop()));
});

var hid = document.querySelector('.hid');
var navbtn = document.querySelector('.navbtn');
var navbtn1 = document.querySelector('.navbtn1');

let home = document.getElementById('home');
let artists = document.getElementById('artists');
let about = document.getElementById('about');
let contact = document.getElementById('contact');

var spinIn = document.querySelector('.spinIn');
var spinOut = document.querySelector('.spinOut');

navbtn.addEventListener('click', () => {
  setTimeout(() => {
    if (contact) { contact.style.padding = '0px 15px'; contact.style.opacity = '0'; }
  }, 0);

  setTimeout(() => {
    if (about) { about.style.padding = '0px 15px'; about.style.opacity = '0'; }
  }, 100);

  setTimeout(() => {
    if (artists) { artists.style.padding = '0px 15px'; artists.style.opacity = '0'; }
    if (navbtn) navbtn.style.backgroundColor = '#323232';
  }, 200);

  setTimeout(() => {
    if (home) { home.style.padding = '0px 15px'; home.style.opacity = '0'; }
    if (spinIn) spinIn.style.transform = 'rotate(-180deg)';
  }, 300);

  setTimeout(() => {
    if (navbtn) navbtn.style.backgroundColor = '#111111';
  }, 400);

  setTimeout(() => {
    if (navbtn) navbtn.style.display = 'none';
    if (navbtn1) navbtn1.style.display = 'block';
    if (spinIn) spinIn.style.transform = 'rotate(0deg)';
    if (hid) hid.style.display = 'none';
  }, 700);
});

navbtn1.addEventListener('click', () => {
  setTimeout(() => {
    if (hid) hid.style.display = 'block';
    if (spinOut) spinOut.style.marginTop = '1px';
  }, 0);

  setTimeout(() => {
    if (spinOut) spinOut.style.transform = 'rotate(0deg)';
    if (home) { home.style.padding = '0px 50px'; home.style.opacity = '1'; }
  }, 100);

  setTimeout(() => {
    if (artists) { artists.style.padding = '0px 50px'; artists.style.opacity = '1'; }
  }, 200);

  setTimeout(() => {
    if (about) { about.style.padding = '0px 50px'; about.style.opacity = '1'; }
    if (navbtn1) navbtn1.style.backgroundColor = '#323232';
  }, 300);

  setTimeout(() => {
    if (contact) { contact.style.padding = '0px 50px'; contact.style.opacity = '1'; }
  }, 400);

  setTimeout(() => {
    if (navbtn1) navbtn1.style.backgroundColor = '#111111';
  }, 500);

  setTimeout(() => {
    if (navbtn) navbtn.style.display = 'block';
    if (navbtn1) navbtn1.style.display = 'none';
    if (spinOut) { spinOut.style.transform = 'rotate(-180deg)'; spinOut.style.marginTop = '-4px'; }
  }, 700);
});

var closebtn = document.querySelector('.closebtn');
var hidbtn = document.querySelector('.hidbtn');
var sharebox = document.querySelector('.shareBox');

hidbtn.addEventListener('click', () => {
  setTimeout(() => {
    if (sharebox) Object.assign(sharebox.style, { display: "block", transform: "translateX(20px)", opacity: "0" });
    if (closebtn) Object.assign(closebtn.style, { display: "block" });
  }, 1);

  setTimeout(() => {
    if (sharebox) Object.assign(sharebox.style, { transform: "translateX(0px)", opacity: "1" });
    if (hidbtn) Object.assign(hidbtn.style, { display: "none" });
  }, 250);

  setTimeout(() => {
    if (sharebox) Object.assign(sharebox.style, { transform: "translateX(0px)", opacity: "1" });
  }, 900);
});

closebtn.addEventListener('click', () => {
  setTimeout(() => {
    if (sharebox) Object.assign(sharebox.style, { display: "block", transform: "translateX(0px)", opacity: "1" });
  }, 1);

  setTimeout(() => {
    if (sharebox) Object.assign(sharebox.style, { transform: "translateX(20px)", opacity: "0", display: "block" });
    if (hidbtn) Object.assign(hidbtn.style, { display: "block" });
  }, 250);

  setTimeout(() => {
    if (sharebox) Object.assign(sharebox.style, { display: "none", transform: "translateX(0px)", opacity: "1" });
    if (closebtn) Object.assign(closebtn.style, { display: "none" });
  }, 900);
});

var copybtn = document.querySelector('.copybtn');
var shareInputElement = document.getElementById('shareText');

if (copybtn && shareInputElement) {
  copybtn.addEventListener('click', function(event) {
    event.preventDefault();
    shareInputElement.select();
    document.execCommand("copy");
  });
}

const nextbtns = document.querySelectorAll('.next');
const backbtns = document.querySelectorAll('.back');
var wid = window.screen.width;

for (let nxt of nextbtns) {
  nxt.addEventListener("click", () => {
    const con = nxt.getAttribute("data-con");
    const container = document.querySelector(`#${con}`);
    
    if (container) {
      const sampleBox = container.querySelector('.boxes');
      if (sampleBox) {
        const boxWidth = sampleBox.getBoundingClientRect().width;
        const styles = window.getComputedStyle(sampleBox);
        const marginRight = parseFloat(styles.marginRight) || 0;
        const marginLeft = parseFloat(styles.marginLeft) || 0;

        const dynamicStep = (boxWidth + marginRight + marginLeft) * 4;
        container.scrollLeft += dynamicStep;
      } else {
        const fallbackTarget = nxt.getAttribute("data-scroll");
        container.scrollLeft += parseInt(fallbackTarget, 10);
      }
    }
  });
}

for (let bck of backbtns) {
  bck.addEventListener("click", () => {
    const con = bck.getAttribute("data-con");
    const container = document.querySelector(`#${con}`);
    
    if (container) {
      const sampleBox = container.querySelector('.boxes');
      if (sampleBox) {
        const boxWidth = sampleBox.getBoundingClientRect().width;
        const styles = window.getComputedStyle(sampleBox);
        const marginRight = parseFloat(styles.marginRight) || 0;
        const marginLeft = parseFloat(styles.marginLeft) || 0;
        
        const dynamicStep = (boxWidth + marginRight + marginLeft) * 4;
        container.scrollLeft -= dynamicStep;
      } else {
        const fallbackTarget = bck.getAttribute("data-scroll");
        container.scrollLeft -= parseInt(fallbackTarget, 10);
      }
    }
  });
}

function search() {
  let searchbar = document.getElementById('searchbar');
  if (!searchbar) return;
  
  let currentSearchInput = searchbar.value.toLowerCase();
  let x = document.getElementsByClassName('searchRow');
  let h = document.querySelector('.homerow');
  let blr = document.querySelector('.bgblur');
  let vid = document.querySelector('.bgvid');
 
  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(currentSearchInput)) {
      x[i].style.opacity = "0";
      x[i].style.transform = "translateY(-10px)";
    }
    else {
      x[i].style.opacity = ".2";
      x[i].style.transform = "translateY(-20px)";
      if (h) { h.style.transform = "translateY(-10px)"; h.style.opacity = ".2"; }
      if (blr) { blr.style.transform = "translateY(-10px)"; blr.style.opacity = ".2"; }
      if (vid) { vid.style.transform = "translateY(-10px)"; vid.style.opacity = ".2"; }
    }
  }
  
  let fps = setTimeout(() => {
    for (let i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(currentSearchInput)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.opacity = "1";
        x[i].style.display = "list-item";
        x[i].style.transform = "translateY(0)";
        if (h) { h.style.transform = "translateY(0px)"; h.style.opacity = "1"; }
        if (blr) { blr.style.transform = "translateY(0px)"; blr.style.opacity = ".5"; }
        if (vid) { vid.style.transform = "translateY(0px)"; vid.style.opacity = "1"; }
     }
    }
  }, 500);
}

function activeEffect(element) {
  if (!element) return;
  element.classList.add('effect-active');
  
  setTimeout(() => {
    element.classList.remove('effect-active');
  }, 1100); 
}
