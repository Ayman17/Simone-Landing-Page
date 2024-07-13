const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "#000";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.width = "100%";

  } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("navbar").style.backgroundColor = "";
    document.getElementById("navbar").style.position = "";
  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor = "";
    document.getElementById("navbar").style.position = "";
  }
}