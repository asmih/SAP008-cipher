import cipher from './cipher.js';

function cifrar(event) {
  event.preventDefault();
  const texto = document.getElementById("getText").value.toUpperCase();
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById("codeText").value = cipher.encode(offset, texto);

}
const cifrarButton = document.getElementById("cifrar");
cifrarButton.addEventListener("click",(event) => cifrar(event));


function decifrar(event) {
  event.preventDefault();
  const texto = document.getElementById("codeText").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById("getText").value = cipher.decode(offset, texto);

}

const decifrarButton = document.getElementById("decifrar");
decifrarButton.addEventListener("click", (event) => decifrar(event));
