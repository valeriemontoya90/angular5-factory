import {OrdinateurModule} from "./ordinateur.module";


export class StagiaireModule {
    constructor(public id: number,
                public nom: string,
                public prenom: string,
                public adresse: string,
                public codePostal: string,
                public mail: string,
                public ordinateur: OrdinateurModule) {
    }
}