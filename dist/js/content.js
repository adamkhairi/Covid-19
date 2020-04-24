let Questions;
Questions = [
	//1/////
	{
		"question":
			'<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>',
		/// oui . non /////
		"rep":
			' <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" name="question" value="Non"><label for="non">Non</label>',
	},
	/////2 /////
	{
		"question":
			'<p class="form__question">Quelle est votre température corporelle ?</p>',
		"rep":
		///// 1 reponce /////
			'<input type="number" class=" form__choice choiceTxt" placeholder="34 - 42" min="34" max="42"> <label>°c</label>',
	},
	//////3/////
	{
		"question":
			'<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>',
		/// oui . non /////
		"rep":
			' <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label>',
	},
	/////4/////
	{
		"question":
			'<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p>',
		/// oui . non /////
		"rep":
			' <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label>',
	},
	//// 5 ./////
	{
		"question":
			'<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p>',
		/// oui . non /////
		"rep":
			' <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label>',
	},
	//////6/////
	{
		"question":
			'<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p>',
		/// oui . non /////
		"rep":
			' <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label>',
	},
	/////7//////
	{
		"question":
			'<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p>',
		/// oui . non /////
		rep:
			' <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label>',
	},
	//////8/////
	{
		"question":
			'<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p>',
		/// oui . non /////
		"rep":
			' <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice"value="Non" name="question"><label for="non">Non</label>',
	},
	//////9/////
	{
		"question":
			'<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p>',
		/// oui . non /////
		"rep":
			' <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label>',
	},
	///////10////
	{
		"question":
			'<p class="form__question">Actuellement, comment vous vous sentez ? </p>',
		"rep":
		//// 4reponce////
			' <input type="radio" class="form__choice" value="Bien" name="question"><label for="bien">Bien</label><input type="radio" class="form__choice" value="assez-bien" name="question"><label for="assez-bien"> Assez bien</label><input type="radio" class="form__choice" value="fatigue" name="question"><label for="fatigue">Fatigué(e) </label><input type="radio" class="form__choice" value="t-fatigue" name="question"><label for="t-fatigue"> Très fatigué(e)</label>',
	},
	
	// {
	//   question:
	//     '<p class="form__question">Actuellement, comment vous vous sentez ? </p>',
	//   rep:
	//     //// 4reponce////
	//     ' <input type="radio" id="form__choice" name="question"><label for="oui">test</label><input type="radio" id="form__choice" name="question"><label for="non">test</label><input type="radio" id="form__choice" name="question"><label for="oui">test</label><input type="radio" id="form__choice" name="question"><label for="non">test</label>',
	// },
	// {
	//   question:
	//     '<p class="form__question">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p>',
	//   rep:
	//     ///// 1 reponce /////
	//     '<input type="number" name="question2" placeholder="34 - 42" min="34" max="42"> <label>°c</label>',
	// },
];
let selections;
selections = [];
let inputtxt;
inputtxt = [];

class select {
	constructor(id, answer) {
		this.id = id;
		this.answer = answer;
	}
}

class Qst {
	constructor(question, answer, show) {
		this.question = question;
		this.answer = answer;
		this.show = function () {
return 	question[counter].question + question[counter].answer
		}
	}
}