
const guardar = document.getElementById("buttonText"); 

guardar.addEventListener("click", function(e){

e.preventDefault();

let texto = document.getElementById("inputText").value;

localStorage.setItem("texto", texto);

window.location.href = "data.html";


});



