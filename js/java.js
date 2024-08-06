document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
  };

window.addEventListener('scroll', function() {
  var header = document.getElementById('mainHeader');
  if (window.scrollY > 0) {
      header.classList.add('fixed-top','nav-fixed','transition-Top');
  } else {
      header.classList.remove('fixed-top','nav-fixed','transition-Top');
  }
});