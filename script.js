let questions = [
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3

    },
    {
        "question": "bls",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3

    }
];

let currentquestion = 0;
//Variable, die den Aktuellem Wert der Frage enthält.

function init(){
    document.getElementById('question-number').innerHTML = questions.length;

    showQuestion();
}

function showQuestion(){
    let question = questions[currentquestion];
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer (selection){
    let question = questions[currentquestion];
    //Diese Variable enthält die aktuelle Frage.
console.log('selected answer is ', selection);
let selectedQuestionNumber = selection.slice(-1);
//In dieser Variable speichere ich den letzten Buchstaben der Selection Variable ab.
console.log('selectedQuestionNumber is ', selectedQuestionNumber);
console.log('current Question is', question['right_answer']);


let idOfRightAnswer = `answer_${question['right_answer']}`;

if(selectedQuestionNumber == question['right_answer']){
    //ich erstelle eine If Abfrage im Fall, dass der letzte Buchstabe (die Zahl in diesem Falle
    //übereinstimmen soll mir das Folgende ausgegeben werden)
    console.log('Richtige Antwort!!');
    document.getElementById(selection).classList.add('bg-success');
} else {
    //sollte es nicht übereinstimmen soll mir das Folgende ausgegeben werden.
    console.log('Falsche Antwort :( !');
    document.getElementById(selection).classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).classList.add('bg-success');
}
}