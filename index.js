function readFile(filePath, callback) {
    fetch(window.location.href + filePath)
        .then((res) => res.text())
        .then((text) => {
            callback(text);
        });
}

function getQuizzes(callback) {
    readFile('quizzes.md', (text) => {
        quizzes = text.split('\n');
        callback(quizzes);
    });
}

function getQuiz(quiz, callback) {
    readFile(quiz, (text) => {
        let questions = parseQuiz(text);
        callback(questions);
    });
}

function parseAnsweredQuiz(text) {
    return parseQuiz(text, 'quiz');
}

function parseUnansweredQuiz(text) {
    return parseQuiz(text, 'toquiz');
}

function parseQuiz(test, type = 'quiz') {
    let lines = text.split('\n');
    let questions = [];
    let inQuestion = false;
    let currentQuestion = '';
    let currentTitle = '';
    for(let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('> [!' + type +']-')) {
            inQuestion = true;
            currentTitle = lines[i].substring(9,lines[i].length).trim();
        } else if(inQuestion) {
            if(lines[i].startsWith('>')) {
                currentQuestion += lines[i].substring(1,lines[i].length).trim() + '\n';
            } else {
                inQuestion = false;
                currentQuestion = '';
                currentTitle = '';
                questions.push(new Question(currentTitle, currentQuestion));
            }
        }
    }
    return questions;
}

function renderMarkdown(text) {
    let container = document.createElement('div');
    container.innerHTML = marked.parse(text);
    return container;
}


class Question {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

function createQuizSelection(quizzes) {
    main.innerHTML = '';
    let quizList = document.createElement('ul');
    quizList.className = 'quiz-list';
    quizzes.forEach((quiz) => {
        let quizItem = document.createElement('li');
        quizItem.className = 'quiz-item';
        quizItem.textContent = quiz;
        quizItem.addEventListener('click', () => {
            createQuiz(quiz);
        });
        quizList.appendChild(quizItem);
    });
    main.appendChild(quizList);
}

function createQuiz(quiz) {
    main.innerHTML = '';
    questions = getQuiz(quiz);
    let quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    questions.forEach((question) => {
        let questionElement = document.createElement('div');
        questionElement.className = 'question';
        quizContainer.appendChild(questionElement);

        let title = renderMarkdown(question.question);
        title.className = 'question-title';
        questionElement.appendChild(title);

        let answer = renderMarkdown(question.answer);
        answer.className = 'question-answer';
        questionElement.appendChild(answer);

        let showAnswerButton = document.createElement('button');
        showAnswerButton.textContent = 'Show Answer';
        showAnswerButton.addEventListener('click', () => {
            answer.classList.toggle('hidden');
        });
        questionElement.appendChild(showAnswerButton);
    });
    main.appendChild(quizContainer);
    let backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
        createQuizSelection(quizzes);
    });
}

let main = document.querySelector('main');

function init() {
    getQuizzes(createQuizSelection);
}

document.addEventListener('DOMContentLoaded', init);