let runTest, runTestDiv, formBtns, qtsh1, div, counter, quiz, next, back, start, ans, formSub;

formSub = document.querySelector('#form_submit')
formBtns = document.querySelector(".form_btns"); // div of buttons
next = document.querySelector('#form_next');
back = document.querySelector('#form_back');

runTestDiv = document.querySelector(".preambule"); // div of Quiz Start page
runTest = document.getElementById("start"); // Btn Start Quiz in start page
qtsh1 = document.querySelector(".quiz__title");

quiz = document.querySelector('.Quiz'); //div quiz
start = document.getElementById('start'); // start the test
let sectionQuiz = document.querySelector('.quiz'); //section quiz
counter = 0;
let bool = false;
// Progress Bar

let spBar, prgressBar;
prgressBar = document.querySelector('.prgressBar')
// spBar = document.querySelector('#spBar');

let nextStep = progressBar => {
	document.getElementById(progressBar).value = counter + 1;
	
	if (document.getElementById(progressBar).value === 22) {
		//TODO Chage it to BTN Submit TEST !!
		formSub.classList.add('complet');
	} else {
		formSub.classList.remove('complet');
		
	}
};

// Button Start Test

runTest.addEventListener("click", function () {
	// $(".preambule").hide();
	runTestDiv.classList.add("hide");
	formBtns.classList.remove("hide");
	sectionQuiz.classList.remove("hide");
	quiz.innerHTML = Questions[counter].question;
	quiz.innerHTML += Questions[counter].rep;
	ans = document.querySelectorAll('input.form__choice');
	checkInput(ans);
	btnControl();
	next.classList.remove('hide');
	prgressBar.classList.remove('hide');
});

// Button of Next Question

let btnNext;
btnNext = () => {
	
	if (counter < Questions.length && bool) {
		ifbool();
		counter++;
		quiz.innerHTML = Questions[counter].question;
		quiz.innerHTML += Questions[counter].rep;
		ans = document.querySelectorAll('input.form__choice');
		checkInput(ans);
		btnControl();
		nextStep('spBar');
		
		// bool = true
		
	} else {
		alert('Please choose one');
		bool = false
	}
	
};
next.addEventListener('click', evt => {
	evt.preventDefault();
	btnNext();
});

// Back BTN
let btnBack;
btnBack = () => {
	
	if (counter > 0) {
		counter--;
		quiz.innerHTML = Questions[counter].question;
		quiz.innerHTML += Questions[counter].rep;
		ans = document.querySelectorAll('input.form__choice');
		checkInput(ans);
		btnControl();
		nextStep('spBar');
		
	}
};
back.addEventListener('click', btnBack);

// after first qst

let btnControl;
btnControl = () => {
	if (counter === 0) {
		back.classList.add('hide');
	} else {
		back.classList.remove('hide');
		next.classList.remove('hide');
		formSub.classList.add('hide');
	}
	if (counter === Questions.length - 1) {
		next.classList.add('hide');
		formSub.classList.remove('hide');
	}
	// if (counter === Questions.length - 1) {
	// }
};
//Splice function
let spliceFunc;
spliceFunc = (i) => {
	//save answer value
	let answer;
	answer = new select();
	answer.id = counter;
	answer.answer = ans[i].value;
	//Add to array
	selections.splice(counter, 1, answer);
};

// Help boolean
function ifbool() {
	
	bool ? bool = false : bool = true
	
}

let checkInput;
checkInput = (ans) => {
	ans = document.querySelectorAll('input.form__choice');
	for (let i = 0; i < ans.length; i++) {
		
		ans[i].addEventListener('change', () => {
			
			if (ans[i].checked || (ans[i].type === "number" && ans[i].value)) {
				// let answer;
				// answer = new select();
				// answer.id = counter;
				// answer.answer = ans[i].value;
				// selections.splice(counter, 1, answer);
				spliceFunc(i);
				console.log(selections);
				ifbool();
			}
			
			// let answertxt;
			// answertxt = new select();
			// answertxt.id = counter;
			// answertxt.answer = ans[i].value;
			// selections.splice(counter, 1, answertxt);
			
			// console.log(selections);
			
		});
		
	}
}
// Algorithm

//Loading Result Animation

let loadAnim, sectionResult;
sectionResult = document.querySelector('#result');
// loadDiv = document.querySelector('.load');

// Show loading page And Result Page ;
loadAnim = () => {
	$(sectionQuiz).hide()
	// .classList.add("hide");
	$(prgressBar).hide();
	// loadDiv.classList.remove('hide');
	sectionResult.classList.remove('hide')
	setTimeout(function () {
		// sectionResult.classList.add('hide');
		$('#result').hide(1000);
		$('.showResult').show(1000);
	}, 4000);
	
};

formSub.addEventListener("click", ((evt) => {
	evt.preventDefault();
	loadAnim();
	forArray();
}));
let showResult;
showResult = document.querySelector('.showResult')
$("#reStart").click(() => {
	// runTestDiv.classList.remove('hide')
	// $(".showResult").hide();
	// $("#form").reset();
	// $("#form").show();
	// $(".preambule").show();
	location.reload();
	return false;
})
