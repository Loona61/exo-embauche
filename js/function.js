function afficheBoutique()
{
    for (i=0;i<listeBoutique.length;i++){
        document.getElementsByClassName('container')[0].innerHTML += "\
        <div class='boutique'>\
            <div class='nom'>"+listeBoutique[i].nom+"</div>\
            <div class='adresse'>"+listeBoutique[i].adresse+"</div>\
            <div class='horaire'>\
                <ul class='liste'>\
                </ul>\
            </div>\
            <a class='select' href='#' onclick='afficheProduit("+i+")'>Selectionner</a>\
        </div>";
        var horairesComplete = listeBoutique[i].horaires;
        var horaireSplit = horairesComplete.split('/');
        for (h=0;h<horaireSplit.length;h++){
            document.getElementsByClassName('liste')[i].innerHTML += "<li><b>"+horaireSplit[h]+"</b></li>";
        }
    }
}

function afficheProduit(idBoutique)
{
    document.getElementsByClassName('container')[0].innerHTML ="";
    document.getElementsByClassName('container')[0].innerHTML += "\
        <div class='boutique'>\
            <div class='nom'>"+listeBoutique[idBoutique].nom+"</div>\
            <table class='tableauProd'>\
            </table>\
            <a class='select' href='#' onclick='afficheRecap("+idBoutique+")'>Suivant</a>\
        </div>";
        for (nbprod=0;nbprod<listeBoutique[idBoutique].produitsid.length;nbprod++){
                idprod=listeBoutique[idBoutique].produitsid[nbprod]-1;
                    document.getElementsByClassName('tableauProd')[0].innerHTML += "\
                        <tr class='tableau'>\
                            <td class='nomProd'><b>"+listeProduit[idprod].nom+"</b></td>\
                            <td class='prixProd'><b>"+listeProduit[idprod].prix+" €</b></td>\
                            <td class='nb'>\
                                <select id='quantite"+idprod+"'>\
                                    <option value='0'>0</option>\
                                    <option value='1'>1</option>\
                                    <option value='2'>2</option>\
                                    <option value='3'>3</option>\
                                    <option value='4'>4</option>\
                                    <option value='5'>5</option>\
                                </select>\
                            </td>\
                        </tr>";
            produitSelect.push(idprod);
        }
    document.getElementsByClassName('boutique')[0].style.width="100%";
}

function afficheRecap(idBoutique)
{    
    for (i=0;i<produitSelect.length;i++){
        idselect=produitSelect[i];
        if (document.getElementById('quantite'+idselect).selectedIndex != 0){
             var prix = document.getElementById('quantite'+idselect).selectedIndex * listeProduit[idselect].prix;
            total += prix;
            produitfin.push(idselect);
            produitfin.push(document.getElementById('quantite'+idselect).selectedIndex);
        }
    }
    
    document.getElementsByClassName('container')[0].innerHTML ="";
    document.getElementsByClassName('container')[0].innerHTML += "\
        <div class='boutique'>\
            <div class='nom'>Récapitulatif</div>\
            <div class='adresse'>Magasin: "+listeBoutique[idBoutique].nom+"</div>\
            <div class='horaire' style='display: none;'></div>\
            <table class='tableauProd'>\
            </table>\
            <div class='select'>Total : <span style='color:red'>"+total+" Euros</div>\
        </div>";
    
    if(produitfin.length << 0){
        for (i=0;i<produitfin.length;i++){
            idselect=produitfin[i];
                document.getElementsByClassName('tableauProd')[0].innerHTML += "\
                    <tr class='tableau'>\
                        <td class='nomProd'><b>"+listeProduit[idselect].nom+ "<span style='color:red'> x "+produitfin[i+1]+"</b></td>\
                    </tr>";
            i++;
        }
    }else{
        document.getElementsByClassName('horaire')[0].style.display = "block";
        document.getElementsByClassName('horaire')[0].innerHTML += "Pas de produit séléctionné";
    }
    document.getElementsByClassName('boutique')[0].style.width="100%";
}