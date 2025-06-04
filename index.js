let url = 'https://avvvvvvie.github.io/quiz/';
let blob = 'https://github.com/Avvvvvvie/quiz/blob/main/'

function fetchHeader(url, wch) {
    try {
        var req=new XMLHttpRequest();
        req.open("HEAD", url, false);
        req.send(null);
        if(req.status== 200){
            return req.getResponseHeader(wch);
        }
        else return false;
    } catch(er) {
        return er.message;
    }
}

function readFile(path, callback) {
    fetch(path)
        .then((res) => res.text())
        .then((text) => {
            callback(text);
        });
}

class Quiz {
    constructor(name) {
        this.name = name
        this.path = absoluteURI(name);
    }
}

function absoluteURI(path) {
    return url + encodeURI(path);
}

function blobURI(path) {
    return url + encodeURI(path);
}

function getQuizzes(callback) {
    readFile(absoluteURI('quizzes.md'), (text) => {
        quizzes = [];
        for(quiz of text.split('\n')) {
            quizzes.push(new Quiz(quiz.trim()));
        }
        callback(quizzes);
    });
}

function getQuiz(quiz, callback) {
    readFile(quiz.path, (text) => {
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
        if (lines[i].startsWith('### ')) {
            if(inQuestion) {
                if(currentAnswer.trim() === '') {
                    unansweredQuestions.push(new Question(currentTitle, ''));
                } else {
                    questions.push(new Question(currentTitle, currentAnswer));
                }
                currentAnswer = '';
                currentTitle = '';
            }
            inQuestion = true;
            currentTitle = lines[i];
        } else if(inQuestion) {
            currentAnswer += lines[i] + '\n';
        }
    }
    if(inQuestion) {
        if(currentAnswer.trim() === '') {
            unansweredQuestions.push(new Question(currentTitle, currentAnswer));
        } else {
            questions.push(new Question(currentTitle, currentAnswer));
        }
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

    readFile(absoluteURI('README.md'), (text) => {
        let title1 = document.createElement('h3');
        title1.innerHTML = "Info";
        main.appendChild(title1);

        let info = document.createElement('div');
        info.innerHTML = renderMarkdown(text);
        info.className = 'info';
        main.appendChild(info);

        let title2 = document.createElement('h3');
        title2.innerHTML = "Quizzes";
        main.appendChild(title2);

        let quizList = document.createElement('ul');
        quizList.className = 'quiz-list';
        quizzes.forEach((quiz) => {
            let quizItem = document.createElement('li');
            quizItem.className = 'quiz-item';
            quizItem.textContent = quiz.name;
            quizItem.addEventListener('click', () => {
                loadQuiz(quiz);
            });
            quizList.appendChild(quizItem);
        });
        main.appendChild(quizList);
    });
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

    let title = document.createElement('div');
    title.className = 'question-title';
    quizContainer.appendChild(title);

    let answer = document.createElement('div');
    answer.className = 'question-answer';
    answer.classList.add('hidden');
    quizContainer.appendChild(answer);

    let buttons = document.createElement('div');
    buttons.className = 'buttons';
    quizContainer.appendChild(buttons);

    let showAnswerButton = document.createElement('button');
    showAnswerButton.textContent = 'Show Answer';
    buttons.appendChild(showAnswerButton);

    let nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('hidden');
    buttons.appendChild(nextButton);

    let callbackButton;
    if (callbackMessage) {
        callbackButton = document.createElement('button');
        callbackButton.textContent = callbackMessage;
        callbackButton.classList.add('hidden');
        callbackButton.addEventListener('click', callback);
        buttons.appendChild(callbackButton);
    }

    let backButton = document.createElement('button');
    backButton.textContent = 'Quit';
    backButton.addEventListener('click', () => {
        createQuizSelection(quizzes);
    });
    buttons.appendChild(backButton);

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

    let progress = document.createElement('div');
    progress.className = 'progress';
    quizContainer.appendChild(progress);

    main.appendChild(quizContainer);

    let currentQuestion = -1;

    showNextQuestion = () => {
        currentQuestion++;
        if(currentQuestion === questions.length) {
            title.innerHTML = renderMarkdown('### You are done');
            showAnswerButton.classList.add('hidden');
            answer.innerHTML = "Good job :)";
            answer.classList.remove('hidden');
            progress.classList.add('hidden');
            if(callbackMessage) {
                callbackButton.classList.remove('hidden');
            }
            return;
        }
        question = questions[currentQuestion];
        title.innerHTML = renderMarkdown(question.title);
        if(question.answer) {
            answer.classList.add('hidden');
            answer.innerHTML = renderMarkdown(question.answer);
        } else {
            showAnswerButton.classList.add('hidden');
            nextButton.classList.remove('hidden');
        }
        if(currentQuestion === questions.length - 1) {
            nextButton.innerHTML = 'Finish';
        }
        progress.innerHTML = `${currentQuestion + 1} / ${questions.length}`;
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
