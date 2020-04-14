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

class quiz {
	constructor(qst, answers) {
		this.qst = qst;
		this.answers = answers;
	}
}

let reponse;
reponse = [
	new quiz("Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?", ["<label class=\"radio-button\"><input class=\"input\" name=\"form_choice\" type=\"radio\" value=\"oui\" /><span class=\"label-visible\">Oui<span class=\"fake-radiobutton\"></span></span></label>", "<label class=\"radio-button\"><input class='input' name=\"form_choice\" type=\"radio\" value=\"non\" /><span class=\"label-visible\">Non<span class=\"fake-radiobutton\"></span></span></label>"]),
	new quiz("Quelle est votre température corporelle ?", ["<label class=\"radio-button\"><input class=\"input\" name=\"form_choice\" type=\"radio\" value=\"oui\" /><span class=\"label-visible\">Oui<span class=\"fake-radiobutton\"></span></span></label>", "<label class=\"radio-button\"><input class='input' name=\"form_choice\" type=\"radio\" value=\"non\" /><span class=\"label-visible\">Non<span class=\"fake-radiobutton\"></span></span></label>"]),
	new quiz("Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?", ["<label class=\"radio-button\"><input class=\"input\" name=\"form_choice\" type=\"radio\" value=\"oui\" /><span class=\"label-visible\">Oui<span class=\"fake-radiobutton\"></span></span></label>", "<label class=\"radio-button\"><input class='input' name=\"form_choice\" type=\"radio\" value=\"non\" /><span class=\"label-visible\">Non<span class=\"fake-radiobutton\"></span></span></label>"]),
	new quiz("Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?", ["<label class=\"radio-button\"><input class=\"input\" name=\"form_choice\" type=\"radio\" value=\"oui\" /><span class=\"label-visible\">Oui<span class=\"fake-radiobutton\"></span></span></label>", "<label class=\"radio-button\"><input class='input' name=\"form_choice\" type=\"radio\" value=\"non\" /><span class=\"label-visible\">Non<span class=\"fake-radiobutton\"></span></span></label>"]),
	new quiz("Ces derniers jours, avez-vous un mal de gorge ?", ["<label class=\"radio-button\"><input class=\"input\" name=\"form_choice\" type=\"radio\" value=\"oui\" /><span class=\"label-visible\">Oui<span class=\"fake-radiobutton\"></span></span></label>", "<label class=\"radio-button\"><input class='input' name=\"form_choice\" type=\"radio\" value=\"non\" /><span class=\"label-visible\">Non<span class=\"fake-radiobutton\"></span></span></label>"]),
	new quiz("Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.", [""]),
	new quiz("Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?", [""]),
	new quiz("Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?", [""]),
	new quiz("Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?", [""]),
	new quiz("Actuellement, comment vous vous sentez ?", [""]),
	new quiz("Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.", [""]),
	new quiz("Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.", [""]),
	new quiz("Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.", [""]),
	new quiz("Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?", [""]),
	new quiz("Êtes-vous diabétique ?", [""]),
	new quiz("Avez-vous ou avez-vous eu un cancer ?", [""]),
	new quiz("Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", [""]),
	new quiz("Avez-vous une insuffisance rénale chronique dialysée ?", [""]),
	new quiz("Avez-vous une maladie chronique du foie ?", [""]),
	new quiz("Êtes-vous enceinte ?", [""]),
	new quiz("Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?", [""]),
	new quiz("Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).", [""])
];

// Button Start Test
runTest.onclick = () => {
	runTestDiv.classList.add("hide");
	qaDiv.classList.remove("hide");
	formBtns.classList.remove("hide");
	qts.innerText = reponse[counter].qst;
	document.querySelector('.form_answer').innerHTML = reponse[counter].answers;
	
	if (counter === 0) {
		backBtn.classList.add('hide');
		
	}
};
// runTest.addEventListener("click", function () {
//
// });

// Button of Next Question
let nxtBtn, backBtn, inpuut, chose, getChose;
backBtn = document.getElementById('form_back');
nxtBtn = document.getElementById('form_next');

getChose = [];

let nextQts;
nextQts = () => {
	//
	btnControl();
	
	if (qts.innerText === reponse[counter].qst) {
		counter++;
		//get the next qst
		qts.innerText = reponse[counter].qst;
		
		//get the next answers choices
		document.querySelector('.form_answer').innerHTML = reponse[counter].answers;
		inpuut = document.querySelectorAll('.form_answer .input');
		
		//TODO after check
		//show next Qst
		//get checked input value
		
		for (let j = 0; j < reponse[counter].answers.length; j++) {
			if (inpuut[j].checked) {
				getChose.push(inpuut[j].value);
				alert(getChose);
			}
			
		}
		alert(getChose);
		
		// TODO: FIX THIS
		//in case didn't chose
		
	}
	
};

// after first qst
let btnControl;
btnControl = () => {
	// hide next btn in 1qst
	if (counter === 22) {
		nxtBtn.classList.add('hide');
		
	}
	//show back btn after 1qst
	if (counter !== 0) {
		backBtn.classList.remove('hide');
		
	}
}
// Button of Back Question

let backQts;
backQts = () => {
	//check if not the first qst
	//and show the last qst
	//remove from the main table(getChose)
	if (counter > 0) {
		counter--;
		// Back QST
		qts.innerText = reponse[counter].qst;
		// Back ANS
		anDiv.html = reponse[counter].answers;
		
		getChose.pop();
	}
	//
	if (counter === ((reponse.length) - 2)) {
		alert('HERE');
		nxtBtn.classList.remove('hide');
		
	}
};

//BTN Animation

// let animationEvent;
// animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
// nextAnimation = function () {
// 	$(nxtBtn).addClass('on');
// 	$(nxtBtn).one(animationEvent, function () {
// 		$(nxtBtn).removeClass('on')
// 	});
// };
