
//function skrink first navbar onscroll
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav1").style.padding = "5px";
  
  } else {
    document.getElementById("nav1").style.padding = "25px";
  
  }
}
//function open & close buttons on mobile

function open() {
  let burger = document.getElementById("burger");
  burger.onclick = function () {
    document.getElementById("sidebar").style.display = "inline-block";
    document.getElementById("burger").style.display = "none";
    document.getElementById("close").style.display = "inline";

  } 
}
 open();
function close() {
  let close = document.getElementById("close");
  close.onclick = function () {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("burger").style.display = "inline";
    document.getElementById("close").style.display = "none";
  }
}
close();


  
  
