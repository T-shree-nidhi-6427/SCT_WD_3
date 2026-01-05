const story = document.getElementById("story");
const rules = document.getElementById("rules");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const beginBtn = document.getElementById("beginBtn");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultText = document.getElementById("resultText");
const scoreText = document.getElementById("scoreText");

const questions = [
  {
    q: "Your plane crashes in a forest. What do you do FIRST?",
    options: ["Run to find help", "Stay near the crash site", "Panic and shout", "Walk randomly"],
    correct: 1
  },
  {
    q: "Night is approaching. What is your top priority?",
    options: ["Search for food", "Build a shelter", "Explore the forest", "Sleep outside"],
    correct: 1
  },
  {
    q: "You find a river. What is the safest action?",
    options: ["Drink directly", "Ignore it", "Boil the water first", "Wash your face"],
    correct: 2
  },
  {
    q: "You hear footsteps at night. What should you do?",
    options: ["Run immediately", "Shout for help", "Stay silent and observe", "Throw stones"],
    correct: 2
  },
  {
    q: "You cut your leg badly. What’s the correct action?",
    options: ["Ignore it", "Walk despite pain", "Clean and cover the wound", "Use random leaves"],
    correct: 2
  },
  {
    q: "A wild animal appears nearby. What should you do?",
    options: ["Run fast", "Scream", "Stay calm and slowly back away", "Throw food"],
    correct: 2
  },
  {
    q: "A helicopter passes overhead. What do you do?",
    options: ["Chase it", "Hide", "Stay silent", "Use fire or visible signals"],
    correct: 3
  }
];

let current = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  story.classList.remove("active");
  rules.classList.add("active");
});

beginBtn.addEventListener("click", () => {
  rules.classList.remove("active");
  quiz.classList.add("active");
  loadQuestion();
});

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = `Q${current + 1}. ${q.q}`;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(choice) {
  if (choice === questions[current].correct) {
    score++;
  }

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.classList.remove("active");
  result.classList.add("active");

  let message = "";
  if (score >= 6) {
    message = "🏆 SURVIVOR 🏆<br>You’re rescued!";
  } else if (score >= 3) {
    message = "😬 ALMOST<br>You survived, but barely.";
  } else {
    message = "💀 GAME OVER<br>Survival needs calm thinking.";
  }

  resultText.innerHTML = message;
  scoreText.textContent = `Final Score: ${score}/7`;
}
