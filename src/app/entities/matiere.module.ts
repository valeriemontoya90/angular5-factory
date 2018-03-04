export class MatiereModule {
    constructor(public id: number,
                public titre: string,
                public objectif: string,
                public prerequis: string,
                public contenu: string,
                public listeDuMateriel: string) {
    }
}