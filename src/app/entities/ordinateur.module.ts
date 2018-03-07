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
                public hdd: number,
                public dateAchat: Date) {
        super(id, code, cout, isDisponible, type, technicien);
    }
}