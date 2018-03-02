import {EmailValidator} from "@angular/forms";
export class StagiaireModule{
    constructor(
        public id: number,
        public nom: String,
        public prenom: String,
        public adresse: String,
        public codePostal: String,
        public mail: EmailValidator,
        public cursusDeFormation: String,
        public ordinateur: String
    ){
    }
}