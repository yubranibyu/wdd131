// ========== NAVIGATION TOGGLE ==========
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// ========== FOOTER DATE ==========
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModifiedSpan = document.getElementById('last-modified');
lastModifiedSpan.textContent = document.lastModified;

// ========== VOCABULARY ==========
const vocabulary = {
  portuguese: [
    { word: "Olá", translation: "Hello", category: "greetings" },
    { word: "Bom dia", translation: "Good morning", category: "greetings" },
    { word: "Boa noite", translation: "Good night", category: "greetings" },
    { word: "Tchau", translation: "Goodbye", category: "greetings" },
    { word: "Como vai?", translation: "How are you?", category: "greetings" },

    { word: "Água", translation: "Water", category: "food" },
    { word: "Pão", translation: "Bread", category: "food" },
    { word: "Maçã", translation: "Apple", category: "food" },
    { word: "Carne", translation: "Meat", category: "food" },

    { word: "Segunda-feira", translation: "Monday", category: "days" },
    { word: "Domingo", translation: "Sunday", category: "days" },

    { word: "Um", translation: "One", category: "numbers" },
    { word: "Dois", translation: "Two", category: "numbers" },
    { word: "Três", translation: "Three", category: "numbers" },

    { word: "Gato", translation: "Cat", category: "animals" },
    { word: "Cachorro", translation: "Dog", category: "animals" },
    { word: "Pássaro", translation: "Bird", category: "animals" }
  ],
  spanish: [
    { word: "Hola", translation: "Hello", category: "greetings" },
    { word: "Buenos días", translation: "Good morning", category: "greetings" },
    { word: "Buenas noches", translation: "Good night", category: "greetings" },
    { word: "Adiós", translation: "Goodbye", category: "greetings" },
    { word: "¿Cómo estás?", translation: "How are you?", category: "greetings" },

    { word: "Agua", translation: "Water", category: "food" },
    { word: "Pan", translation: "Bread", category: "food" },
    { word: "Manzana", translation: "Apple", category: "food" },
    { word: "Carne", translation: "Meat", category: "food" },

    { word: "Lunes", translation: "Monday", category: "days" },
    { word: "Domingo", translation: "Sunday", category: "days" },

    { word: "Uno", translation: "One", category: "numbers" },
    { word: "Dos", translation: "Two", category: "numbers" },
    { word: "Tres", translation: "Three", category: "numbers" },

    { word: "Gato", translation: "Cat", category: "animals" },
    { word: "Perro", translation: "Dog", category: "animals" },
    { word: "Pájaro", translation: "Bird", category: "animals" }
  ],
  english: [
    { word: "Hello", translation: "Olá / Hola", category: "greetings" },
    { word: "Good morning", translation: "Bom dia / Buenos días", category: "greetings" },
    { word: "Good night", translation: "Boa noite / Buenas noches", category: "greetings" },
    { word: "Goodbye", translation: "Tchau / Adiós", category: "greetings" },
    { word: "How are you?", translation: "Como vai? / ¿Cómo estás?", category: "greetings" },

    { word: "Water", translation: "Água / Agua", category: "food" },
    { word: "Bread", translation: "Pão / Pan", category: "food" },
    { word: "Apple", translation: "Maçã / Manzana", category: "food" },
    { word: "Meat", translation: "Carne / Carne", category: "food" },

    { word: "Monday", translation: "Segunda-feira / Lunes", category: "days" },
    { word: "Sunday", translation: "Domingo / Domingo", category: "days" },

    { word: "One", translation: "Um / Uno", category: "numbers" },
    { word: "Two", translation: "Dois / Dos", category: "numbers" },
    { word: "Three", translation: "Três / Tres", category: "numbers" },

    { word: "Cat", translation: "Gato / Gato", category: "animals" },
    { word: "Dog", translation: "Cachorro / Perro", category: "animals" },
    { word: "Bird", translation: "Pássaro / Pájaro", category: "animals" }
  ]
};

// ========== FLASHCARD RENDERING ==========
const languageSelect = document.getElementById("language");
const categorySelect = document.getElementById("category");
const cardContainer = document.getElementById("card-container");

function renderFlashcards(language) {
  if (!cardContainer) return;

  const selectedCategory = categorySelect.value;
  cardContainer.innerHTML = "";

  const filteredWords = vocabulary[language].filter((item) => {
    return selectedCategory === "all" || item.category === selectedCategory;
  });

  filteredWords.forEach((item) => {
    const card = document.createElement("div");
    card.className = "flashcard";
    card.innerHTML = `
      <div class="card-front">${item.word}</div>
      <div class="card-back">${item.translation}</div>
    `;
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
    cardContainer.appendChild(card);
  });
}

if (languageSelect && categorySelect && cardContainer) {
  renderFlashcards(languageSelect.value);

  languageSelect.addEventListener("change", () => {
    renderFlashcards(languageSelect.value);
  });

  categorySelect.addEventListener("change", () => {
    renderFlashcards(languageSelect.value);
  });
}

// ========== QUIZ SECTION ==========
const quizLanguageSelect = document.getElementById("quiz-language");
const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-question");

let currentQuestion = null;
let currentOptions = [];

function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateQuizQuestion(language) {
  const wordList = vocabulary[language];
  if (!wordList || wordList.length < 4) return;

  currentQuestion = wordList[Math.floor(Math.random() * wordList.length)];
  currentOptions = getRandomItems(wordList.filter(w => w.word !== currentQuestion.word), 3);
  currentOptions.push(currentQuestion);
  currentOptions = currentOptions.sort(() => 0.5 - Math.random());

  displayQuiz(currentQuestion, currentOptions);
}

function displayQuiz(question, options) {
  quizContainer.innerHTML = `
    <h2>What is the meaning of: <strong>${question.word}</strong>?</h2>
    <ul class="quiz-options">
      ${options.map(opt => `
        <li><button class="quiz-option" data-answer="${opt.translation}">${opt.translation}</button></li>
      `).join('')}
    </ul>
    <p id="quiz-feedback"></p>
  `;

  document.querySelectorAll(".quiz-option").forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.answer;
      const feedback = document.getElementById("quiz-feedback");

      if (selected === currentQuestion.translation) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = `❌ Incorrect. The correct answer was: ${currentQuestion.translation}`;
        feedback.style.color = "red";
      }

      document.querySelectorAll(".quiz-option").forEach(btn => {
        btn.disabled = true;
      });
    });
  });
}

// Initialize quiz on page load or language change
if (quizLanguageSelect && quizContainer && nextButton) {
  quizLanguageSelect.addEventListener("change", () => {
    generateQuizQuestion(quizLanguageSelect.value);
  });

  nextButton.addEventListener("click", () => {
    generateQuizQuestion(quizLanguageSelect.value);
  });

  generateQuizQuestion(quizLanguageSelect.value);
}

