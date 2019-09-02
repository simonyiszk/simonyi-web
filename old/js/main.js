const hamburger = document.getElementsByClassName("hamburger")[0]
const headerlistwrapper = document.getElementsByClassName("headerlistwrapper")[0]
hamburger.onclick = function() {
  if (headerlistwrapper.classList.contains('open')) {
    headerlistwrapper.classList.remove('open');
  } else {
    headerlistwrapper.classList.add('open');
  }
};