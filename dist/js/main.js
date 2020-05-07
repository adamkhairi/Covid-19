let Questions,selections,resultMsg,facteur;Questions=[{question:'<p class="form__question">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p>',rep:'<div class="rR" ><input class="form__choice" type="number" name="question2" placeholder="15 - 115" min="15" max="115"> <label>Ans</label></div>'},{question:'<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>',rep:'<div class="rR" > <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" name="question" value="Non"><label for="non">Non</label></div>'},{question:'<p class="form__question">Quelle est votre température corporelle ?</p>',rep:'<div class="rR" ><input type="number" class="form__choice" placeholder="34 - 42" min="34" max="42"> <label>°c</label></div>'},{question:'<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>',rep:'<div class="rR" > <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>'},{question:'<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p>',rep:'<div class="rR" > <input type="radio" class="form__choice" name="question" value="Oui"><label for="oui">Oui</label> <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>'},{question:'<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p>',rep:'<div class="rR" > <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>'},{question:'<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p>',rep:'<div class="rR" > <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>'},{question:'<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p>',rep:'<div class="rR" > <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>'},{question:'<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p>',rep:'<div class="rR" > <input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice"value="Non" name="question"><label for="non">Non</label></div>'},{question:'<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p>',rep:' <div class="rR" ><input type="radio" class="form__choice" value="Oui" name="question"><label for="oui">Oui</label>  <input type="radio" class="form__choice" value="Non" name="question"><label for="non">Non</label></div>'},{question:'<p class="form__question">Actuellement, comment vous vous sentez ? </p>',rep:'<div class="rR" > <input type="radio" class="form__choice" value="Bien" name="question"><label for="bien">Bien</label><input type="radio" class="form__choice" value="assez-bien" name="question"><label for="assez-bien"> Assez bien</label><input type="radio" class="form__choice" value="fatigue" name="question"><label for="fatigue">Fatigué(e) </label><input type="radio" class="form__choice" value="t-fatigue" name="question"><label for="t-fatigue"> Très fatigué(e)</label></div>'},{question:'<p class="form__question"> Avez-vous d’autre symptôme ?  </p>',rep:' <input type="text" class="form__choice" placeholder="Non - Autre Symptome" name="question">'},{question:'<p class="form__question">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p>',rep:'<div class="rR" ><input class="form__choice" type="number"  min="30" max= "200" placeholder="30 - 200"><span class="input-span">Kg</span></div>'},{question:'<p class="form__question">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p>',rep:'<div class="rR" ><input class="form__choice" max="200" min="80" placeholder="80 - 200" type="number"><label>cm</label></div>'},{question:'<p class="form__question"> Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p>',rep:'<div class="rR" ><input class="form__choice" name="question14" type="radio" value="Oui"><label for="oui">Oui</label><input class="form__choice" name="question14" type="radio" value="Non"><label for="non">Non</label></div>'},{question:'<p class="form__question">Êtes-vous diabétique ?</p>',rep:'<div class="rR" ><input class="form__choice" name="question15" type="radio" value="Oui"><label for="oui">Oui</label><input class="form__choice" name="question15" type="radio" value="Non"><label for="non">Non</label></div>'},{question:'<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p>',rep:'<div class="rR" ><input class="form__choice" name="question16" type="radio" value="Oui"><label for="oui">Oui</label><input class="form__choice" name="question16" type="radio" value="Non"><label for="non">Non</label></div>'},{question:'<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p>',rep:'<div class="rR" ><input class="form__choice" name="question17" type="radio" value="Oui"><label for="oui">Oui</label><input class="form__choice" name="question16" type="radio" value="Non"><label for="non">Non</label></div>'},{question:'<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p>',rep:'<div class="rR" ><input class="form__choice" name="question18" type="radio" value="Oui"><label for="oui">Oui</label><input class="form__choice" name="question18" type="radio" value="Non"><label for="non">Non</label></div>'},{question:'<p class="form__question">Avez-vous une maladie chronique du foie ?</p>',rep:'<div class="rR" ><input class="form__choice" name="question19" type="radio" value="Oui"><label for="oui">Oui</label><input class="form__choice" name="question19" type="radio" value="Non"><label for="non">Non</label></div>'},{question:'<p class="form__question">Êtes-vous enceinte ?</p>',rep:'<div class="rR" > <input class="form__choice" name="question20" type="radio" value="Oui"><label for="oui">Oui</label><input class="form__choice" name="question20" type="radio" value="Non"><label for="non">Non</label><input class="form__choice" name="question20" type="radio" value="homme"><label for="homme">Homme</label></div>'},{question:'<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p>',rep:'<div class="rR" ><input class="form__choice" name="question21" type="radio" value="Oui"><label for="oui">Oui</label> <input class="form__choice" name="question21" type="radio" value="Non"><label for="non">Non</label></div>'},{question:'<p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p>',rep:'<div class="rR" ><input class="form__choice" name="question22" type="radio" value="Oui"><label for="oui">Oui</label><input class="form__choice" name="question22" type="radio" value="Non"><label for="non">Non</label></div>'}];class select{constructor(e,s){this.id=e,this.answer=s}}selections=[],facteur={fMineur:[],fMajeur:[],fPronostic:[],symptom:[]};let forArray,algo,resMineur=0,resMajeur=0,resPronostic=0,resSymptom=0;forArray=()=>{for(let e=0;e<selections.length;e++)e>=0&&e<=11&&facteur.symptom.push(selections[e]),2===e&&(facteur.fMajeur.push(selections[e]),facteur.fMineur.push(selections[e])),7!==e&&10!==e||facteur.fMineur.push(selections[e]),8!==e&&9!==e||facteur.fMajeur.push(selections[e]),e>=14&&e<22&&facteur.fPronostic.push(selections[e])},algo=()=>{for(let e=0;e<facteur.fMineur.length;e++)(facteur.fMineur[e].answer>=39||"Oui"===facteur.fMineur[e].answer||"fatigue"===facteur.fMineur[e].answer||"t-fatigue"===facteur.fMineur[2].answer)&&resMineur++;for(let e=0;e<facteur.fMajeur.length;e++)(facteur.fMajeur[e].answer<=35.4||"Oui"===facteur.fMajeur[e].answer)&&resMajeur++;for(let e=0;e<facteur.symptom;e++)"Oui"===facteur.symptom[e]&&resSymptom++;alert("Done"),console.log(facteur)};let mainAlgo,runTest,runTestDiv,formBtns,qtsh1,div,counter,quiz,next,back,start,ans,formSub,msg_1=document.querySelector("#msg-1");mainAlgo=()=>{forArray(),algo(),"Oui"===selections[1].answer||"Oui"===selections[3].answer&&"Oui"===selections[5].answer||"Oui"===selections[3].answer&&"Oui"===selections[4].answer||"Oui"===selections[1].answer&&"Oui"===selections[6].answer?(0===resPronostic?0===resMineur&&0===resMajeur&&selections[13].answer<50?msg_1.textContent=resultMsg.msg0:(resMineur>=1&&0===resMajeur&&selections[13].answer>=50||selections[13].answer<=69)&&(msg_1.textContent=resultMsg.msg3):0===resMajeur&&resMineur<=1?msg_1.textContent=resultMsg.msg3:0===resMajeur&&resMineur>=2&&(msg_1.textContent=resultMsg.msg4),resMajeur>=1&&(msg_1.textContent=resultMsg.msg4)):"Oui"===selections[1]&&"Oui"===selections[3]?(0===resPronostic?0===resMajeur&&resMineur>=1&&(msg_1.textContent=resultMsg.msg1):0===resMajeur&&resMineur<=1?msg_1.textContent=resultMsg.msg1:0===resMajeur&&resMineur>1&&(msg_1.textContent=resultMsg.msg4),resMajeur>0&&(msg_1.textContent=resultMsg.msg4)):"Oui"===selections[1]||"Oui"===selections[3]||"Oui"===selections[4]||"Oui"===selections[5]?0===resMajeur&&0===resMineur?msg_1.textContent=resultMsg.msg5:resPronostic>0&&(msg_1.textContent=resultMsg.msg5+" "+resultMsg.msg4):0===resSymptom&&(msg_1.textContent=resultMsg.msg6),selections[0]<15&&(msg_1.textContent=resultMsg.msg2)},resultMsg={msg2:"Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.",msg0:"Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.",msg1:"Téléconsultation ou médecin généraliste ou visite à domicile",msg3:"Téléconsultation ou médecin généraliste ou visite à domicile appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.",msg4:"Appel 141",msg5:"Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.",msg6:" Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil."},formSub=document.querySelector("#form_submit"),formBtns=document.querySelector(".form_btns"),next=document.querySelector("#form_next"),back=document.querySelector("#form_back"),runTestDiv=document.querySelector(".preambule"),runTest=document.getElementById("start"),qtsh1=document.querySelector(".quiz__title"),quiz=document.querySelector(".Quiz"),start=document.getElementById("start");let sectionQuiz=document.querySelector(".quiz");counter=0;let myForm,spBar,prgressBar,bool=!1;myForm=document.querySelector("#form"),myForm.addEventListener("submit",e=>{e.preventDefault(),btnNext()}),prgressBar=document.querySelector(".prgressBar");let btnNext,btnBack,btnControl,spliceFunc,checkInput,loadAnim,sectionResult,showResult,nextStep=e=>{document.getElementById(e).value=counter+1,23===document.getElementById(e).value?formSub.classList.add("complet"):formSub.classList.remove("complet")};runTest.addEventListener("click",(function(){runTestDiv.classList.add("hide"),formBtns.classList.remove("hide"),sectionQuiz.classList.remove("hide"),quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),checkInput(ans),btnControl(),next.classList.remove("hide"),prgressBar.classList.remove("hide")})),btnNext=()=>{counter<Questions.length&&bool?(counter++,quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),checkInput(ans),btnControl(),nextStep("spBar"),console.warn(counter),bool=!1):(alert("Please choose one"),bool=!1)},next.addEventListener("click",e=>{e.preventDefault(),btnNext()}),btnBack=()=>{counter>0&&(counter--,quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),checkInput(ans),btnControl(),nextStep("spBar"),console.warn(counter))},back.addEventListener("click",btnBack),btnControl=()=>{0===counter?back.classList.add("hide"):(back.classList.remove("hide"),next.classList.remove("hide"),formSub.classList.add("hide")),counter===Questions.length-1&&(next.classList.add("hide"),formSub.classList.remove("hide"))},spliceFunc=e=>{let s;s=new select,s.id=counter,s.answer=ans[e].value,selections.splice(counter,1,s)},checkInput=e=>{e=document.querySelectorAll("input.form__choice");for(let s=0;s<e.length;s++)e[s].addEventListener("change",()=>{spliceFunc(s),console.log(selections),bool=!0})},sectionResult=document.querySelector("#result"),loadAnim=()=>{$(sectionQuiz).hide(),$(prgressBar).hide(),sectionResult.classList.remove("hide"),setTimeout((function(){$("#result").hide(1e3),$(".showResult").show(1e3)}),4e3)},formSub.addEventListener("click",e=>{ans=document.querySelectorAll("input.form__choice"),e.preventDefault(),checkInput(ans),loadAnim(),mainAlgo()}),showResult=document.querySelector(".showResult"),$("#reStart").click(()=>(location.reload(),!1)),console.clear();