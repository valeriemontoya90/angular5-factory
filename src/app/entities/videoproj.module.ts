import {MaterielModule} from "./materiel.module";

export class VideoprojModule extends MaterielModule {
    constructor(public id: number,
                public code: string,
                public cout: number,
                public isDisponible: boolean,
                public type: string,
                public technicien: number) {
        super(id, code, cout, isDisponible, type, technicien);
    }

    toJSON(): any {
        return {
            id: this.id,
            code: this.code,
            cout: this.cout,
            isDisponible: this.isDisponible,
            type: this.type,
            technicien: {id: this.technicien}
        }
    }
}