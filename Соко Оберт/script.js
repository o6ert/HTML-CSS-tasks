var modal = document.getElementById("modal");
var btn = document.getElementById("registerBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "close";
}

span.onclick = function() {
  modal.style.display = "close";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "close";
  }
}