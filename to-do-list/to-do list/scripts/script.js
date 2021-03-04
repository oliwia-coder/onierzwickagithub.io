

const itemText = document.getElementById('item-text');
const addBtn = document.getElementById('add-button');
const modifyBtn = document.getElementById('modify-button');
const deleteBtn = document.getElementById('delete-button');
const list = document.querySelector('ul');



// deklarujemy zmienna-do wczytywania jej wartosci w całym kodzie 
//zmienna bedzie słozyc do przechowywania obiektu który chce zaznaczyć(usunąć zmodyfikowac )
let selectedItem;


function addItem() {
    const item = document.createElement('li');
    item.addEventListener('click', selectItem);
    //klikając guzik ADD tworzymy nowy element li i znowu tworzymy dla niego 
    // event listener
    item.innerText = itemText.value;
    // // ustawiamy wartosc tworzonego elementu li - jego tekst

    // //dodajemy li do ul
    itemText.value = '';
    // //resetujemy wartosc pola tekstowego

    // const btnDelete = document.createElement('button');
    // btnDelete.innerText = 'Usuń zadanie';
    // btnDelete.addEventListener('click', function () {
    //     list.removeChild(item);
    // })
    // item.appendChild(btnDelete);


    list.appendChild(item);
}

function selectItem() {
    selectedItem = this;
    //slowo this- zwraca konkretny obiekt,ktory wywolal funkcje,
    //potrzebne do modyfikacji/usuniecia itemu z listy
}

function modifyItem() {
    if (itemText.value == '') {
        return;
    }

    selectedItem.innerText = itemText.value;
    // selectedItem  obiekt, ktory ostatnio kliknelismy. Zmieniamy tutaj jego tekst na
    // tekst wpisany do pola tekstowego na gorze
    itemText.value = '';
    //resetujemy wartosc pola tekstowego
}

function deleteItem() {
    list.removeChild(selectedItem);
    // list ( nasz ul z HTMLa) ma dzieci (li) i w funkcji removeChild jako argument
    // podajemy selectedItem - ostatnio klikniety item z listy, ktory jest
    // przechowywany globalnie
}

// do kazdego z guzikow dodajemy EventListener obslugujacy zdarzenie typu 'click'
addBtn.addEventListener('click', addItem);
modifyBtn.addEventListener('click', modifyItem);
deleteBtn.addEventListener('click', deleteItem);


