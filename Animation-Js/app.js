//-----Cloner un objet------//

const utilisataeur = {
    nom: "Tom",
    age: 45,
    taille: 190,
    poids: 85
}
const utilisateur2 = {
    ...utilisataeur
}
//console.log(utilisateur2);

const fruitsRouges = {
    fraise: 12,
    tomate: 3,
    cerise: 34
}
const fruitsJaunes = {
    banane: 15,
    citron: 2,
    poire: 8
}
const pannierDeFruits = {
    ...fruitsJaunes,
    ...fruitsRouges
}
//console.log(pannierDeFruits);


//----iterer avec for in------//

const chatsRefuge = {
    siamoi: 2,
    persan: 5,
    sphynx: 8,
    ragdoll: 1
}
for (const chat in chatsRefuge) {
    console.log(chat, chatsRefuge[chat]);
}
const voiture = {
    marque: "Ferrari",
    modele: "Enzo",
    couleur: "Rouge"
}

const sansCouleur = ({ couleur, ...voitureSansCouleur }) => {
    //console.log(couleur);
    return voitureSansCouleur;
}
console.log(sansCouleur(voiture));
// aditioner les valeur d'un objet///

const depenses = {
    chauffage: 100,
    voiture: 70,
    internet: 36,
    tel: 24,
    assurances: 35,
    nouriture: 450,
    loisirs: 230
}
const total = Object.values(depenses).reduce((add, depense) => add + depense);


console.log(total);