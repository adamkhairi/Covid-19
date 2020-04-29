let Questions;
Questions = [
	//1///// fiévre
	{
		"question":
			'<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>',
		/// oui . non /////
		"rep":
			'<div class="rR" > <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" name="question" value="Non"><label for="non">Non</label></div>',
	},
	/////2 ///// temperature
	{
		"question":
			'<p class="form__question">Quelle est votre température corporelle ?</p>',
		"rep":
			'<div class="rR" ><input type="number" class=" form__choice choiceTxt" placeholder="34 - 42" min="34" max="42"> <label>°c</label></div>',
	},
	//////3/////  Toux
	{
		"question":
			'<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>',
		/// oui . non /////
		"rep":
			'<div class="rR" > <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>',
	},
	/////4///// courbatures
	{
		"question":
			'<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p>',
		/// oui . non /////
		"rep":
			'<div class="rR" > <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>',
	},
	//// 5 .///// MAl gorge
	{
		"question":
			'<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p>',
		/// oui . non /////
		"rep":
			'<div class="rR" > <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>',
	},
	//////6///// Diarrhée
	{
		"question":
			'<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p>',
		/// oui . non /////
		"rep":
			'<div class="rR" > <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>',
	},
	/////7////// fatigue
	{
		"question":
			'<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p>',
		/// oui . non /////
		"rep":
			'<div class="rR" > <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>',
	},
	//////8///// difficulté
	{
		"question":
			'<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p>',
		/// oui . non /////
		"rep":
			'<div class="rR" > <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice"value="Non" name="question"><label for="non">Non</label></div>',
	},
	//////9///// souffle
	{
		"question":
			'<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p>',
		/// oui . non /////
		"rep":
			' <div class="rR" ><input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>',
	},
	///////10//// sente
	{
		"question":
			'<p class="form__question">Actuellement, comment vous vous sentez ? </p>',
		"rep":
		//// 4reponce////
			'<div class="rR" > <input type="radio" class="form__choice" value="Bien" name="question"><label for="bien">Bien</label><input type="radio" class="form__choice" value="assez-bien" name="question"><label for="assez-bien"> Assez bien</label><input type="radio" class="form__choice" value="fatigue" name="question"><label for="fatigue">Fatigué(e) </label><input type="radio" class="form__choice" value="t-fatigue" name="question"><label for="t-fatigue"> Très fatigué(e)</label></div>',
	},
	///// 11 // age
	{
		"question":
			'<p class="form__question">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p>',
		"rep":
		///// 1 reponce /////
			'<div class="rR" ><input type="number" name="question2" placeholder="34 - 42" min="34" max="42"> <label>°c</label></div>',
	},
	///// 12 /// poid
	{
		"question":
			'<p class="form__question">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p>',
		"rep":
			'<div class="rR" ><input type="number"  min="30" max= "200" placeholder="30 - 200"><span class="input-span">Kg</span></div>'
	},
	///// 13 taille
	{
		"question":
			'<p class="form__question">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p>',
		"rep":
			'<div class="rR" ><input max="250" min="80" placeholder="80 - 250" type="number"><label>cm</label></div>'
	},
	//// 14 /////
	{
		"question":
			'<p class="form__question"> Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p>',
		"rep":
			'<div class="rR" ><input id="form_choice" name="question14" type="radio" value="oui"><label for="oui">Oui</label><input id="form_choice" name="question14" type="radio" value="non"><label for="non">Non</label></div>'
	},
	
	// 15
	{
		"question":
			'<p class="form__question">Êtes-vous diabétique ?</p>',
		"rep":
			'<div class="rR" ><input id="form_choice" name="question15" type="radio" value="oui"><label for="oui">Oui</label><input id="form_choice" name="question15" type="radio" value="non"><label for="non">Non</label></div>'
	},
	// 16
	{
		"question":
			'<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p>',
		"rep":
			'<div class="rR" ><input id="form_choice" name="question16" type="radio" value="oui"><label for="oui">Oui</label><input id="form_choice" name="question16" type="radio" value="non"><label for="non">Non</label></div>'
	},
	// 17
	{
		"question":
			'<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p>',
		"rep":
			'<div class="rR" ><input id="form_choice" name="question17" type="radio" value="oui"><label for="oui">Oui</label><input id="form_choice" name="question16" type="radio" value="non"><label for="non">Non</label></div>'
	},
	// 18
	{
		"question":
			'<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p>',
		"rep":
			'<div class="rR" ><input id="form_choice" name="question18" type="radio" value="oui"><label for="oui">Oui</label><input id="form_choice" name="question18" type="radio" value="non"><label for="non">Non</label></div>'
	},
	// 19
	{
		"question":
			'<p class="form__question">Avez-vous une maladie chronique du foie ?</p>',
		"rep":
			'<div class="rR" ><input id="form_choice" name="question19" type="radio" value="oui"><label for="oui">Oui</label><input id="form_choice" name="question19" type="radio" value="non"><label for="non">Non</label></div>'
	},
	// 20
	{
		"question":
			'<p class="form__question--trois">Êtes-vous enceinte ?</p>',
		"rep":
			'<div class="rR" > <input id="form_choice" name="question20" type="radio" value="oui"><label for="oui">Oui</label><input id="form_choice" name="question20" type="radio" value="non"><label for="non">Non</label><input id="form_choice" name="question20" type="radio" value="homme"><label for="homme">Homme</label></div>'
	},
	// 21
	{
		"question":
			'<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p>',
		"rep":
			'<div class="rR" ><input id="form_choice" name="question21" type="radio" value="oui"><label for="oui">Oui</label> <input id="form_choice" name="question21" type="radio" value="non"><label for="non">Non</label></div>'
	},
	// 22
	{
		"question":
			'<p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p>',
		"rep":
			'<div class="rR" ><input id="form_choice" name="question22" type="radio" value="oui"><label for="oui">Oui</label><input id="form_choice" name="question22" type="radio" value="non"><label for="non">Non</label></div>'
		
	},

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

// class Qst {
// 	constructor(question, answer) {
// 		this.question = question;
// 		this.answer = answer;
// 	}
// 	static show(){
// 			return question[counter].question + question[counter].answer
// 	}
// }
let symptom, fMineur, fMajeur, fPronostic;
fMineur = [];
fMajeur = [];
fPronostic = [];
symptom = [];

let algo;
algo = () => {
	for (let select in selections) {
		console.log();
		if (selections[select].id === 0 && selections[select].answer === "Non") {
			// alert('there');
			
		} else if (selections[select].id === 1 && selections[select].answer < 15) {
		
		}
	}
};
