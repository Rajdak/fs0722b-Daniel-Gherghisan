


document.querySelector('#bottone')
.addEventListener('click', function(){

    let testo = document.querySelector('#Ricerca');
    
    let div = document.createElement('div');                         //crea un elemento specificato da un tag
    div.classList.add('dafare')                                      //il classList è una proprietà che come scopo ha di richiamare un token di un elemento del  DOM (che ne può condividere anche gli attributi)
    
    let span = document.createElement('span');  
    span.textContent = testo.value;

    let completato = document.createElement('button');
    completato.textContent = 'Hai già fatto';
    
    let cestino = document.createElement('button');
    completato.textContent = 'Non hai ancora fatto';
    
    completato.addEventListener('click', ()=> {                      //setta una funzio che sarà richiamata ogniqualvolta quel specifico evento è cpnseganto al target ( in questo caso a completato)
        div.classList.add('completato');                             //assegno una classe aggiuntiva
        document.querySelector('#lista1')
        .append(div);                                                //sposto il div nella lista completati
    })
    cestino.addEventListener('click', ()=> {
        div.classList.add('cestino');
        document.querySelector('#lista1').append(div);
    })


    div.append(span, completato, cestino);
    document.querySelector('#lista').append(div);


    testo.value = '';            
});