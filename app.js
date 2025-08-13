// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(amigo);
  document.getElementById("amigo").value = "";
  actualizarListaAmigos();
}
