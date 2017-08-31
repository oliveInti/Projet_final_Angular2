import { Voyage } from '../entities/voyage';

export const VOYAGES:Voyage[]= [
    { 
        id: 1,
        libelle: "Voy1",
        destination:"Pays A",
        description:"Description Voy1",
        datesDepart:[
            "25/12/2017",
            "18/01/2018",
            "14/02/2018"
        ],
        duree:2,
        urlPhoto:"img1.gif",
        prix:399.99,
        categorie:1
    },
    {
        id: 2,
        libelle: "Voy2",
        destination:"Pays A",
        description:"Description Voy3",
        datesDepart:[
            "25/12/2017","18/01/2018","14/02/2018"
        ],
        duree:6,
        urlPhoto:"img1.gif",
        prix:499.99,
        categorie:2
    },
    {
        id:3,
        libelle: "Voy3",
        destination:"Pays B",
        description:"Description Voy3",
        datesDepart:[
            "25/12/2017","18/01/2018","14/02/2018"
        ],
        duree:4,
        urlPhoto:"img1.gif",
        prix:299.99,
        categorie:3
    }
]