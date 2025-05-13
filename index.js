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

        questionsContainer = document.createElement('div');
        questionsContainer.classList.add('questions-container');
        quizContainer.appendChild(questionsContainer);

        questions.forEach((question) => {
            let questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.classList.add('hidden');

            let title = renderMarkdown(question.title);
            title.className = 'question-title';
            questionElement.appendChild(title);

            let answer = renderMarkdown(question.answer);
            answer.className = 'question-answer';
            answer.classList.add('hidden');
            questionElement.appendChild(answer);

            questionsContainer.appendChild(questionElement);
        });

        let buttons = document.createElement('div');
        buttons.className = 'buttons';
        quizContainer.appendChild(buttons);

        let nextButton = document.createElement('button');
        nextButton.textContent = 'Next Question';
        nextButton.classList.add('hidden');
        buttons.appendChild(nextButton);

        let showAnswerButton = document.createElement('button');
        showAnswerButton.textContent = 'Show Answer';
        buttons.appendChild(showAnswerButton);

        nextButton.addEventListener('click', () => {
            for(let questionElement of questionElements) {
                if(questionElement.classList.contains('hidden')) {
                    questionElement.classList.add('hidden');

                    questionElement.nextElementSibling.classList.remove('hidden');
                    nextButton.classList.add('hidden');

                    if(questionElement.nextElementSibling.classList.contains('done')) {

                    } else {
                        showAnswerButton.classList.remove('hidden');
                    }
                    break;
                }
            }
        });


        showAnswerButton.addEventListener('click', () => {
            for(let questionElement of questionsContainer.children) {
                if(questionElement.classList.contains('hidden')) {
                    let answer = questionElement.querySelector('.question-answer')
                    answer.classList.remove('hidden');
                    nextButton.classList.remove('hidden');
                    showAnswerButton.classList.add('hidden');
                    break;
                }
            }
        });


        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => {
            createQuizSelection(quizzes);
        });
        buttons.appendChild(backButton);

        let doneElement = document.createElement('div');
        doneElement.className = 'done';
        doneElement.textContent = 'Good job :)';
        doneElement.classList.add('hidden');
        quizContainer.appendChild(doneElement);

        questionsContainer.children[0].classList.remove('hidden');
        main.appendChild(quizContainer);
    });
}

let main;

function init() {
    main = document.querySelector('main');
    getQuizzes(createQuizSelection);
}

document.addEventListener('DOMContentLoaded', init);