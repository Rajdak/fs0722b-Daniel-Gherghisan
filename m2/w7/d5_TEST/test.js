
const container = document.getElementById("cont");
const row = document.getElementById("grid");

(async () => {
    const response = await fetch("test.json");
    const datiJ = await response.json();
    let iscrizioni = datiJ.iscritti;

    var carta = document.createElement("div");
    carta.className = "card col-4 w-50 ms-10";       
    var icona = document.createElement("img");
    icona.className = "img-fluid w-50 mx-auto";   
    var nome = document.createElement("h2");
    var a = document.createElement("a");
    a.className = "mb-4 text.center text-warning";
    
    icona.src = datiJ.iscritti.utenti[0].profileURL;
    console.log(datiJ.iscritti.utenti[0].firstName);
    nome.innerHTML = datiJ.iscritti.utenti[0].firstName + " " + datiJ.iscritti.utenti[0].lastName;
    a.innerHTML = datiJ.iscritti.utenti[0].email;
    console.log(datiJ.iscritti.utenti[0].email);

    container.append(row);
    row.append(carta);
    carta.append(icona);
    carta.append(nome);
    carta.append(a);

    var carta2 = document.createElement("div");
    carta2.className = "card col-4 w-50 ms-10";      
    var icona2 = document.createElement("img");
    icona2.className = "img-fluid w-50 mx-auto ";
    var nome2 = document.createElement("h2");
    var a2 = document.createElement("a");
    a2.className = "mb-4 text.center text-warning";
    
    icona2.src = datiJ.iscritti.utenti[1].profileURL;
    console.log(datiJ.iscritti.utenti[1].firstName);        
    nome2.innerHTML = datiJ.iscritti.utenti[1].firstName + " " + datiJ.iscritti.utenti[0].lastName;
    a2.innerHTML = datiJ.iscritti.utenti[1].email;
    console.log(datiJ.iscritti.utenti[1].email);

    row.append(carta2);
    carta2.append(icona2);
    carta2.append(nome2);
    carta2.append(a2);
    
    container.append(row);
})();

