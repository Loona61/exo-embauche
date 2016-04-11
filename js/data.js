// Définition de l'objet boutique via un constructeur
function boutique(id, nom, adresse, horaires, produitsid) {
    this.id = id;
    this.nom = nom;
    this.adresse = adresse;
    this.horaires = horaires;
    this.produitsid = produitsid;
}

// Définition de l'objet produit via un constructeur
function produit(id, nom, prix) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
}

//ajout de boutique
var listeBoutique = [
    new boutique(1, 'Boutique du Stade', '4 Rue de la Foire aux Vins 75012 Paris', 'Lun-Ven 10h00 19h00/Sam 10h00 12h00', [1,2]),
    new boutique(2, 'Marques à gogo', '15 Avenue du président imaginaire 13001 Marseille', 'Lun-Ven 10h00 18h00', [1,2]),
    new boutique(3, 'Les magiciens du net', '2 place du centre 75000 Paris', 'Lun-Mar 10h00 19h00,Mer 10h00 14h00, Jeu-Ven 10h00 19h00', [1,2]),
    new boutique(4, 'Articles de luxe', '154 boulevard Rodriguez 69000 Lyon', 'Lun-Ven 10h00 19h00', [1,2]),
    new boutique(5, 'Marché aux puces', '4 Rue Frank Herbert 17000 La Rochelle', 'Lun-Dim 10h00 19h00', [1,2]),
];

//ajout de produit
var listeProduit = [
    new produit(1, 'Le développement pour les pros', 14.90),
    new produit(2, "L'avenir de la France dans les 100 prochaines années (et des poussières)", 5),
];

var produitSelect=new Array();
var produitfin=new Array();
var total=0;