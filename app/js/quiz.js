let runTest, qsDiv, anDiv, runTestDiv, qaDiv, formBtns, qts, counter, qtsh1;

counter = 0;
formBtns = document.querySelector(".form_btns"); // div of buttons
runTestDiv = document.querySelector(".quiz__start"); // div of Quiz Start page
runTest = document.getElementById("startTest"); // Btn Start Quiz in start page
qaDiv = document.querySelector(".myDiv"); // div of questions and answers
qsDiv = document.querySelectorAll(".form_question"); // Div of Questions
anDiv = document.querySelectorAll(".form_answer"); // Div of Answers
qts = document.querySelector(".question"); // H3 Question
qtsh1 = document.querySelector(".quiz__title");

questions = [
	"Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
	"Quelle est votre température corporelle ?",
	"Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
	"Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
	"Ces derniers jours, avez-vous un mal de gorge ?",
	"Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
	"Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
	"Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
	"Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
	"Actuellement, comment vous vous sentez ?",
	"Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",
	"Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
	"Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
	"Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
	"Êtes-vous diabétique ?",
	"Avez-vous ou avez-vous eu un cancer ?",
	"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
	"Avez-vous une insuffisance rénale chronique dialysée ?",
	"Avez-vous une maladie chronique du foie ?",
	"Êtes-vous enceinte ?",
	"Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
	"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",

];

// Button Start Test
runTest.addEventListener("click", function () {
	runTestDiv.classList.add("hide");
	qaDiv.classList.remove("hide");
	formBtns.classList.remove("hide");
	qts.innerText = questions[counter];
	
});

// Button of Next Question
let nxtBtn;
nxtBtn = document.getElementById('form_next');

let nextQts;
nextQts = () => {
	if (qts.innerText === questions[counter]) {
		counter++;
		document.querySelector(".question").innerText = questions[counter];
		// Todo Fix This
		if (questions.length === (counter + 1) || questions.length === counter) {
			nxtBtn.classList.add('hide');
			nxtBtn.onclick = "";
			runTestDiv.classList.remove("hide");
			
		}
	}
};

// Button of Preview Question

let backQts;
backQts = () => {
	
	if (counter > 0) {
		counter--;
		document.querySelector(".question").innerText = questions[counter];
		getChose.pop();
	}
};

let chose, getChose;
getChose = [];
chose = (inp) => {
	getChose.push(inp.value);
	alert(getChose);
	
}
