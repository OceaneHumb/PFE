function carte (tampLieu){

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
            
            let strAdresse = data.records[0].fields.l_adr;
            var splitted = strAdresse.split(' '); // On coupe à chaque fois qu'on rencontre un espace
            var i=1;
            strAdresse = splitted[i];
            while (i!=splitted.length-1) {
                ++i;
                strAdresse += " ";
                strAdresse += splitted[i];
            };

            console.log(strAdresse, "test");

            L.marker([longitude, latitude]).addTo(lgMarkers);

            macarte.setView([longitude, latitude], 18);

            strAdresse = strAdresse.toLowerCase();

        })

    }
    return(strAdresse);
}


