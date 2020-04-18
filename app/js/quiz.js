let runTest, runTestDiv, formBtns, qtsh1, div, counter, quiz, next, back, start, ans;

formBtns = document.querySelector(".form_btns"); // div of buttons
next = document.querySelector('#form_next');
back = document.querySelector('#form_back');

runTestDiv = document.querySelector(".quiz__start"); // div of Quiz Start page
runTest = document.getElementById("start"); // Btn Start Quiz in start page
qtsh1 = document.querySelector(".quiz__title");

quiz = document.querySelector('.Quiz');
start = document.getElementById('start');
counter = 0;

// Button Start Test
runTest.onclick = () => {
	runTestDiv.classList.add("hide");
	formBtns.classList.remove("hide");
	quiz.innerHTML = Questions[counter].question;
	quiz.innerHTML += Questions[counter].rep;
	ans = document.querySelectorAll('input.form__choice');
	checkInput();
	btnControl();
	next.classList.remove('hide');
	
};
// runTest.addEventListener("click", function () {
//
// });

// Button of Next Question

getChose = [];

let btnNext;
btnNext = () => {
	if (counter < Questions.length) {
		
		counter++;
		quiz.innerHTML = Questions[counter].question;
		quiz.innerHTML += Questions[counter].rep;
		ans = document.querySelectorAll('input.form__choice');
		checkInput(ans);
		btnControl();
		
	}
	
}
// Back BTN
let btnBack;
btnBack = () => {
	if (counter > 0) {
		counter--;
		quiz.innerHTML = Questions[counter].question;
		quiz.innerHTML += Questions[counter].rep;
		ans = document.querySelectorAll('input.form__choice');
		
		btnControl();
		
	}
};
// after first qst

let btnControl;
btnControl = () => {
	if (counter === 0) {
		back.classList.add('hide');
		
	} else {
		back.classList.remove('hide');
		next.classList.remove('hide');
		
	}
	if (counter === Questions.length - 1) {
		next.classList.add('hide');
	}
};

let checkInput;
checkInput = (ans) => {
	ans = document.querySelectorAll('input.form__choice');
	
	for (let i = 0; i < ans.length; i++) {
		ans[i].addEventListener('change', () => {
			if (ans[i].type === "radio" && ans[i].checked) {
				
				let answer;
				answer = new select();
				answer.id = counter;
				answer.answer = ans[i].value;
				selections.push(answer);
				// alert(ans[i].value);
				
				console.log(selections);
				
			}
			if ((ans[i].type === "text" || ans[i].type === "number") && ans[i].value) {
				
				let answertxt;
				answertxt = new select();
				// TODO add ...
				answertxt.id = counter;
				answertxt.answer = ans[i].value;
				// inputtxt.push(answertxt);
				selections.push(answertxt)
				// alert(ans[i].value);
				
				//TODO FIX Error
				// alert(ans[i].value);
			}
		})
		
	}
	
}

//BTN Animation

// let animationEvent;
// animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
// nextAnimation = function () {
// 	$(nxtBtn).addClass('on');
// 	$(nxtBtn).one(animationEvent, function () {
// 		$(nxtBtn).removeClass('on')
// 	});
// };
