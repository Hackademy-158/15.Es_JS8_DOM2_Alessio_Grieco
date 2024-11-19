

//~ obiettivi:
// deve mostrarmi i contatti, ed eventualmente nasconderli
// deve permettermi di aggiungere un contatto
// deve permettermi di rimuovere un contatto

//? ricerca del contatto
//? modifica contatto


const buttonShow = document.querySelector('#button-show');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const numberInput = document.querySelector('#number');
const cardContainer = document.querySelector('#card-container');

const rubrica = {
    contacts: [
        { name: 'Alessio', surname: 'Grieco', number: '3256677893' },
        { name: 'Saverio', surname: 'Romano', number: '3235864444' },
        { name: 'Lorenzo', surname: 'Trevisani', number: '3248675645' }
    ],

    //^ Funzione per mostrare i contatti
    showContacts: function () {
        // Svuota il contenitore per evitare duplicati
        cardContainer.innerHTML = '';

        // Ciclo l'array di contatti e per ogni contatto  
        this.contacts.forEach(contact => {
            // Creo una card(Bootcard)
            const div = document.createElement('div');
            // E definisco un preset Bootstrap
            div.classList.add('card', 'mb-3');
            //Inietto effettivamente la Bootcard appena definita
            div.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${contact.name} ${contact.surname}</h5>
                    <p class="card-text">${contact.number}</p>
                    <button class="btn btn-danger btn-sm remove-contact-btn">Rimuovi</button> 
                </div>
            `;
            // Appendo Bootcard al CardContainer Statico HTML
            cardContainer.appendChild(div);
        });
    }
};

//^ Condiziono la funzione Mostra Contatti nell'evento click
buttonShow.addEventListener('click', () => {
    //Se il CardContainer è vuoto al, click mostrami le n Bootcards
    if (cardContainer.innerHTML === '') {
        rubrica.showContacts();
        buttonShow.textContent = 'Nascondi Contatti';
    } else {
        //Altrimenti pulisco i contatti Bootcard nel container
        cardContainer.innerHTML = '';
        // Quindi faccio credere all'user che siano tornati in "tendina"
        buttonShow.textContent = 'Mostra Contatti';
    }
});

// Opzione Userfriendly ^ - ^
// Funzione autoclear per gli input
const svuotatext = () => {
    nameInput.value = '';
    surnameInput.value = '';
    numberInput.value = '';
};

//Invoco la arrowfunction appena creata per avere un riscontro visivo
svuotatext();

