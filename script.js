
const senhaCorreta = "mimadinha";

function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === senhaCorreta) {
    document.getElementById("senha-container").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
    escreverMensagem();
  } else {
    document.getElementById("mensagem-erro").innerText = "Senha incorreta!";
  }
}

const texto = `Amor, isso aqui é apenas uma parte do que posso fazer por você, usando minhas habilidades ksksk. Eu sou completamente apaixonado por cada detalhe seu. 💗\n— Com amor, Brian`;
let i = 0;

function escreverMensagem() {
  const el = document.getElementById("mensagem");
  if (i < texto.length) {
    el.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escreverMensagem, 50);
  }
}
