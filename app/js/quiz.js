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

//Form
let myForm;
myForm = document.querySelector('#form')
myForm.addEventListener('submit', (evt => {
	evt.preventDefault();
	btnNext();
}))
// Progress Bar

let spBar, prgressBar;
prgressBar = document.querySelector('.prgressBar')
let nextStep = progressBar => {
	document.getElementById(progressBar).value = counter + 1;
	
	if (document.getElementById(progressBar).value === 23) {
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
		counter++;
		quiz.innerHTML = Questions[counter].question;
		quiz.innerHTML += Questions[counter].rep;
		ans = document.querySelectorAll('input.form__choice');
		checkInput(ans);
		btnControl();
		nextStep('spBar');
		console.warn(counter)
		bool = false;
		
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
		console.warn(counter)
		
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

// // Help boolean
// function ifbool() {
// 	bool ? bool = false : bool = true
// }

let checkInput;
checkInput = (ans) => {
	ans = document.querySelectorAll('input.form__choice');
	for (let i = 0; i < ans.length; i++) {
		ans[i].addEventListener('change', () => {
			// if (ans[i].checked || ((ans[i].type === "number" || ans[i].type === "text") && ans[i].value)) {
			spliceFunc(i);
			console.log(selections);
			bool = true;
			// }
		});
	}
}
// Algorithm

//Loading Result Animation

let loadAnim, sectionResult;
sectionResult = document.querySelector('#result');

// Show loading page And Result Page ;
loadAnim = () => {
	$(sectionQuiz).hide();
	$(prgressBar).hide();
	sectionResult.classList.remove('hide')
	setTimeout(function () {
		$('#result').hide(1000);
		$('.showResult').show(1000);
	}, 4000);
};

formSub.addEventListener("click", ((evt) => {
	ans = document.querySelectorAll('input.form__choice');
	evt.preventDefault();
	checkInput(ans);
	loadAnim();
	mainAlgo();
}));
// Restart Quiz
let showResult;
showResult = document.querySelector('.showResult')
$("#reStart").click(() => {
	location.reload();
	return false;
})
console.clear();