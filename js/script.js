const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const btn1 = document.getElementById('sidebar-menu-btn');
const sidebar = document.getElementById('sidebar-menu');
const desktop = document.getElementById('desktop-menu');
const para1 = document.getElementById('para1');
const para3 = document.getElementById('para3');
const para4 = document.getElementById('para4');
const para5 = document.getElementById('para5');
const para6 = document.getElementById('para6');
const para7 = document.getElementById('para7');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
btn1.addEventListener('click', sidebarnavToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function sidebarnavToggle() {
  btn1.classList.toggle('close');
  sidebar.classList.toggle('hide-menu');
  para1.classList.toggle('expand');
  para3.classList.toggle('expand');
  para4.classList.toggle('expand');
  para5.classList.toggle('expand');
  para6.classList.toggle('expand');
  para7.classList.toggle('expand');
}

function scrollPage() {
  const scrollPos = window.scrollY;
  console.log(scrollPos); //--to display the y-axis scroll position

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }

  var prevScrollpos = window.scrollY;
  window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if ((prevScrollpos < 100 ) || (prevScrollpos < currentScrollPos)) {
      document.getElementById("main-header").style.top = "0";
    } else {
      document.getElementById("main-header").style.top = "-130px";
      menu.classList.toggle('show-mobile-only');
    }
    prevScrollpos = currentScrollPos;
  } 
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}
