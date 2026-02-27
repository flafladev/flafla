// SENHA
function verificarSenha() {
    const senhaCorreta = "09112025";
    const senhaDigitada = document.getElementById("senhaInput").value;

    if (senhaDigitada === senhaCorreta) {
        document.getElementById("telaSenha").style.display = "none";
        document.getElementById("site").classList.remove("hidden");
        iniciarTitulo();
        iniciarContador();
    } else {
        document.getElementById("erroSenha").innerText = "Senha incorreta 💔";
    }
}

// TITULO ANIMADO
function iniciarTitulo() {
    const texto = "Para a pessoa que me fex enxergar o amor sincero e verdadeiro 💍❤️";
    let i = 0;

    function digitar() {
        if (i < texto.length) {
            document.getElementById("tituloAnimado").innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, 70);
        }
    }
    digitar();
}

// CONTADOR
const dataInicio = new Date("2025-10-28");

function iniciarContador() {
    setInterval(() => {
        const agora = new Date();
        const diff = agora - dataInicio;

        const dias = Math.floor(diff / (1000*60*60*24));
        const horas = Math.floor((diff / (1000*60*60)) % 24);
        const minutos = Math.floor((diff / (1000*60)) % 60);
        const segundos = Math.floor((diff / 1000) % 60);

        document.getElementById("contador").innerHTML =
        `${dias} dias ${horas}h ${minutos}m ${segundos}s ❤️`;
    }, 1000);
}

// MUSICA
function tocarMusica() {
    document.getElementById("musica").play();
}

// BOTÃO NÃO FOGE
function fugir() {
    const btn = document.getElementById("btnNao");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
}

// RESPOSTA SIM
function respostaSim() {
    alert("Eu prometo te amar para sempre 💍❤️");
}