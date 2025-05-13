function readFile(path, callback) {
    fetch(window.location.href + path)
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

function getQuiz(path, callback, type) {
    readFile(path, (text) => {
        let questions = parseQuiz(text, type);
        callback(questions);
    });
}

function getAnsweredQuiz(path, callback) {
    return getQuiz(path, callback, 'quiz');
}

function getUnansweredQuiz(path, callback) {
    return getQuiz(path, callback, 'toquiz');
}

function parseQuiz(text, type = 'quiz') {
    let lines = text.split('\n');
    let questions = [];
    let inQuestion = false;
    let currentAnswer = '';
    let currentTitle = '';
    for(let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('> [!' + type +']-')) {
            inQuestion = true;
            currentTitle = lines[i].substring(10,lines[i].length).trim();
            currentTitle = "### " + currentTitle;
        } else if(inQuestion) {
            if(lines[i].startsWith('>')) {
                currentAnswer += lines[i].substring(1,lines[i].length).trim() + '\n';
            } else {
                inQuestion = false;
                questions.push(new Question(currentTitle, currentAnswer));
                currentAnswer = '';
                currentTitle = '';
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
    constructor(title, answer) {
        this.title = title;
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
    getAnsweredQuiz(quiz, (questions) => {
        let quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-container';
        questionElements = [];
        questions.forEach((question) => {
            let questionElement = document.createElement('div');
            questionElement.className = 'question';
            quizContainer.appendChild(questionElement);
            questionElement.classList.add('hidden');

            let title = renderMarkdown(question.title);
            title.className = 'question-title';
            questionElement.appendChild(title);

            let answer = renderMarkdown(question.answer);
            answer.className = 'question-answer';
            questionElement.appendChild(answer);

            let nextButton = document.createElement('button');
            nextButton.textContent = 'Next Question';
            nextButton.classList.add('hidden');
            nextButton.addEventListener('click', () => {
                questionElement.classList.add('hidden');
                let nextElement = questionElement.nextElementSibling;
                nextElement.classList.remove('hidden');
            });
            questionElement.appendChild(nextButton);

            let showAnswerButton = document.createElement('button');
            showAnswerButton.textContent = 'Show Answer';
            answer.classList.add('hidden');
            showAnswerButton.addEventListener('click', () => {
                answer.classList.remove('hidden');
                showAnswerButton.classList.add('hidden');
                nextButton.classList.remove('hidden');
            });
            questionElement.appendChild(showAnswerButton);

            questionElements.push(questionElement);
        });
        questionElements[0].classList.remove('hidden');
        main.appendChild(quizContainer);
        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => {
            createQuizSelection(quizzes);
        });
    });
}

let main;

function init() {
    main = document.querySelector('main');
    getQuizzes(createQuizSelection);
}

document.addEventListener('DOMContentLoaded', init);