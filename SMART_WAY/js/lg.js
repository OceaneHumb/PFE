/*boutton.onclick = () => {

    layerRemoveMarkers();
    var tampLieu = lieu.value.toLowerCase();

    if (tampLieu=="" || tampLieu=="rue" || tampLieu=="boulevard" || tampLieu=="oui") {
        console.log("Erreur de saisie");
        compteur = -1;
    }
    else {
        var j=0;
        var splittedLieu = tampLieu.split(' '); // On coupe à chaque fois qu'on rencontre un espace
        if(splittedLieu[0]=="boulevard") {
            tampLieu = "bd";
            while (j!=splittedLieu.length-1) {
                ++j;
                tampLieu += " ";
                tampLieu += splittedLieu[j];
            };
        }
        else if(splittedLieu[0]=="avenue") {
            tampLieu = "av";
            while (j!=splittedLieu.length-1) {
                ++j;
                tampLieu += " ";
                tampLieu += splittedLieu[j];
            };
        }

        fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=adresse_paris&q=" + tampLieu + "&rows=1")
        .then(reponse => reponse.json())
        .then(data => { 
            const longitude = data.records[0].fields.geom_x_y[0];
            const latitude = data.records[0].fields.geom_x_y[1];
            
            var strAdresse = data.records[0].fields.l_adr;
            var splitted = strAdresse.split(' '); // On coupe à chaque fois qu'on rencontre un espace
            var i=1;
            strAdresse = splitted[i];
            while (i!=splitted.length-1) {
                ++i;
                strAdresse += " ";
                strAdresse += splitted[i];
            };

            console.log(strAdresse);

            L.marker([longitude, latitude]).addTo(lgMarkers);

            macarte.setView([longitude, latitude], 18);

            strAdresse = strAdresse.toLowerCase();

            fetch("https://parisdata.opendatasoft.com/api/records/1.0/search/?dataset=belib-points-de-recharge-pour-vehicules-electriques-donnees-statiques&q=" + strAdresse + "&rows=1")
            .then(reponse => reponse.json())
            .then(data => { 
                var vider1 = document.getElementById('output').textContent = "";
                var vider2 = document.getElementById('resultat').textContent = "";
                var compteur = 0;
                const records = data.records;

                var k=0;
                var splittedAff = strAdresse.split(' '); // On coupe à chaque fois qu'on rencontre un espace
                if(splittedAff[0]=="bd") {
                    strAdresse = "boulevard";
                    while (k!=splittedAff.length-1) {
                        ++k;
                        strAdresse += " ";
                        strAdresse += splittedAff[k];
                    };
                };
                
                strAdresse = strAdresse.toUpperCase();

                if(records.length==0) {   
                    const h3 = document.createElement("h3");
                    h3.classList = "rue";
                    output.appendChild(h3);
                    const textContent = document.createTextNode(strAdresse);
                    h3.appendChild(textContent);
                    const br = document.createElement("br");
                    output.appendChild(br);
                    const img = document.createElement("img");
                    img.src = "img/check.png";
                    img.classList = "validation";
                    output.appendChild(img);
                    const div = document.createElement("div");
                    output.appendChild(div);
                    const texteBorne = document.createTextNode("Il n'y a pas de borne électrique");
                    div.classList = "check";
                    div.appendChild(texteBorne);
                }
                else {
                    const adresse_station = data.records[0].fields.adresse_station;
                    const h3 = document.createElement("h3");
                    h3.classList = "rue";
                    output.appendChild(h3);
                    const textContent = document.createTextNode(adresse_station);
                    h3.appendChild(textContent);
                    const br = document.createElement("br");
                    output.appendChild(br);
                    const img = document.createElement("img");
                    img.src = "img/croix.png";
                    img.classList = "validation";
                    output.appendChild(img);
                    const div = document.createElement("div");
                    output.appendChild(div);
                    const texteBorne = document.createTextNode("Il y a des bornes électrique");
                    div.classList = "croix";
                    div.appendChild(texteBorne);
                    ++compteur;
                }
                if (compteur == 1) {
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
                }
                else if (compteur==0) {
                    const pC = document.createElement("p");
                    resultat.appendChild(pC);
                    const textResultC = document.createTextNode("Cette école remplit tous les critères pour pouvoir faire partie du projet 'Rues aux écoles'.");
                    pC.appendChild(textResultC);
                    const divR = document.createElement("div");
                    divR.classList = "rue";
                    resultat.appendChild(divR);
                    const pR = document.createElement("p");
                    pR.classList = "vert";
                    divR.appendChild(pR);
                    const textResult = document.createTextNode("Ecole Primaire Renauld : éligible");
                    pR.appendChild(textResult);
                    const imgR = document.createElement("img");
                    imgR.src = "img/check.png";
                    imgR.classList = "conclusion";
                    resultat.appendChild(imgR);
                }
            });

        });
    }
}*/