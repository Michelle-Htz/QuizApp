let questions = [{
        "question": "1. Welcher dieser Pilze ist giftig?",
        "answer_1": "Fliegenpilz",
        "img": "fliegenpilz.jpg",
        "answer_2": "Steinpilz",
        "answer_3": "Champignon",
        "answer_4": "Krause Glucke",
        "right_answer": 1

    },

    {
        "question": "2. Welcher dieser Bäume ist ein Laubbaum?",
        "answer_1": "Tannenbaum",
        "answer_2": "Fichte",
        "answer_3": "Ahorn",
        "answer_4": "Latsche",
        "right_answer": 3

    },
    {
        "question": "3. Wie nutzen uns Bäume und Pflanzen am meisten?",
        "answer_1": "Schutz vor Wetter",
        "answer_2": "Heimat für Tiere",
        "answer_3": "Sehen schön aus",
        "answer_4": "Durch Fotosynthese",
        "right_answer": 4

    },

    {
        "question": "4. Welche dieser Pflanzen kann man essen?",
        "answer_1": "Tulpe",
        "answer_2": "Brennessel",
        "answer_3": "Gardenie",
        "answer_4": "Vogelbeeren",
        "right_answer": 2

    },

    {
        "question": "5. Welcher dieser Bäume hat eine weiße Rinde?",
        "answer_1": "Birke",
        "answer_2": "Tannenbaum",
        "answer_3": "Ahorn",
        "answer_4": "Esche",
        "right_answer": 1

    },

    {
        "question": "6. Welcher dieser Pflanzen sind giftig?",
        "answer_1": "Mohn",
        "answer_2": "Vogelbeeren",
        "answer_3": "Löwenzahn",
        "answer_4": "Brennessel",
        "right_answer": 2

    },

    {
        "question": "7. Welcher dieser Bäume hat eine weiße Rinde?",
        "answer_1": "Birke",
        "answer_2": "Tannenbaum",
        "answer_3": "Ahorn",
        "answer_4": "Esche",
        "right_answer": 1

    }
];

let currentquestion = 0; //Variable, die den Aktuellem Wert der Frage enthält.
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/win.mp3');
let AUDIO_FAIL = new Audio('audio/lose.mp3');
let AUDIO_END_OF_GAME = new Audio('audio/endofthegame.mp3');

function init() {
    document.getElementById('question-number').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
    } else {
        updateProgressBar();
        showNextQuestion();
    }
}

function gameIsOver() {
    return currentquestion >= questions.length;
}

function showEndscreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-right-questions').innerHTML = rightQuestions;
    AUDIO_END_OF_GAME.play();
}

function updateProgressBar() {
    let percent = (currentquestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent} % `;
    document.getElementById('progress-bar').style = ` width: ${percent}%;`;
}

function showNextQuestion() {
    let question = questions[currentquestion];

    document.getElementById('current-question-number').innerHTML = currentquestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentquestion]; //Diese Variable enthält die aktuelle Frage.
    let selectedQuestionNumber = selection.slice(-1); //In dieser Variable speichere ich den letzten Buchstaben der Selection Variable ab.
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber)) {
        //ich erstelle eine If Abfrage im Fall, dass der letzte Buchstabe (die Zahl in diesem Falle
        //übereinstimmen soll mir das Folgende ausgegeben werden)
        document.getElementById(selection).classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;

    } else {
        //sollte es nicht übereinstimmen soll mir das Folgende ausgegeben werden.
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    //Der nächste Frage Button wird benutzbar gemacht. 
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber) {
    let question = questions[currentquestion];
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    //Der Wert der Varriablen, die auf die Fragen zugreift wird um 1 erhöht. 
    currentquestion++;
    //Der nächste Frage Button wird wieder unbenutzbar gemacht.
    document.getElementById('next-button').disabled = true;
    //Die Antwort Buttons werden zurückgesetzt.
    resewtAnswerButtons();
    //Die Fragen werden mit neuem Wert der Variable wieder geladen. 
    showQuestion();
}

function resewtAnswerButtons() {
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
}

function restartGame() {
    currentquestion = 0;
    rightQuestions = 0;
    document.getElementById('endScreen').style = 'display: none'; //Der Container für den Endscreen wird ausgeblendet.
    document.getElementById('questionBody').style = ''; //Der Container der Fragen wird erneut angezeigt.
    init();

}