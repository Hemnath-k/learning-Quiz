const quizData = {
    science: [
        {
            question: "What is the process by which plants make their food?",
            options: ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
            answer: "Photosynthesis"
        },
        {
            question: "Which gas is essential for photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide"
        },
        // Add more questions as needed
    ],
    mathematics: [
        {
            question: "What is the solution to the equation 2x + 3 = 7?",
            options: ["x = 2", "x = 3", "x = 4", "x = 1"],
            answer: "x = 2"
        },
        {
            question: "What is the Pythagorean theorem?",
            options: [
                "a^2 + b^2 = c^2",
                "a^2 - b^2 = c^2",
                "a^2 + b = c^2",
                "a^2 * b^2 = c^2"
            ],
            answer: "a^2 + b^2 = c^2"
        },
        // Add more questions as needed
    ],
    literature: [
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: [
                "Harper Lee",
                "Mark Twain",
                "F. Scott Fitzgerald",
                "Ernest Hemingway"
            ],
            answer: "Harper Lee"
        },
        {
            question: "What is the main theme of Shakespeare's 'Hamlet'?",
            options: ["Revenge", "Love", "War", "Friendship"],
            answer: "Revenge"
        },
        // Add more questions as needed
    ]
};

function generateQuiz() {
    const subject = document.getElementById('subject').value;
    const difficulty = document.getElementById('difficulty').value;
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questions = quizData[subject].slice(0, 10); // Get up to 10 questions
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');
        questionElement.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            ${question.options.map(option => `
                <label class="quiz-option">
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}
