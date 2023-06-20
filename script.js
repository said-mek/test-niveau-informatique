var currentQuestion = 0;
var score = 0;
var errorMsg = document.getElementById("error-msg");
var answerContainer = document.getElementById("answer-container");
var answerFeedback = document.getElementById("answer-feedback");
var correctAnswerSpan = document.getElementById("correct-answer");

var questions = [
  {
    question: "Qu'est-ce que HTML?",
    options: [
      "A. HyperText Markup Language",
      "B. High-level Machine Language",
      "C. HotMail"
    ],
    answer: "A"
  },
  {
    question: "Qu'est-ce que CSS?",
    options: [
      "A. Cascading Style Sheets",
      "B. Computer Security System",
      "C. Content Sharing Service"
    ],
    answer: "A"
  },
  {
    question: "Qu'est-ce que JavaScript?",
    options: [
      "A. A programming language for creating interactive websites",
      "B. A type of coffee",
      "C. Just a made-up word"
    ],
    answer: "A"
  }
];

function showQuestion() {
  var questionContainer = document.getElementById("question-container");
  var question = questions[currentQuestion];

  questionContainer.innerHTML = `
    <div class="question">
      <p>${question.question}</p>
      <div class="options">
        ${question.options.map(option => `
          <label><input type="radio" name="q${currentQuestion}" value="${option.charAt(0).toLowerCase()}"> ${option}</label><br>
        `).join('')}
      </div>
    </div>
  `;

  errorMsg.innerHTML = "";
  answerContainer.style.display = "none";
  answerFeedback.innerText = "";
}

function nextQuestion() {
  var selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);

  if (selectedOption) {
    if (selectedOption.value === questions[currentQuestion].answer.toLowerCase()) {
      score += 1;
    } else {
      showCorrectAnswer();
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      var quizContainer = document.getElementById("quiz");
      quizContainer.style.display = "none";

      var resultDiv = document.getElementById("result");
      var scoreParagraph = document.getElementById("score");
      scoreParagraph.innerText = "Votre score : " + score + "/" + questions.length;
      resultDiv.style.display = "block";
    }
  } else {
    errorMsg.innerHTML = "Veuillez sélectionner une réponse.";
  }
}

function showCorrectAnswer() {
  answerContainer.style.display = "block";
  answerFeedback.innerText = "Mauvaise réponse.";
  correctAnswerSpan.innerText = questions[currentQuestion].answer;
}

function calculateScore() {
  // ... (le code existant pour calculer le score)
}

// Afficher la première question au chargement de la page
showQuestion();

// Variables globales
var timerElement = document.getElementById('timer');
var timerInterval;
var timeLimit = 120; // Temps limite en secondes

// Fonction pour démarrer le compte à rebours
function startTimer() {
  var timeRemaining = timeLimit;
  timerElement.textContent = timeRemaining;

  // Mettre à jour le temps restant chaque seconde
  timerInterval = setInterval(function() {
    timeRemaining--;
    timerElement.textContent = timeRemaining;

    // Si le temps est écoulé, arrêter le compte à rebours
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = 'Temps écoulé';
      // Ajoutez ici le code pour gérer l'action lorsque le temps est écoulé
    }
  }, 1000);
}

// Appeler la fonction pour démarrer le compte à rebours
startTimer();
