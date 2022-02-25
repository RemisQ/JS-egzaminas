/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(response => response.json())
.then(data => {
    for(let i=0;i<data.length;i++)
        addCard(data[i]);
});

const addCard = (data) => {
    const card = document.createElement('div');
    card.classList.add(`card`, data.status);
    const title = document.createElement('h3');
    title.textContent = data.title;
    const dueOn = document.createElement('div');
    dueOn.textContent = `Due on: ${new Date(data.due_on).toLocaleDateString()}`;
    card.appendChild(title);
    card.appendChild(dueOn);
    document.querySelector('main').appendChild(card);
    console.log(data);
};
