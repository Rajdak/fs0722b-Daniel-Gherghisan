salvaIlDato = function(info_da_salvare){
    localStorage.ultimo = info_da_salvare;
    alert("memorizzazione effettuata");
}
recuperoIlDato = function(elemento){
    if(confirm("hai un altro pensiero da memorizzare al posto di questo ?")){
        elemento.value = localStorage.ultimo;
    }
};
