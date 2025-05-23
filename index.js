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
        if (lines[i].startsWith('> [!info]')) {
            inQuestion = true;
            currentTitle = getAnsweredTitle(lines[i]);
        } else if(inQuestion) {
            if(lines[i].startsWith('>')) {
                currentAnswer += getAnswerLine(lines[i]);
            } else {
                if(currentAnswer.length === 0) {
                    currentAnswer += getAnswerLine(lines[i]);
                }
                inQuestion = false;
                questions.push(new Question(currentTitle, currentAnswer));
                currentAnswer = '';
                currentTitle = '';
            }
        } else if (lines[i].startsWith('> [!question]')) {
            inQuestion = false;
            currentTitle = getUnansweredTitle(lines[i]);
            unansweredQuestions.push(new Question(currentTitle, ''));
            currentAnswer = '';
            currentTitle = '';
        }
    }
    if(inQuestion) {
        if(currentAnswer.length === 0) {
            let lineText = lines[i].substring(1,lines[i].length) + '\n';
            if(lineText.startsWith(" ")) {
                lineText = lineText.substring(1, lineText.length);
            }
            currentAnswer += lineText;
        }
        questions.push(new Question(currentTitle, currentAnswer));
        currentAnswer = '';
        currentTitle = '';
    }
    return [questions, unansweredQuestions];
}

function getUnansweredTitle(line) {
    line = line.substring(13,line.length).trim();
    if(line.startsWith('-') || line.startsWith('+')) {
        line = line.substring(1, line.length).trim();
    }
    if(line.startsWith(" ")) {
        line = line.substring(1, line.length);
    }
    return "### " + line;
}

function getAnsweredTitle(line) {
    line = line.substring(9,line.length).trim();
    if(line.startsWith('-') || line.startsWith('+')) {
        line = line.substring(1, line.length).trim();
    }
    if(line.startsWith(" ")) {
        line = line.substring(1, line.length);
    }
    return "### " + line;
}

function getAnswerLine(line) {
    let lineText = line.substring(1,line.length) + '\n';
    if(lineText.startsWith(" ")) {
        lineText = lineText.substring(1, lineText.length);
    }
    return lineText;
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
    let title = document.createElement('h3');
    title.innerHTML = "Quizzes";
    title.className = 'quiz-title';
    main.appendChild(title);

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
    showAnswerButton.textContent = 'Antwort';
    buttons.appendChild(showAnswerButton);

    let nextButton = document.createElement('button');
    nextButton.textContent = 'Weiter';
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
    backButton.textContent = 'Beenden';
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
            title.innerHTML = renderMarkdown('### Du bist fertig');
            showAnswerButton.classList.add('hidden');
            answer.innerHTML = "Super :)";
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
            nextButton.innerHTML = 'Fertig';
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
            }, 'Weiter mit unbeantworteten Fragen');
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
