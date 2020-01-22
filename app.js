// Dynamic Quiz App with randomly chosen multiple choice questions
// Design and development by Micke Berg

const main = document.querySelector('main');
const theQuestion = document.querySelector('.the-question');
const optionsFieldContainer = document.querySelector('.options-field');
const optionField = document.querySelector('.options-field').children;
const answerTrackerContainer = document.querySelector('.answers-tracker');
const questionsOfTotal = document.querySelector('.question-of-total');
const totalQuestionSpan = document.querySelector('.total-question');
const totalQuestionSpan2 = document.querySelector('.total-question2');
const makeChoice = document.querySelector('.make-choice');
const correctAnswerSpan = document.querySelector('.correct-answers');
const percentage = document.querySelector('.percentage');
const gameOver = document.querySelector('.game-over');
const option = document.querySelector('.option');
const allQuestionsArr = [
  {
    q: 'Ordet demokrati kommer från det grekiska språket, men vad betyder demokrati?',
    options:['Folkstyre','Kapital','Dominans', 'Landstyre'],
    answer: 0
  },
  {
    q: 'I Sverige har vi en demokrati, vad betyder de?',
    options:['Kungen bestämmer','Landstinget bestämmer','Statsministern bestämmer', 'Folket bestämmer'],
    answer: 3
  },
  {
    q: 'I en demokrati finns det en person som kallas Statschef, vem brukar ha den titeln?',
    options:['Kungen','Statsministern','Dommaren','Åklagaren'],
    answer: 0
  },
  {
    q: 'Hur ofta är det val i Sverige?',
    options:['2 år','4 år','6 år','8 år'],
    answer: 1
  },
  {
    q: 'Går det att tvinga en statsminister att avgå?',
    options:['Ja','Nej'],
    answer: 0
  },
  {
    q: 'Hur gammal behöver du vara för att få rösta i Sverige?',
    options:['15år','16år','21år','18år'],
    answer: 3
  },
  {
    q: 'När sägs det att demokrati uppfanns?',
    options:['500 år före kristus','År 0', '200 år efter kristus', '300 år före kristus'],
    answer: 0
  },
  {
    q: 'När infördes rösträtt i Sverige?',
    options:['1903','1912','1890','1909'],
    answer: 3
  },
  {
    q: 'Hur många röster behöver ett parti ha för att få vara med i riksdagen? (Procent)',
    options:['4%','10%','2%','15%'],
    answer: 0
  },
  {
    q: 'Vilket parti vann valet 2018?',
    options:['Sverigedemokraterna','Moderaterna','Socialdemokraterna','Vänsterpartiet'],
    answer: 2
  },
  {
    q: 'Vem är Sveriges statsminister?',
    options:['Annie Lööf', 'Stefan Lövfén', 'Ulf Kristersson', 'Jimmie Åkesson'],
    answer: 1
  },
  {
    q: 'Vilken av dessa är en av Sveriges grundlagar?',
    options:['Yttrandefrihetsgrundlagen', 'Värnpliktslagen', 'Rösträttslagen', 'Allemansrätten'],
    answer: 0
  },
  {
    q: 'Hur många grundlagar har vi i Sverige?',
    options:['5', '3', '4', '6'],
    answer: 2
  },
  {
    q: 'Vilket av dessa ingår i det Allmänna valet?',
    options:['Kommunfullmäktige','Regeringsval', 'Valet till Statschef', 'Skolvalet'],
    answer: 0
  },
  {
    q: 'Hur många val gör vi till det Allmänna valet?',
    options:['6','5','4','8'],
    answer: 2
  },
  {
    q: 'Libralism kommer från det latinska ordet Liber, men vad betyder det?',
    options:['Gemenskap', 'Fri' , 'Yttrandefrihet', 'Vänskap'],
    answer: 1
  },
  {
    q: 'Socialism kommer från det latinska ordet Socius, men vad betyder det?',
    options:['Kamrat', 'Gemenskap', 'Fri', 'Makt'],
    answer: 0
  },
  {
    q: 'Vad betyder Feminism?',
    options:['Att stärka kvinnors rättigheter', 'Att stärka mäns rättigheter', 'Att stärka de fattigas rättigheter', 'Att stärka de rikas rättigheter'],
    answer: 0
  },
  {
    q: 'När var Fredrik Reinfeldt statsminister?',
    options:[ '2002-2006', '2014-2018', '2006-2014', '1998-2002'],
    answer: 2
  },
  {
    q: 'Vad är EU förkortning på?',
    options:['Europeiska Unionen', 'Europas församlingsunion', 'Den gemensamma unionen i Europa', 'Europas underättelsetjänst'],
    answer: 0
  },
  {
    q: 'När grundades EU?',
    options:[ '1995', '1993', '1985', '1990'],
    answer: 1
  },
  {
    q: 'Vilket av dessa länder är en demokrati?',
    options:['Jamaica','Nordkorea', 'Somalia', 'Libyen'],
    answer: 0
  },
  {
    q: 'Om din lärare visar upp ett äpple och en banan, och låter er få räcka upp handen för vilken frukt som ni helst vill ha, vad kallas detta sätt?',
    options:['diktatur', 'Republik', 'Demokrati', 'Monarki'],
    answer: 2
  },
  {
    q: 'Du och fem klasskamrater är ute på skolgården. Fyra av er vill spela fotboll, men en av er vill hellre spela basket och bestämmer därför att alla ska nu spela basket. Är detta en demokrati?',
    options:['Ja', 'Nej'],
    answer: 1
  },
  {
    q: 'Hemma hos familjen Andersson, som består av Pappa Kalle, Mamma Ronja, Pelle och lilla Emma, så säger Pappa Kalle att alla idag ska med och fiska. Pelle frågar om han får stanna hemma och leka med Emma istället, men Kalle säger “Nej Pelle, nu ska vi alla åka”. Är detta en demokrati?',
    options:['Ja', 'Nej'],
    answer: 1
  },
  {
    q: 'Mamma Karin ska precis börja laga mat, men innan hon börjar så frågar hon vad Helmer, Göran och Sara vill ha för mat. Två st säger Pizza, en säger hamburgare. Då säger Karin, “Eftersom fler vill ha Pizza idag, så kommer ni få Pizza”, är detta en demokrati?',
    options:['Ja', 'Nej'],
    answer: 0
  }
];

