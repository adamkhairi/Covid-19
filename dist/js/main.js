let runTest,runTestDiv,formBtns,qtsh1,div,counter,quiz,next,back,start,ans,formSub;formSub=document.querySelector("#form_submit"),formBtns=document.querySelector(".form_btns"),next=document.querySelector("#form_next"),back=document.querySelector("#form_back"),runTestDiv=document.querySelector(".preambule"),runTest=document.getElementById("start"),qtsh1=document.querySelector(".quiz__title"),quiz=document.querySelector(".Quiz"),start=document.getElementById("start");let sectionQuiz=document.querySelector(".quiz");counter=0;let myForm,spBar,prgressBar,bool=!1;myForm=document.querySelector("#form"),myForm.addEventListener("submit",e=>{e.preventDefault(),btnNext()}),prgressBar=document.querySelector(".prgressBar");let btnNext,btnBack,btnControl,spliceFunc,checkInput,loadAnim,sectionResult,showResult,nextStep=e=>{document.getElementById(e).value=counter+1,23===document.getElementById(e).value?formSub.classList.add("complet"):formSub.classList.remove("complet")};function ifbool(){bool=!bool}runTest.addEventListener("click",(function(){runTestDiv.classList.add("hide"),formBtns.classList.remove("hide"),sectionQuiz.classList.remove("hide"),quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),checkInput(ans),btnControl(),next.classList.remove("hide"),prgressBar.classList.remove("hide")})),btnNext=()=>{counter<Questions.length&&bool?(ifbool(),counter++,quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),checkInput(ans),btnControl(),nextStep("spBar"),console.warn(counter)):(alert("Please choose one"),bool=!1)},next.addEventListener("click",e=>{e.preventDefault(),btnNext()}),btnBack=()=>{counter>0&&(counter--,quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),checkInput(ans),btnControl(),nextStep("spBar"),console.warn(counter))},back.addEventListener("click",btnBack),btnControl=()=>{0===counter?back.classList.add("hide"):(back.classList.remove("hide"),next.classList.remove("hide"),formSub.classList.add("hide")),counter===Questions.length-1&&(next.classList.add("hide"),formSub.classList.remove("hide"))},spliceFunc=e=>{let t;t=new select,t.id=counter,t.answer=ans[e].value,selections.splice(counter,1,t)},checkInput=e=>{e=document.querySelectorAll("input.form__choice");for(let t=0;t<e.length;t++)e[t].addEventListener("change",()=>{(e[t].checked||("number"===e[t].type||"text"===e[t].type)&&e[t].value)&&(spliceFunc(t),console.log(selections),ifbool())})},sectionResult=document.querySelector("#result"),loadAnim=()=>{$(sectionQuiz).hide(),$(prgressBar).hide(),sectionResult.classList.remove("hide"),setTimeout((function(){$("#result").hide(1e3),$(".showResult").show(1e3)}),4e3)},formSub.addEventListener("click",e=>{ans=document.querySelectorAll("input.form__choice"),e.preventDefault(),checkInput(ans),loadAnim(),forArray(),algo(),mainAlgo()}),showResult=document.querySelector(".showResult"),$("#reStart").click(()=>(location.reload(),!1)),console.clear();