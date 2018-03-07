import {MaterielModule} from "./materiel.module";

export class OrdinateurModule extends MaterielModule {
    constructor(public id: number,
                public code: string,
                public cout: number,
                public isDisponible: boolean,
                public type: string,
                public technicien: number,
                public processeur: string,
                public ram: number,
                public disqueDur: number,
                public anneeAchat: Date) {
        super(id, code, cout, isDisponible, type, technicien);
    }

    toJSON(): any {
        return {
            id: this.id,
            code: this.code,
            cout: this.cout,
            isDisponible: this.isDisponible,
            type: this.type,
            technicien: {id: this.technicien},
            processeur: this.processeur,
            ram: this.ram,
            disqueDur: this.disqueDur,
            anneeAchat: this.anneeAchat
        }
    }
}