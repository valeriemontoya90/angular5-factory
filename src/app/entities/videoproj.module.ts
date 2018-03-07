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
}