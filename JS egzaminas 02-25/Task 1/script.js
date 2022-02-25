/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const form = document.querySelector("form");

form.addEventListener("submit", convert);

function convert (e) {
    e.preventDefault()
    const kilograms = document.querySelector("#search").value;
    console.log(kilograms);
    let pounds = ((Number(kilograms)) * 2.2046).toFixed(1);
    console.log(pounds);
    let grams = (Number(kilograms)) / 0.0010000;
    console.log(grams);
    let ounces = (Number(kilograms) * 35.274).toFixed(1);
    console.log(ounces);
    const output = document.querySelector("#output");
    output.innerHTML = `${kilograms} kilograms is equal to: ${pounds} pounds, ${grams} grams, or ${ounces} ounces`;
};