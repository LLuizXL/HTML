alerta = () => {
  alert("Olá, sou um alerta! apesar de não alertar nada.");
};

const enviar = () => {
  let nome = document.getElementById("nome").value;

  document.getElementById(
    "resposta"
  ).innerHTML = `<h2>Olá ${nome}, formulário enviado com sucesso! </h2>`;

  if (nome == "") {
    alert("Bem vindo!");
  } else {
    alert(`Olá ${nome}, bem vindo!!!!`);
  }
};
