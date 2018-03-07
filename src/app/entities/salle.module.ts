import {MaterielModule} from "./materiel.module";

export class SalleModule extends MaterielModule {
    constructor(public id: number,
                public code: string,
                public cout: number,
                public isDisponible: boolean,
                public type: string,
                public capacite: number,
                public technicien: number) {
        super(id, code, cout, isDisponible, type, technicien);
    }

    toJSON(): any {
        return {
            code: this.code,
            cout: this.cout,
            isDisponible: this.isDisponible,
            type: this.type,
            capacite: this.capacite,
            technicien: {id: this.technicien}
        }
    }
}