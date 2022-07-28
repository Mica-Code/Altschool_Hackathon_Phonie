var nowgo = document.getElementById("demo");
var clicknowggo = document.getElementById("myBtn");

clicknowggo.addEventListener("click", displayDate);

function displayDate() {
nowgo.innerHTML = Date();
}