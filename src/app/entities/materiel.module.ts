export class MaterielModule {
    constructor(public id: number,
                public code: string,
                public cout: number,
                public isDisponible: boolean,
                public type: string,
                public technicien: number) {
    }
}