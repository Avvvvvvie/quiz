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
        this.blob = blobURI(name);
    }
}

class Summary {
    constructor(name) {
        this.name = name
        this.path = absoluteURI(name + ".md");
        this.pdf = absoluteURI(name + ".pdf");
        this.blob = blobURI(name + ".pdf");
    }
}

function absoluteURI(path) {
    return url + encodeURI(path);
}

function blobURI(path) {
    return blob + encodeURI(path);
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

function getSummaries(callback) {
    readFile(absoluteURI('summaries.md'), (text) => {
        summaries = [];
        for(summary of text.split('\n')) {
            summaries.push(new Summary(summary.trim()));
        }
        callback(summaries);
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
    newPage();
    getSummaries(summaries => {
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

                let quizName = document.createElement('span');
                quizName.classList.add('quiz-name');
                quizName.textContent = quiz.name;
                quizItem.appendChild(quizName);

                let quizLink = document.createElement('a');
                quizLink.href = quiz.blob;
                quizLink.classList.add('quiz-link');
                quizLink.setAttribute('target', '_blank');
                quizLink.onclick = (e) => {
                    e.stopPropagation(); // Prevent the quizItem click event
                }
                quizItem.appendChild(quizLink);

                quizItem.addEventListener('click', () => {
                    loadQuiz(quiz);
                });
                quizList.appendChild(quizItem);
            });
            main.appendChild(quizList);

            let summariesTitle = document.createElement('h3');
            summariesTitle.innerHTML = "Summaries";
            main.appendChild(summariesTitle);

            let summaryList = document.createElement('ul');
            summaryList.className = 'summary-list';
            summaries.forEach((summary) => {
                let summaryItem = document.createElement('li');
                summaryItem.className = 'summary-item';

                let summaryName = document.createElement('span');
                summaryName.classList.add('summary-name');
                summaryName.textContent = summary.name;
                summaryItem.appendChild(summaryName);

                let summaryLink = document.createElement('a');
                summaryLink.href = summary.blob;
                summaryLink.classList.add('summary-link');
                summaryLink.setAttribute('target', '_blank');
                summaryLink.onclick = (e) => {
                    e.stopPropagation(); // Prevent the summaryItem click event
                }
                summaryItem.appendChild(summaryLink);

                summaryItem.addEventListener('click', () => {
                    loadSummary(summary);
                });
                summaryList.appendChild(summaryItem);
            });
            main.appendChild(summaryList);
        });
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createSummary(pdf) {
    newPage();
    let backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
        init();
    });
    main.appendChild(backButton);

    let summaryContainer = document.createElement('div');
    summaryContainer.className = 'summary-container';
    main.appendChild(summaryContainer);

    let summaryIframe = document.createElement('iframe');
    summaryIframe.src = pdf;
    summaryIframe.className = 'summary-iframe';
    main.appendChild(summaryIframe);
}

function createQuiz(questions, callback, callbackMessage) {
    newPage();
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
        init();
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
    canva.style.display = 'block'
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

function newPage() {
    main.innerHTML = '';
    window.scroll(0, 0);
    canva.style.display = 'none'
}

function loadSummary(summary) {
    createSummary(summary.pdf);
}

let canva;
let main;

function init() {
    main = document.querySelector('main');
    canva = document.getElementById('canva')
    getQuizzes(createQuizSelection);
    initCanva()
}

document.addEventListener('DOMContentLoaded', init);


function initCanva() {
    const canvas = document.getElementById('drawing-board');
    const clear = document.getElementById('clear');
    const ctx = canvas.getContext('2d');

    clear.style.visibility = 'hidden'

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    let isPainting = false;
    let lineWidth = 2;
    let startX;
    let startY;

    clear.addEventListener('click', e => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        clear.style.visibility = 'hidden'
    });

    const draw = (e) => {
        e.preventDefault();
        if(e.touches) {
            e = e.touches[0]
        }
        if(!isPainting) {
            return;
        }

        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        let rect = canvas.getBoundingClientRect()

        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
    }


    const stop = (e) => {
        e.preventDefault();
        isPainting = false;
        ctx.stroke();
        ctx.beginPath();
        clear.style.visibility = ''
    }

    const start = (e) => {
        e.preventDefault();
        isPainting = true;
        startX = e.clientX;
        startY = e.clientY;
    }

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('touchstart', start);
    canvas.addEventListener('mouseup', stop);
    canvas.addEventListener('touchend', stop);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchmove', draw);
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize',function() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    })
}