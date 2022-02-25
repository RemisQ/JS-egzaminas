/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const clickMe = document.querySelector("#btn__element");
clickMe.addEventListener("click", clickedTimes);
let number = 0;

function clickedTimes(){
    const count = document.querySelector("#btn__state");
    number++;
    count.innerHTML = number;
};