let questionIndex = 0;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;

let allQuestions = [...allQuestionsArr];
let theRandomQuestions = [];

function selectQuestions() {
  if (allQuestions.length < 5) {
    allQuestions = [...allQuestionsArr];
  };
  
  theRandomQuestions = [];

  for (let i = 0; i < 5; i++) {
    let randomQuestion = Math.floor(Math.random() * allQuestions.length);

    theRandomQuestions.push(allQuestions[randomQuestion]);
    allQuestions.splice(randomQuestion, 1);
  };
};

function load() {
  questionsOfTotal.innerHTML = index+1;
  optionsFieldContainer.innerHTML = '';
  theQuestion.innerHTML = theRandomQuestions[questionIndex].q;

  for(let i = 0; i < theRandomQuestions[questionIndex].options.length; i++) {
    optionsFieldContainer.innerHTML += `<div class="option">${theRandomQuestions[questionIndex].options[i]}</div>`;
  };

  const parent = optionsFieldContainer;
  const children = Array.from(parent.children);

  children.map((option, index) => {
    option.addEventListener('click', () => {
      checkIfRightAnswer(index);
    });
  })
};

function next() {
  validate();
};

function checkIfRightAnswer(index) {
  if(index == theRandomQuestions[questionIndex].answer) {
    optionField[index].classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    optionField[index].classList.add('wrong');
    optionField[theRandomQuestions[questionIndex].answer].classList.add('correct');
    updateAnswerTracker('wrong');
  }
  disableOptions();
  
  makeChoice.innerHTML = '';
  makeChoice.style.backgroundColor = '';
};

function disableOptions() {
  for(let i = 0; i < optionField.length; i++) {
    optionField[i].classList.add('disabled');
  }
};

function enableOptions() {
  for(let i = 0; i < optionsFieldContainer.children.length; i++) {
    optionField[i].classList.remove('disabled', 'correct', 'wrong');
  }
};

function validate() {
  if(!optionField[0].classList.contains('disabled')) {
    makeChoice.innerHTML = 'Välj ett alternativ innan du kan gå vidare.';
    makeChoice.style.backgroundColor = 'rgba(255, 255, 255, 0.415)';
  }
  else {
    if (questionIndex === 4) {
      quizOver();
      questionIndex = 0;
    } else {
      enableOptions();
      questionIndex++;
      load();
    }
  }
};

function answerTracker() {
    for(let i = 0; i < theRandomQuestions.length; i++){ 
      const div = document.createElement('div');
        answerTrackerContainer.appendChild(div);
  }
}

function updateAnswerTracker(classNam) {
  let boxes = Array.from(answerTrackerContainer.children);
  boxes[index].classList.add(classNam);
  index++;
};

function tryAgain() {
  index = 0;
  answerTrackerContainer.innerHTML = '';
  document.querySelector('.quiz-over').classList.remove('show');
  score = 0;
  loadRound();
};

window.onload = function () {
  loadRound();
};

function loadRound() {
  selectQuestions();
  load();
  
  totalQuestionSpan.innerHTML = theRandomQuestions.length;

  answerTracker();
  index = 0;
};

const gameOverStatements = [
  { option: 'Öhh... Hallå! Inte sova på lektionerna!!' },
  { option: 'Det går inget vidare för dig va?!! Dags att göra läxorna!!'},
  { option: 'Hmm... det går väl så där. Kanske plugga lite mer!!'},
  { option: 'Helt ok, men bättre kan du nog!' },
  { option: 'Du verkar ju ha ganska bra koll på det här med demokrati!!' },
  { option: 'Ooooh, grym du är. Du är ju en demokratiexpert!!' },
  { option: 'Testa dina kunskaper igen!!' }
];

function quizOver() {
  document.querySelector('.quiz-over').classList.add('show');

  let finishScore = (score/theRandomQuestions.length)*100;
  
  correctAnswerSpan.innerHTML = score;
  totalQuestionSpan2.innerHTML = theRandomQuestions.length;
  percentage.innerHTML = (score/theRandomQuestions.length)*100 + '%';

  switch (finishScore) {
    case 0:
      gameOver.innerHTML = gameOverStatements[0].option;
      break;
    case 20:
      gameOver.innerHTML = gameOverStatements[1].option;
      break;
    case 40:
      gameOver.innerHTML = gameOverStatements[2].option;
      break;
    case 60:
      gameOver.innerHTML = gameOverStatements[3].option;
      break;
    case 80:
      gameOver.innerHTML = gameOverStatements[4].option;
      break;
    case 100:
      gameOver.innerHTML = gameOverStatements[5].option;
      break;
    default:
      gameOver.innerHTML = gameOverStatements[6].option;
  }
};

