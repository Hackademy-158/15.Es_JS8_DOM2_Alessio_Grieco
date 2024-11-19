

//~ obiettivi:
// deve mostrarmi i contatti, ed eventualmente nasconderli
// deve permettermi di aggiungere un contatto
// deve permettermi di rimuovere un contatto

//? ricerca del contatto
//? modifica contatto


const cardContainer = document.querySelector('#card-container');

const rubrica = {
    contacts: [
        { name: 'Alessio', surname: 'Grieco', number: '3256677893' },
        { name: 'Saverio', surname: 'Romano', number: '3235864444' },
        { name: 'Lorenzo', surname: 'Trevisani', number: '3248675645' }
    ],

    // Funzione per mostrare i contatti
    showContacts: function() {
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

