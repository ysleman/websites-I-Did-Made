const scrollButton = document.querySelector(".scroll-top");
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});



function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
