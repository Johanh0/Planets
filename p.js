var getData = function (){
  var earth = 9.8;
  var weight = document.getElementById("peso").value;
  var planet = document.getElementById("planets").value;
  var final = weight * planet / earth;
  final = parseInt(final);
  alert("Your final weight is " + final + " 🚀");
}
