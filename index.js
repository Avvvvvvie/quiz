function readFile(path, callback) {
    fetch(window.location.href + encodeURI(path))
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
    return getQuiz(path, callback, 'info');
}

function getUnansweredQuiz(path, callback) {
    return getQuiz(path, callback, 'question');
}

function parseQuiz(text, type) {
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
                currentAnswer += lines[i].substring(1,lines[i].length) + '\n';
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
    md = markdownit();
    markdownItAsciimath(md, {});
    markdownItMermaid(md);
    markdownItImgSize(md);
    markdownitCheckbox(md)
    return md.render(text);
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createQuiz(quiz) {
    main.innerHTML = '';
    getAnsweredQuiz(quiz, (questions) => {
        shuffleArray(questions);

        let quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-container';

        let questionElement = document.createElement('div');
        questionElement.classList.add('question');

        let title = document.createElement('div');
        title.className = 'question-title';
        questionElement.appendChild(title);

        let answer = document.createElement('div');
        answer.className = 'question-answer';
        answer.classList.add('hidden');
        questionElement.appendChild(answer);

        quizContainer.appendChild(questionElement);

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

        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => {
            createQuizSelection(quizzes);
        });
        buttons.appendChild(backButton);

        main.appendChild(quizContainer);

        nextButton.addEventListener('click', () => {
            showAnswerButton.classList.remove('hidden');
            nextButton.classList.add('hidden');
            showNextQuestion();
        });

        showAnswerButton.addEventListener('click', () => {
            showAnswerButton.classList.add('hidden');
            nextButton.classList.remove('hidden');
            answer.classList.remove('hidden');
        });

        function showNextQuestion() {
            if(questions.length === 0) {
                title.innerHTML = "Done";
                showAnswerButton.classList.add('hidden');
                answer.innerHTML = "Good job :)";
                return;
            }
            question = questions[questions.length - 1];
            questions.pop();
            answer.classList.add('hidden');
            title.innerHTML = renderMarkdown(question.title);
            answer.innerHTML = renderMarkdown(question.answer);
        }
        showNextQuestion();
    });
}

let main;

function init() {
    main = document.querySelector('main');
    getQuizzes(createQuizSelection);
}

document.addEventListener('DOMContentLoaded', init);