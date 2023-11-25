document.addEventListener("DOMContentLoaded", function() {
    const quizCompletedSound = document.getElementById("quiz-completed-sound");
    const startQuizButton = document.getElementById("start-quiz");
    const nextQuestionButtons = document.querySelectorAll(".next-question-button");
    const resultCard = document.querySelector(".result-card");
    const quizCards = document.querySelectorAll(".question-card");
    const userAnswers = [];
    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    const questions = [
        {
            image: "gerbera.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Gerberas", "Agave", "Adonis", "Ageratum"],
            correctOption: "Gerberas"
        },
        {
            image: "rose.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Aconite", "Abutilone", "Amaranth", "Rose"],
            correctOption: "Rose"
        },
        {
            image: "piony.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Alyssum", "Peonies", "Amorphophallus", "Anemone"],
            correctOption: "Peonies"
        },
        {
            image: "orchideya.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Chrysanthemum", "Amorphophallus", "Orchid", "Agave"],
            correctOption: "Orchid"
        },
        {
            image: "hrizantemy.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Rose", "Amaranth", "Chrysanthemum", "Arabis"],
            correctOption: "Chrysanthemum"
        },
        {
            image: "liliyi.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Lilies", "Adonis", "Gladiolus", "Ottawa"],
            correctOption: "Gladiolus"
        },
        {
            image: "gortenziya.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Alyssum", "Aconite", "Astrantia", "Hydrangea"],
            correctOption: "Hydrangea"
        },
        {
            image: "irisy.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Hydrangea", "Hydrangea", "Irises", "Peonies"],
            correctOption: "Irises"
        },
        {
            image: "tulpany.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Tulips", "Chrysanthemum", "Lilies", "Orchid"],
            correctOption: "Tulips"
        },
        {
            image: "gladiolus.jpg",
            title: "what kind of flower is shown in the picture?",
            options: ["Gladiolus", "Tulips", "Adonis", "Alyssum"],
            correctOption: "Gladiolus"
        },

    ];

    startQuizButton.addEventListener("click", function() {
        quizCards[currentQuestionIndex].style.display = "block";
        startQuizButton.style.display = "none";
    });

    nextQuestionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedOption = quizCards[currentQuestionIndex].querySelector("input[type=radio]:checked");
            if (selectedOption) {
                const userAnswer = selectedOption.value;
                const correctAnswer = questions[currentQuestionIndex].correctOption;

                userAnswers.push({ question: currentQuestionIndex + 1, answer: userAnswer });
                if (userAnswer === correctAnswer) {
                    correctAnswers++;
                    quizCompletedSound.play();
                }
            }

            quizCards[currentQuestionIndex].style.display = "none";
            currentQuestionIndex++;

            if (currentQuestionIndex < quizCards.length) {
                quizCards[currentQuestionIndex].style.display = "block";
            } else {
                showResults();
            }
        });
    });

    function showResults() {
        resultCard.style.display = "block";
        resultCard.querySelector("#correct-answers").textContent = correctAnswers;
        displayUserAnswers();
    }

    function displayUserAnswers() {
        const userAnswersList = document.getElementById("user-answers");
        userAnswers.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `Question ${item.question}: Your answer - ${item.answer}`;
            userAnswersList.appendChild(li);
        });
    }
    function showResults() {
        resultCard.style.display = "block";
        resultCard.querySelector("#correct-answers").textContent = correctAnswers;
        displayUserAnswers();

        
        quizCompletedSound.play();
    }

});
