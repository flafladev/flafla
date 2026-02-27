// ===== FUNDO ESPACIAL PREMIUM =====

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 600; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5
    });
}

function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let star of stars) {
        star.y += star.speed;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }

    requestAnimationFrame(animate);
}

animate();


// ===== QUIZ EXECUTIVO =====

const questions = [
  {
    question: "Onde foi nosso primeiro encontro?",
    answers: ["Cinema", "Restaurante", "Praça"],
    correct: 1,
    reward: "🎁 Presente desbloqueado: Jantar exclusivo."
  },
  {
    question: "Qual música marcou nossa história?",
    answers: ["Música A", "Música B", "Nossa Música"],
    correct: 2,
    reward: "🎁 Presente desbloqueado: Noite especial."
  },
  {
    question: "Qual meu sentimento por você?",
    answers: ["Grande", "Gigante", "Infinito"],
    correct: 2,
    reward: "🎁 Presente final: Uma surpresa inesquecível."
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const rewardEl = document.getElementById("reward");

function startQuiz() {
    document.querySelector(".hero").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    rewardEl.textContent = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        rewardEl.textContent = questions[currentQuestion].reward;
        currentQuestion++;

        if (currentQuestion < questions.length) {
            setTimeout(loadQuestion, 2000);
        } else {
            setTimeout(() => {
                questionEl.textContent = "💎 Experiência concluída.";
                answersEl.innerHTML = "";
                rewardEl.textContent = "Eu escolho você. Sempre.";
            }, 2000);
        }
    } else {
        rewardEl.textContent = "Resposta incorreta. Tente novamente.";
    }
}