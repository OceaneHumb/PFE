function axe(lieurecherche){
    console.log("axe");
    
    fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=comptages-routiers-permanents&q=" + lieu.value + "&rows=1")
    .then(reponse => reponse.json())
    .then(data => { 

        /*var vider1 = document.getElementById('output').textContent = "";
        var vider2 = document.getElementById('resultat').textContent = "";
        var compteur = 0;
        const records = data.records;*/

        if (lieurecherche=="" || lieurecherche=="rue" || lieurecherche=="boulevard") {
            console.log("Erreur de saisie");
        }

        else if(records.length==0) {   
            console.log("axeok");
            const br = document.createElement("br");
            output.appendChild(br);
            const img = document.createElement("img");
            img.src = "img/check.png";
            img.classList = "validation";
            output.appendChild(img);
            const div = document.createElement("div");
            output.appendChild(div);
            const texteBorne = document.createTextNode("Ce n'est pas un axe prioritaire");
            div.classList = "check";
            div.appendChild(texteBorne);
        }
        else {
            console.log("axepasok");
            const adresse_station = data.records[0].fields.adresse_station;
            const br = document.createElement("br");
            output.appendChild(br);
            const img = document.createElement("img");
            img.src = "img/croix.png";
            img.classList = "validation";
            output.appendChild(img);
            const div = document.createElement("div");
            output.appendChild(div);
            const texteBorne = document.createTextNode("C'est un axe prioritaire");
            div.classList = "croix";
            div.appendChild(texteBorne);
            //++compteur;
        }
        /*if (compteur == 1) {
            const pC = document.createElement("p");
            resultat.appendChild(pC);
            const textResultC = document.createTextNode("Cette école ne remplit pas encore tous les critères pour pouvoir faire partie du projet 'Rues aux écoles'.");
            pC.appendChild(textResultC);
            const divR = document.createElement("div");
            divR.classList = "rue";
            resultat.appendChild(divR);
            const pR = document.createElement("p");
            pR.classList = "rouge";
            divR.appendChild(pR);
            const textResult = document.createTextNode("Ecole Primaire Renauld : pas éligible");
            pR.appendChild(textResult);
            const imgR = document.createElement("img");
            imgR.src = "img/croix.png";
            imgR.classList = "conclusion";
            resultat.appendChild(imgR);
        }*/
    })

    return("ok ");
}

