boutton.onclick = () => {
    fetch("https://parisdata.opendatasoft.com/api/records/1.0/search/?dataset=belib-points-de-recharge-pour-vehicules-electriques-donnees-statiques&q=" + lieu.value + "&rows=1")
    .then(reponse => reponse.json())
    .then(data => { 
        const tampLieu = lieu.value.toLowerCase();
        console.log(tampLieu);
        /*console.log(data);*/
        const records = data.records;
        /*console.log(records);*/
        if (tampLieu=="" || tampLieu=="rue" || tampLieu=="boulevard") {
            console.log("Erreur de saisie");
        }
        else if(records.length==0) {   
            const adresse_station = data.records[0].fields.adresse_station;
            console.log(adresse_station); 
            const h3 = document.createElement("h3");
            output.appendChild(h3);
            const textContent = document.createTextNode(adresse_station);
            h3.appendChild(textContent);
            const br = document.createElement("br");
            output.appendChild(br);     
            output.textContent = ""; 
            output.textContent = "Pas de bornes";
            const br = document.createElement("br");
            output.appendChild(br);
        }
        else {
            const adresse_station = data.records[0].fields.adresse_station;
            console.log(adresse_station); 
            const h3 = document.createElement("h3");
            output.appendChild(h3);
            const textContent = document.createTextNode(adresse_station);
            h3.appendChild(textContent);
            const br = document.createElement("br");
            output.appendChild(br);
        }
    })
}

