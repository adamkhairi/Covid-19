let runTest,runTestDiv,formBtns,qtsh1,div,counter,quiz,next,back,start,ans,btnNext,btnBack,btnControl,checkInput,newans;formBtns=document.querySelector(".form_btns"),next=document.querySelector("#form_next"),back=document.querySelector("#form_back"),runTestDiv=document.querySelector(".quiz__start"),runTest=document.getElementById("start"),qtsh1=document.querySelector(".quiz__title"),quiz=document.querySelector(".Quiz"),start=document.getElementById("start"),counter=0,runTest.onclick=()=>{runTestDiv.classList.add("hide"),formBtns.classList.remove("hide"),quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),checkInput(),btnControl(),next.classList.remove("hide")},getChose=[],btnNext=()=>{counter<Questions.length&&(counter++,quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),checkInput(ans),btnControl())},btnBack=()=>{counter>0&&(counter--,quiz.innerHTML=Questions[counter].question,quiz.innerHTML+=Questions[counter].rep,ans=document.querySelectorAll("input.form__choice"),btnControl())},btnControl=()=>{0===counter?back.classList.add("hide"):(back.classList.remove("hide"),next.classList.remove("hide")),counter===Questions.length-1&&next.classList.add("hide")},checkInput=e=>{e=document.querySelectorAll("input.form__choice");for(let t=0;t<e.length;t++)e[t].addEventListener("change",()=>{if("radio"===e[t].type&&e[t].checked){let n;n=new select,n.id=counter,n.answer=e[t].value,console.log(selections),selections.splice(counter,1,n)}if(("text"===e[t].type||"number"===e[t].type)&&e[t].value){let n;n=new select,n.id=counter,n.answer=e[t].value,selections.splice(counter,1,n),console.log(selections)}})},newans=()=>{for(let e=0;e<Questions.length;e++)selections.splice(e,1,answertxt)};