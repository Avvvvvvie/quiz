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

function getQuiz(path, callback) {
    readFile(path, (text) => {
        callback(parseQuiz(text));
    });
}

function parseQuiz(text) {
    let lines = text.split('\n');
    let questions = [];
    let unansweredQuestions = [];
    let inQuestion = false;
    let currentAnswer = '';
    let currentTitle = '';
    for(let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('> [!info]-')) {
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
        } else if (lines[i].startsWith('> [!question]-')) {
            unansweredQuestions.push(new Question(currentTitle, ''));
        }
    }
    if(inQuestion) {
        questions.push(new Question(currentTitle, currentAnswer));
        currentAnswer = '';
        currentTitle = '';
    }
    return [questions, unansweredQuestions];
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
            loadQuiz(quiz);
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

function createQuiz(questions, callback, callbackMessage) {
    main.innerHTML = '';
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
    backButton.textContent = 'Quit';
    backButton.addEventListener('click', () => {
        createQuizSelection(quizzes);
    });
    buttons.appendChild(backButton);
    let callbackButton;

    if (callbackMessage) {
        callbackButton = document.createElement('button');
        callbackButton.textContent = callbackMessage;
        callbackButton.classList.add('hidden');
        callbackButton.addEventListener('click', callback);
        buttons.appendChild(callbackButton);
        callbackButton.addEventListener('click', () => {
            callback();
        });
    }

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

    main.appendChild(quizContainer);

    showNextQuestion = () => {
        if(questions.length === 0) {
            title.innerHTML = renderMarkdown('### You are done');
            showAnswerButton.classList.add('hidden');
            answer.innerHTML = "Good job :)";
            if(callbackMessage) {
                callbackButton.classList.remove('hidden');
            }
            return;
        }
        question = questions[questions.length - 1];
        questions.pop();
        title.innerHTML = renderMarkdown(question.title);
        if(question.answer) {
            answer.classList.add('hidden');
            answer.innerHTML = renderMarkdown(question.answer);
        } else {
            showAnswerButton.classList.add('hidden');
            nextButton.classList.remove('hidden');
        }
    }
    showNextQuestion();
}

function loadQuiz(quiz) {
    getQuiz(quiz, ([questions, unansweredQuestions]) => {
        if(unansweredQuestions.length) {
            createQuiz(questions, () => {
                createQuiz(unansweredQuestions)
            }, 'Continue with unanswered questions');
        } else {
            createQuiz(questions);
        }
    });
}

let main;

function init() {
    main = document.querySelector('main');
    getQuizzes(createQuizSelection);
}

document.addEventListener('DOMContentLoaded', init);
